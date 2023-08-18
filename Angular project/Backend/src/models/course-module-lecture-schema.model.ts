import mongoose from "mongoose";
import { UserGrade } from "./user-grade-schema.model";

export interface CourseModuleLecture {
  title: string;
  date: Date;
  userGrades: UserGrade[];
}

const CourseModuleLectureSchema = new mongoose.Schema<CourseModuleLecture>({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  userGrades: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserGrade'
  }]
});

const CourseModuleLecture = mongoose.model('CourseModuleLecture', CourseModuleLectureSchema);