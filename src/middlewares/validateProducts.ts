import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import Message from '../enums/Error';
import { Products } from '../interfaces';

const properties = ['name', 'amount'];

function validateProperties(product: Products): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

const validateName = (name:string) => {
  if (typeof name !== 'string') throw Error(Message.notNameString);
  if (name.length < 3) throw Error(Message.invalidName);
};

const validateAmount = (amount:string) => {
  if (typeof amount !== 'string') throw Error(Message.notStringAmount);
  if (amount.length < 3) throw Error(Message.invalidAmount);
};

const validateCreate = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  
  try {
    validateName(name);
    validateAmount(amount);
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

function validationProduct(req: Request, res: Response, next: NextFunction) {
  const product: Products = req.body;
  const [valid, property] = validateProperties(product);

  if (!valid) {
    return res.status(StatusCode.BAD_REQUEST)
      .json({ error: `${capitalize(property)} is required` });
  }

  next();
}

export { 
  validationProduct, 
  validateName,
  validateCreate,
};
