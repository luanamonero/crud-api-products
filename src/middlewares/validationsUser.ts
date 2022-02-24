import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import Message from '../enums/Error';
import { IUser } from '../interfaces';

const properties = ['classe', 'password', 'level', 'username'];

function validateProperties(user: IUser): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

const validatePassword = (password:string) => {
  if (typeof password !== 'string') throw Error(Message.notString);
  if (password.length < 9) throw Error(Message.invalidPassword);
};

const validateName = (name:string) => {
  if (typeof name !== 'string') throw Error(Message.notStringName);
  if (name.length < 3) throw Error(Message.invalidUserName);
};

const validateClasse = (classe:string) => {
  if (typeof classe !== 'string') throw Error(Message.notStingClasse);
  if (classe.length < 3) throw Error(Message.invalidClasse);
};

const validateLevel = (level:number) => {
  if (typeof level !== 'number') throw Error(Message.notNumber);
  if (level < 1) throw Error(Message.invalidLevel);
};

const validateCreate = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password, level, classe } = req.body;
  
  try {
    validateName(username);
    validateLevel(level);
    validatePassword(password);
    validateClasse(classe);
    next();
  } catch ({ message }) {    
    return res.status(StatusCode.UNPROCESSABLE).json({ error: message });
  }
};

// https://metring.com.br/javascript-primeira-letra-maiuscula
const capitalize = (str: string | null) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.substr(1);
};

function validationUser(req: Request, res: Response, next: NextFunction) {
  const user: IUser = req.body;
  const [valid, property] = validateProperties(user);

  if (!valid) {
    return res.status(StatusCode.BAD_REQUEST)
      .json({ error: `${capitalize(property)} is required` });
  }

  next();
}

export { 
  validationUser, 
  validatePassword,
  validateClasse,
  validateLevel,
  validateName,
  validateCreate,
};
