import mongoose from "mongoose";
import { CourseModules } from "./course-module-schema.model";

export interface ICourse { 
  title: string;
  description: string;
  modules: CourseModules[];
  startDate: Date;
  endDate: Date;
  userIds: number[];
}

const CourseSchema = new mongoose.Schema<ICourse>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseModule'
  }],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  userIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Course = mongoose.model('Course', CourseSchema);
