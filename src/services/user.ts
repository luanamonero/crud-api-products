import jwt from 'jsonwebtoken';
import { IUser, CodeResponse, Jwt } from '../interfaces';
import models from '../models/users';
import StatusCode from '../enums/StatusCode';

const secret = 'monero';

const create = async (data: IUser): Promise<CodeResponse> => {
  const user = await models.create(data);
  const { id, username } = user;
  const jwtConfig: Jwt | any = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token: string = jwt.sign({ data: id, username }, secret, jwtConfig);

  return { code: StatusCode.CREATED, response: { token } };
};

export default {
  create,
};