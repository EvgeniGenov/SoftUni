import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export interface UserGrade {
  userId: ObjectId;
  grade: number;
}

const UserGradeSchema = new mongoose.Schema<UserGrade>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  grade: {
    type: Number,
    required: true
  }
});

const UserGrade = mongoose.model('UserGrade', UserGradeSchema);