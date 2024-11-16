import { Request, RequestHandler, Response } from 'express';
import { tokens, crates } from '../utils/constants';

export const getQuestAssets: RequestHandler = (req: Request, res: Response): void => {
  try {
    res.status(200).json({
      success: true,
      data: {
        tokens,
        crates,
      },
      message: 'Quest assets retrieved successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving quest assets',
      error: error.message,
    });
  }
};
