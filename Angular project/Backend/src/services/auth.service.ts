import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

import {ResetPassword, IResetPasswordToken } from './../models/reset-password-token.model';
import { User, UserRole } from './../models/user-schema.model';
import { IUser } from './../models/user-schema.model';
import { ErrorCustom } from './../models/error.model';
import CustomError from "./../utilities/errorUtil";

require('dotenv').config();

async function getAllUsers(users: IUser[]) {
  if (!users || users.length === 0) {
    const error: ErrorCustom = {
      status: 404,
      message: 'No users found',
    };
    return error;
  }
  return users;
}

async function getById(id: string) {
    return await User.findById(id);
}

async function getUserAsAdmin(id: string) {
  if (!id) {
    const error: ErrorCustom = {
      status: 404,
      message: 'No user found',
    };
  }

  const user = await User.findById(id)
    .catch((err: Error) => {
      const error: ErrorCustom = {
        status: 500,
        message: err.message,
      };
    });
    if (!user) {
        const error: ErrorCustom = {
            status: 404,
            message: 'No user found',
    };
    }
    return user;
}

async function createUser(userData: Partial<IUser>) {

  const user = new User({
    firstName: userData.firstName,
    lastName: userData.lastName,
    password: userData.password,
    email: userData.email
  });

  await user.save()
  .catch(err => {
    
    if(err.code === 11000) {
      throw new CustomError(409, 'Email already taken');
    }
    throw new CustomError(500, 'Internal Server Error');
  });

  const result = await User.create(user);
  return result;

}

const loginUser = async (email: any, password: string) => {
    
  const user: IUser | null = await User.findOne({ email: email });
     
  if (!user) {
    return false;
  }
  // check if the entered password is correct
  const isValid = user.validatePassword(password);
    
  if (isValid) {
    const expiresIn = '7d'
    const token = jwt.sign({userId: user._id}, 'secretkey',{ expiresIn });
    return token;
  }
  return false;
}

const forgotPassword = async (email: string) => {
  try {
       
    const user = await User.findOne({ email });
    if (!user) {
      const error: ErrorCustom = {
        status: 400,
        message: 'User not found',
      };
      return error;
    }
    const token = crypto.randomBytes(20).toString('hex');
    const Token: IResetPasswordToken = {
      userId: user?.id,
      token: token,
      createdAt: new Date(Date.now())
    }

    ResetPassword.create(Token)
    
    // const token = crypto.randomBytes(20).toString('hex');
    // const expirationTime= new Date(Date.now() + 3600000); // Token expires in 1 hour

    const mailOptions = {
      from: 'trevaxnamax@gmail.com', 
      to: email,
      subject: 'Password Reset',
      text: `You are receiving this email because you (or someone else) has requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://localhost:3000/reset-password/${token}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };
    
    await Transporter.sendMail(mailOptions);
    return true;
    
    } catch (error) {
      const reserror: ErrorCustom = {
        status: 500,
        message: 'Server error',
      };
      return reserror
    }
}
const resetPassword = async (token: string, password: string) => { 
  try {
    const passResetToken = await ResetPassword.findOne({token});
    
    if (!passResetToken) {
      return false;
    }
    const user = await User.findById(passResetToken.userId)
    
    if(!user) {
      return false;
    }
    
    user.password = password;
    
    await user.save();
    passResetToken.deleteOne();
    return true;
  } catch (error) {
    return false;
  }
}

const Transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
  user: "f0ef14bcd99926",
  pass: "397e567a439da3"
  }
});

const UserService = {
  getAllUsers,
  getById,
  getUserAsAdmin,
  createUser,
  loginUser,
  forgotPassword,
  resetPassword
};

export default UserService;