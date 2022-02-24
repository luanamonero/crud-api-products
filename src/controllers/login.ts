import { Request, Response } from 'express';
import { CodeResponse } from '../interfaces';
import login from '../services/login';

const loginUser = async (req: Request, res: Response) => {
  const { code, response }: CodeResponse = await login(req.body);
  return res.status(code).json(response);
};

export default loginUser;