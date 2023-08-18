import mongoose, { ObjectId, Schema, Types } from 'mongoose';
import bcryptjs from 'bcryptjs';

export enum UserRole {
  End_User,
  Admin
}
export interface IUser {
  validatePassword(password: string): boolean;
  _id: ObjectId;
  role: UserRole;
  email: string;
  password: string;
  age: number;
  phone: string;
  country: string;
  repository: string;
  languages: string[];
  picture: ArrayBuffer;
  resume: ArrayBuffer;
  courseIds: number[];
  firstName: string;
  lastName: string;
  resetToken: string | undefined;
  resetTokenExpiration: Date | undefined;
}

const UserSchema: Schema = new mongoose.Schema<IUser>({
  role: {
    type: Number,
    default: UserRole.End_User,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiration: {
    type: Date,
  },
},
  {
    timestamps: true,
    collection: 'users',
  });

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc: UserDoc, ret: any) { delete ret._id; delete ret.password }
});

UserSchema.pre<UserDoc>('save', async function (next): Promise<void> {
  if (!this.isModified('password')) {
    return next();
  };

  const salt = await bcryptjs.genSalt(12);

  this.password = await bcryptjs.hash(this.password, salt);
});

UserSchema.methods.validatePassword = async function validatePassword(data: string) {
  return bcryptjs.compare(data, this.password);
};

const User = mongoose.model('User', UserSchema);
type UserDoc = ReturnType<(typeof User)['hydrate']>;
export { User, UserDoc };