import { Router } from 'express';

import GetUsersMiddleware from './../middlewares/get-user.middleware';
import UserController from '../controllers/auth.controller';

const userRoute = Router();

userRoute.get('/', GetUsersMiddleware.endUser, UserController.getAllUsers);

//authorizatiion
userRoute.post('/register', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.get('/protected', GetUsersMiddleware.verifyToken, UserController.getUserData);
// password change
userRoute.post('/forgot-password', UserController.forgotPassword);
userRoute.post('/reset-password/:token', UserController.resetPassword);

userRoute.put('/');

export default userRoute;
