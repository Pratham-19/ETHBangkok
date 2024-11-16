import { Coinbase, Wallet } from '@coinbase/coinbase-sdk';
import { RequestHandler } from 'express';
import { CDP_WALLET_ID, CDP_WALLET_SEED, COINBASE_API_KEY_NAME, COINBASE_PRIVATE_KEY } from '../utils/constants';
import { TappdClient } from '@phala/dstack-sdk';
import { keccak256 } from 'viem';

let coinbase = Coinbase.configure({
  apiKeyName: COINBASE_API_KEY_NAME,
  privateKey: COINBASE_PRIVATE_KEY,
});

const endpoint = process.env.DSTACK_SIMULATOR_ENDPOINT || 'http://localhost:8090';

export const walletHandler: RequestHandler = async (req, res) => {
  const client = new TappdClient(endpoint);

  //   Call the deriveKey function and pass in the root of trust to derive a key
  const randomDeriveKey = await client.deriveKey('/', 'hello');

  const keccakPrivateKey = keccak256(randomDeriveKey.asUint8Array());

  let wallet = await Wallet.import({
    seed: CDP_WALLET_SEED,

    walletId: CDP_WALLET_ID,
  });

  console.log(`Wallet successfully created: `, wallet.toString());

  res.status(200).json({
    success: true,
    data: {
      wallet,
    },
    message: 'Wallet and address created successfully',
  });
};
