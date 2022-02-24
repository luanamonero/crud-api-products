import connection from './connection';
import { User, ResponseLogin } from '../interfaces';

const findUser = async (user: ResponseLogin): Promise<User> => {
  const { username, password } = user;
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?', 
    [username, password],
  );
  const [row] = result as User[];
  
  return row;
};

export default findUser;
