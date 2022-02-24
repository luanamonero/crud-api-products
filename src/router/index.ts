// https://www.luiztools.com.br/post/como-usar-typescript-com-node-js-3/

import { Router } from 'express';
import userRoute from './user';
import loginRoutes from './login';
import productRoutes from './products';

const router = Router();

router.use('/users', userRoute);
router.use('/login', loginRoutes);
router.use('/products', productRoutes);

export default router;
