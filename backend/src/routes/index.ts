import express from 'express';
import { healthCheck } from '../controller/health';
import { getQuestAssets } from '../controller/quest';

const router = express.Router();

router.get('/ping', healthCheck);

router.get('/quests', getQuestAssets);

export default router;
