import { Request, Response } from 'express';
import { IUser, CodeResponse } from '../interfaces';
import services from '../services/user';

const create = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const { code, response }: CodeResponse = await services.create(user);
  return res.status(code).json(response);
};
  
export default {
  create,
};