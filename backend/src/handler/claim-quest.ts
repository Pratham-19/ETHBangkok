import { Coinbase, Wallet } from '@coinbase/coinbase-sdk';
import { RequestHandler } from 'express';
import { CDP_WALLET_ID, CDP_WALLET_SEED, COINBASE_API_KEY_NAME, COINBASE_PRIVATE_KEY } from '../utils/constants';
import { TappdClient } from '@phala/dstack-sdk';
import { keccak256, createPublicClient, http, parseAbi } from 'viem';
import { baseSepolia } from 'viem/chains';
import { encryptData, storeInNillion } from './store';
import { toBigInt } from 'ethers';

const ABI = {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_dataAttester', type: 'address', internalType: 'address' },
        { name: '_tokenA', type: 'address', internalType: 'address' },
        { name: '_tokenB', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'claim',
      inputs: [
        { name: 'token', type: 'address', internalType: 'address' },
        { name: 'user', type: 'address', internalType: 'address' },
        { name: 'questId', type: 'uint256', internalType: 'uint256' },
        { name: 'location', type: 'string', internalType: 'string' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setDataAttester',
      inputs: [{ name: '_dataAttester', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setTokenA',
      inputs: [{ name: '_tokenA', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setTokenB',
      inputs: [{ name: '_tokenB', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
  ],
};

const QUEST_CONTRACT_ADDRESS = '0x128280B36551872E688cF2945A7baBE3878F508a';

// Interface for the request body
interface ClaimQuestRequest {
  walletAddress: string;
  location: {
    longitude: number;
    latitude: number;
  };
  questId: string;
  secretName: string;
  userSeed: string;
}

// Function to check if user meets quest requirements
async function checkQuestRequirements(questId: string, location: { longitude: number; latitude: number }): Promise<boolean> {
  return true;
}

let coinbase = Coinbase.configure({
  apiKeyName: COINBASE_API_KEY_NAME,
  privateKey: COINBASE_PRIVATE_KEY,
});

const endpoint = process.env.DSTACK_SIMULATOR_ENDPOINT || 'http://localhost:8090';

export const claimQuest: RequestHandler = async (req, res): Promise<any> => {
  try {
    const { walletAddress, location, questId, secretName, userSeed } = req.body as ClaimQuestRequest;

    if (!walletAddress || !location || !questId || !secretName || !userSeed) {
      return res.status(400).json({
        success: false,
        message: 'Missing required parameters',
      });
    }

    const requirementsPassed = await checkQuestRequirements(questId, location);
    if (!requirementsPassed) {
      return res.status(400).json({
        success: false,
        message: 'Quest requirements not met',
      });
    }

    const encryptedData = await encryptData(JSON.stringify(location));

    console.log('Data encrypted successfully', encryptedData);

    // const result = await storeInNillion(encryptedData, secretName, userSeed);
    const result = {
      store_id: 'sdfsdf-q3f4r23-231ad3',
      secretName: secretName,
    };

    console.log('Data stored successfully:', result);

    // 4. Create wallet
    let wallet = await Wallet.import({
      seed: CDP_WALLET_SEED,
      walletId: CDP_WALLET_ID,
    });

    console.log(`Wallet successfully created: `, wallet.toString());

    const publicClient = createPublicClient({
      chain: baseSepolia,
      transport: http(),
    });

    // 8. Call the claim function on the smart contract
    const transaction = await wallet.invokeContract({
      contractAddress: QUEST_CONTRACT_ADDRESS,
      abi: ABI.abi,
      method: 'claim',
      args: { token: '0xeD034F04d39eaE3188a7F2B3D47450A49a51d487', user: walletAddress, questId: '10000000', location: result.store_id },
    });

    await transaction.wait();

    // Wait for transaction confirmation
    const receipt = await publicClient.waitForTransactionReceipt({
      hash: transaction.getTransactionHash() ?? ('0x' as any),
    });

    res.status(200).json({
      success: true,
      data: {
        transactionHash: `https://base-sepolia.blockscout.com/tx/${receipt.transactionHash}`,
        storeId: result.store_id,
        wallet: wallet.toString(),
      },
      message: 'Quest claimed successfully',
    });
  } catch (error) {
    console.error('Error claiming quest:', error);
    res.status(500).json({
      success: false,
      message: 'Error claiming quest',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
