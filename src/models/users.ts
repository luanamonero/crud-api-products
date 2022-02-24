import { ResultSetHeader } from 'mysql2';
import { IUser, ResponseUser } from '../interfaces';
import connection from './connection';

const create = async (data: IUser): Promise<ResponseUser> => {
  const { classe, password, level, username } = data;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (classe, password, level, username) VALUES (?, ?,?,?)', 
    [classe, password, level, username],
  );
  const { insertId: id } = result;

  const newUser: ResponseUser = { id, username };

  return newUser;
};

export default {  
  create,
};