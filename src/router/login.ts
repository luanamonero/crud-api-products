import { Router } from 'express';
import loginUser from '../controllers/login';
import validationLogin from '../middlewares/validationLogin';

const loginRoutes = Router();

loginRoutes.post('/', validationLogin, loginUser);

export default loginRoutes;