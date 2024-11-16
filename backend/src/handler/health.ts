import { Request, Response, RequestHandler } from 'express';

export const healthCheck: RequestHandler = (_req: Request, res: Response): void => {
  res.status(200).send('pong');
};
