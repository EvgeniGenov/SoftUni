import mongoose, {Schema, Types} from "mongoose";

interface IResetPasswordToken {
  userId: Types.ObjectId;
  token: string;
  createdAt: Date;
}

const ResetPasswordTokenSchema = new mongoose.Schema<IResetPasswordToken>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'reset-password-tokens'
});

ResetPasswordTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });
const ResetPassword = mongoose.model<IResetPasswordToken>('ResePasswordToken', ResetPasswordTokenSchema);

type ResetPasswordTokenDoc = ReturnType<(typeof ResetPassword)['hydrate']>;

export { ResetPassword, ResetPasswordTokenDoc, IResetPasswordToken};