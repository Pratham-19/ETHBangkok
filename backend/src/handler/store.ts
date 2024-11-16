import { TappdClient } from '@phala/dstack-sdk';
import { privateKeyToAccount, sign } from 'viem/accounts';
import { keccak256 } from 'viem';
import * as LitJsSdk from '@lit-protocol/lit-node-client';
import { accessControlConditions, DSTACK_ENDPOINT, NILLION_API_BASE, NILLION_APP_ID, USER_SEED } from '../utils/constants';
import { EncryptedData, StorageResult } from '../utils/type';
import { LIT_RPC, LitNetwork } from '@lit-protocol/constants';
import { generateAuthSig, createSiweMessageWithRecaps, LitAccessControlConditionResource, LitAbility } from '@lit-protocol/auth-helpers';
import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

// Get signer from dStack
export async function getDStackSigner() {
  const client = new TappdClient(DSTACK_ENDPOINT);
  const randomNumString = Math.random().toString();
  const randomDeriveKey = await client.deriveKey('/', randomNumString);
  const keccakPrivateKey = keccak256(randomDeriveKey.asUint8Array());
  const account = privateKeyToAccount(keccakPrivateKey);
  const ethWallet = new ethers.Wallet(keccakPrivateKey, new ethers.JsonRpcProvider(LIT_RPC.CHRONICLE_YELLOWSTONE));

  return {
    address: account.address,
    signer: ethWallet,
  };
}

// Encrypt data using Lit Protocol
export async function encryptData(data: string) {
  try {
    const litNodeClient = new LitJsSdk.LitNodeClientNodeJs({
      alertWhenUnauthorized: false,
      litNetwork: LitNetwork.DatilDev,
      debug: process.env.NODE_ENV !== 'production',
    });

    await litNodeClient.connect();

    const { ciphertext, dataToEncryptHash } = await LitJsSdk.encryptString(
      { accessControlConditions: accessControlConditions, dataToEncrypt: JSON.stringify(data) },
      litNodeClient,
    );

    return {
      ciphertext: ciphertext,
      dataToEncryptHash,
    };
  } catch (error) {
    console.error('Error encrypting data:', error);
    throw new Error('Failed to encrypt data with Lit Protocol');
  }
}

// Store encrypted data in Nillion
export async function storeInNillion(encryptedData: EncryptedData, secretName: string, userSeed: string): Promise<StorageResult> {
  try {
    // const response = await fetch(`${NILLION_API_BASE}/api/apps/ac804e44-fafc-49bd-a5fa-d1a480e8af66/secrets`, {
    console.log('Nillion App ID:', NILLION_APP_ID);
    const response = await fetch(`${NILLION_API_BASE}/api/apps/${NILLION_APP_ID}/secrets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: {
          nillion_seed: userSeed,
          secret_value: JSON.stringify(encryptedData),
          secret_name: secretName,
        },
        permissions: {
          retrieve: [],
          update: [],
          delete: [],
          compute: {},
        },
      }),
    });

    return await response.json();
  } catch (error) {
    console.error('Error storing in Nillion:', error);
    throw new Error('Failed to store data in Nillion');
  }
}

// Retrieve data from Nillion
export async function retrieveFromNillion(userSeed: string, secretName: string, storeId: string): Promise<EncryptedData> {
  try {
    const response = await fetch(
      `${NILLION_API_BASE}/api/secret/retrieve/${storeId}?retrieve_as_nillion_user_seed=${userSeed}&secret_name=${secretName}`,
    );
    const { secret } = await response.json();

    return JSON.parse(secret);
  } catch (error) {
    console.error('Error retrieving from Nillion:', error);
    throw new Error('Failed to retrieve data from Nillion');
  }
}

export const getSessionSignatures = async () => {
  const litNodeClient = new LitJsSdk.LitNodeClientNodeJs({
    alertWhenUnauthorized: false,
    litNetwork: LitNetwork.DatilDev,
    debug: process.env.NODE_ENV !== 'production',
  });

  await litNodeClient.connect();

  // Get the latest blockhash
  const latestBlockhash = await litNodeClient.getLatestBlockhash();
  const signer = await getDStackSigner();

  // Define the authNeededCallback function
  const authNeededCallback = async (params: any) => {
    if (!params.uri) {
      throw new Error('uri is required');
    }
    if (!params.expiration) {
      throw new Error('expiration is required');
    }

    if (!params.resourceAbilityRequests) {
      throw new Error('resourceAbilityRequests is required');
    }

    // Create the SIWE message
    const toSign = await createSiweMessageWithRecaps({
      uri: params.uri,
      expiration: params.expiration,
      resources: params.resourceAbilityRequests,
      walletAddress: signer.address,
      nonce: latestBlockhash,
      litNodeClient: litNodeClient,
    });

    // Generate the authSig
    const authSig = await generateAuthSig({
      signer: signer.signer,
      toSign,
    });

    return authSig;
  };

  const litResource = new LitAccessControlConditionResource('*');

  const sessionSigs = await litNodeClient.getSessionSigs({
    chain: 'ethereum',
    resourceAbilityRequests: [
      {
        resource: litResource,
        ability: LitAbility.AccessControlConditionDecryption,
      },
    ],
    authNeededCallback,
  });
  return sessionSigs;
};

export const decryptData = async (encryptedData: EncryptedData) => {
  console.log('Decrypting data:', encryptedData);
  console.log('Decrypting data:', encryptedData.ciphertext);
  const { ciphertext, dataToEncryptHash } = encryptedData;

  const litNodeClient = new LitJsSdk.LitNodeClientNodeJs({
    alertWhenUnauthorized: false,
    litNetwork: LitNetwork.DatilDev,
    debug: process.env.NODE_ENV !== 'production',
  });

  await litNodeClient.connect();

  // Get the session signatures
  const sessionSigs = await getSessionSignatures();

  // Decrypt the message
  const decryptedString = await LitJsSdk.decryptToString(
    {
      accessControlConditions,
      chain: 'ethereum',
      ciphertext,
      dataToEncryptHash,
      sessionSigs,
    },
    litNodeClient,
  );

  // Return the decrypted string
  return { decryptedString };
};
