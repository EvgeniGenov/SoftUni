import { Router } from 'express';

import userRoute from './user.route';
import ErrorHandler from './../middlewares/error-handler';

const mainRoute = Router();

mainRoute.use('/', userRoute);
mainRoute.use(ErrorHandler);
export default mainRoute;
