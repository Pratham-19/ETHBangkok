import express from 'express';
import { healthCheck } from '../controller/health';

const router = express.Router();

router.get('/ping', healthCheck);

export default router;
