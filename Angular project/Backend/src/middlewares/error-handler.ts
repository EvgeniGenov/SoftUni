import { Request, Response, NextFunction } from 'express';

import CustomError from "./../utilities/errorUtil";

const ErrorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const message2 = err.message || 'Internal Server Error';

  res.status(statusCode).json({ message: message2 });
};

export default ErrorHandler;
