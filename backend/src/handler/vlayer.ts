import { RequestHandler } from 'express';
import fs from 'fs';
import { preverifyEmail, createVlayerClient } from '@vlayer/sdk';

import ProverABI from '../helper/proverABI.json';

export const verifyEmail: RequestHandler = async (req, res) => {
  const email = fs.readFileSync('../hepler/mail.eml').toString();

  const unverifiedEmail = await preverifyEmail(email);

  // Create vlayer server client
  const vlayer = createVlayerClient();

  const prover = '0x0Cef362585622762049eF968eD6f3C28Ba4bab67';

  const hash = await vlayer.prove({
    address: prover,
    proverAbi: ProverABI.abi as any,
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
