import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { User, UserRole } from './../models/user-schema.model';

const getUser = (async (req: Request, res: Response, next: NextFunction) => {
  next();
});

const endUser = (async (req: Request, res: Response, next: NextFunction) => {
  const users = await User.find({}).lean();
    
  res.locals.data = users;
    
  next();
});

function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (!token) {
    res.sendStatus(403);
    return;
  }
  
  jwt.verify(token, 'secretkey', (err: any, decoded: any) => {
    if (err) {
      res.sendStatus(403);
      return;
    }
    
    res.locals.decodedtoken = decoded;
    next();
    });
  }

const GetUsersMiddleware = {
  endUser,
  getUser,
  verifyToken
}

export default GetUsersMiddleware;

