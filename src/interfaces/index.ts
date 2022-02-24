export interface IUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface User extends IUser {
  id: number
}

export interface ResponseUser {
  id: number;
  username: string;
}

export interface Jwt {
  expiresIn: string;
  algorithm: string;
}

export interface CodeResponse {
  code: number;
  response?: any;
}

export interface ResponseLogin {
  username: string;
  password: string;
}

export interface Products {
  name: string;
  amount: string;
}

export interface ResponseProducts extends Products {
  id: number;
  orderId: number | null;
}