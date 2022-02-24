import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import { IUser } from '../interfaces';

const properties = ['password', 'username'];

function validateProperties(user: IUser): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

// https://metring.com.br/javascript-primeira-letra-maiuscula
const capitalize = (str: string | null) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.substr(1);
};

function validationLogin(req: Request, res: Response, next: NextFunction) {
  const user: IUser = req.body;
  const [valid, property] = validateProperties(user);

  if (!valid) {
    return res.status(StatusCode.BAD_REQUEST)
      .json({ error: `${capitalize(property)} is required` });
  }

  next();
}

export default validationLogin;