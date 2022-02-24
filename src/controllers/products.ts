import { Request, Response } from 'express';
import { Products, CodeResponse } from '../interfaces';
import * as services from '../services/products';

const create = async (req: Request, res: Response) => {
  const product: Products = req.body;
  const { code, response }: CodeResponse = await services.create(product);
  return res.status(code).json(response);
};

const getAll = async (req: Request, res: Response) => {
  const { code, response }: CodeResponse = await services.getAll();
  return res.status(code).json(response);
};
  
export {
  create,
  getAll,
};