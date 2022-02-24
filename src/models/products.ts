import { ResultSetHeader } from 'mysql2';
import { Products, ResponseProducts } from '../interfaces';
import connection from './connection';

const createProduct = async (data: Products) => {  
  const { name, amount } = data;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)', 
    [name, amount],
  );
  
  return {
    id: result.insertId,
    name,
    amount,
  };
};

const getAll = async (): Promise<ResponseProducts[]> => {
  const [data] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return data as ResponseProducts[];
};

export {  
  createProduct,
  getAll,
};