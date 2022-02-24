import { Products, CodeResponse } from '../interfaces';
import * as models from '../models/products';
import StatusCode from '../enums/StatusCode';

const create = async (data: Products): Promise<CodeResponse> => {
  const product = await models.createProduct(data);
  const { id, name, amount } = product;
  
  return { code: StatusCode.CREATED, response: { item: { id, name, amount } } };
};

const getAll = async (): Promise<CodeResponse> => {
  const products = await models.getAll();
  return { code: StatusCode.OK, response: products };
};

export {
  create,
  getAll,
};