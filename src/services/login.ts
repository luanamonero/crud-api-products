import jwt from 'jsonwebtoken';
import Message from '../enums/Error';
import StatusCode from '../enums/StatusCode';
import { CodeResponse, Jwt, ResponseLogin } from '../interfaces';
import findUser from '../models/login';

const secret = 'monero';

const login = async (user: ResponseLogin): Promise<CodeResponse> => {
  const result = await findUser(user);
    
  if (!result || result.password !== user.password) {
    return { code: StatusCode.UNAUTHENTICATED, response: { error: Message.invalidUSer } };
  }

  const jwtConfig: Jwt | any = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const { id, username } = result;
  const token: string = jwt.sign({ data: id, username }, secret, jwtConfig);

  return { code: StatusCode.OK, response: { token } };
};

export default login;