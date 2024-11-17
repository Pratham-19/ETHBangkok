import express, { Request, Response } from 'express';
import { healthCheck } from '../handler/health';
import { getQuestAssets } from '../handler/quest';
import { encryptData, storeInNillion, decryptData, retrieveFromNillion } from '../handler/store';
import { walletHandler } from '../handler/cdp-wallet';
import { verifyEmail } from '../handler/vlayer';
import { claimQuest } from '../handler/claim-quest';

const router = express.Router();

router.get('/ping', healthCheck);

router.get('/quests', getQuestAssets);

router.post('/store', async (req: Request, res: Response): Promise<any> => {
  try {
    const { data, secretName, userSeed } = req.body;

    if (!data || !secretName || !userSeed) {
      return res.status(400).json({
        error: 'Missing required fields: data, or secretName',
      });
    }

    // Encrypt data
    const encryptedData = await encryptData(data);
    console.log('Data encrypted successfully', encryptedData);

    // const decryptedData = await decryptData(encryptedData);
    //
    // console.log('Data decrypted successfully', decryptedData);
    // Store in Nillion
    const result = await storeInNillion(encryptedData, secretName, userSeed);
    console.log('Data stored successfully:', result);

    res.json({
      secretName,
      userSeed,
      storeId: result.store_id,
    });
  } catch (error) {
    console.error('Error in store route:', error);
    res.status(500).json({ error: 'Failed to store data' });
  }
});

router.get('/retrieve', async (req, res): Promise<any> => {
  try {
    const { userSeed, secretName, storeId } = req.query;

    if (!userSeed || !secretName || !storeId) {
      return res.status(400).json({
        error: 'Missing required query parameters: userSeed, or secretName',
      });
    }

    // Retrieve encrypted data from Nillion
    const encryptedData = await retrieveFromNillion(userSeed as string, secretName as string, storeId as string);

    console.log('Data retrieved successfully:', encryptedData);

    // Decrypt the data using Lit Protocol
    const decryptedData = await decryptData(encryptedData);

    res.json({ data: decryptedData });
  } catch (error) {
    console.error('Error in retrieve route:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

router.get('/test', walletHandler);

router.post('/claim-quest', claimQuest);

export default router;
