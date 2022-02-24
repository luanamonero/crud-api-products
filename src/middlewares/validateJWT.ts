import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

const secret = 'monero';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }
  try {
    verify(authorization, secret);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default auth; 