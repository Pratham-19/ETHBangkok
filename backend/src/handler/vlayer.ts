import { RequestHandler } from 'express';
import fs from 'fs';
import { preverifyEmail, createVlayerClient } from '@vlayer/sdk';

export const verifyEmail: RequestHandler = async (req, res) => {
  const email = fs.readFileSync('../hepler/mail.eml').toString();

  const unverifiedEmail = await preverifyEmail(email);

  // Create vlayer server client
  const vlayer = createVlayerClient();

  const prover = '0x1234567890123456789012345678901234567890';

  const proverABI = [
    {
      type: 'function',
      name: 'main',
      inputs: [
        {
          name: 'email',
          type: 'string',
          internalType: 'string',
        },
        {
          name: 'dnsRecords',
          type: 'string[]',
          internalType: 'string[]',
        },
      ],
      outputs: [
        {
          name: 'output',
          type: 'bytes',
          internalType: 'bytes',
        },
      ],
      stateMutability: 'view',
    },
  ] as const;

  const hash = await vlayer.prove({
    address: prover,
    proverAbi: proverABI,
    // proverAbi: emailProofProver.abi,
    functionName: 'main',
    args: [unverifiedEmail],
    chainId: 84532,
  });
  const result = await vlayer.waitForProvingResult(hash);

  res.status(200).json({
    success: true,
    message: 'Wallet and address created successfully',
  });
};
