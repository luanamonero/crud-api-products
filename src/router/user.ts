import { Router } from 'express';
import create from '../controllers/user';
import { validationUser, validateCreate } from '../middlewares/validationsUser';

const userRoutes = Router();

userRoutes.post('/', validationUser, validateCreate, create.create);

export default userRoutes;