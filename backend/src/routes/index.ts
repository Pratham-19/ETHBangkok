import express from 'express';
import { healthCheck } from '../handler/health';
import { getQuestAssets } from '../handler/quest';

const router = express.Router();

router.get('/ping', healthCheck);

router.get('/quests', getQuestAssets);

export default router;
