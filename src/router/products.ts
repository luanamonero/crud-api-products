import { Router } from 'express';
import * as controller from '../controllers/products';
import { validateCreate, validationProduct } from '../middlewares/validateProducts';
import validateJwt from '../middlewares/validateJWT';

const productRoutes = Router();

productRoutes.post('/', validateJwt, validationProduct, validateCreate, controller.create);
productRoutes.get('/', validateJwt, controller.getAll);

export default productRoutes;