import { Request, Response, NextFunction } from 'express';

import UserService from "../services/auth.service";
import { IUser, User } from '../models/user-schema.model';
import { ErrorCustom } from '../models/error.model';

const getAllUsers = (async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers(res.locals.data);
  if ('status' in result) {
    res.status(result.status).send(result.message);
  } else {
    res.status(200).json(result);
  }
});

const getUserData = (async (req: Request, res: Response) => { 

  const token = res.locals.decodedtoken;
  if(token['userId']) {
    await UserService.getById(token['userId']).then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(err.status).json(err.message)
    }) 
  }   
});
const register = (async (req: Request, res: Response, next: NextFunction) => {
  
  await UserService.createUser(req.body).then(
    result => {
      res.status(200).json(result);
    }
  ).catch(
    err => {
      res.status(err.status).json(err.message);
      next(err)
    }
  );
    
});

const login = (async (req: Request, res: Response) => {
    
  const { email, password } = req.body;
  const token = await UserService.loginUser(email, password);
  
  if (!token) {
    res.status(401).json({ error: 'Invalid email or password' });
  
  } else {
    res.status(200).json({ token });
  }
  
});

const forgotPassword = (async (req: Request, res: Response) => {
    
  const result = await UserService.forgotPassword(req.body.email);
  
  if(result) {
    res.status(200).json('Password change initiated');
        
  } else {
    res.status(500).json('Server error');
  }
});

const resetPassword = (async (req: Request, res: Response) => {
  const token = req.params.token;
  console.log(token);
  const result = await UserService.resetPassword(req.params.token, req.body.password);

  if(result) {
    res.status(500).json('Password change done');
  } else {
    res.status(500).json('Server error');
  }

});

const UserController = {
  getAllUsers,
  register,
  login,
  forgotPassword,
  resetPassword,
  getUserData
};

export default UserController
function next(err: any) {
  throw new Error('Function not implemented.');
}

