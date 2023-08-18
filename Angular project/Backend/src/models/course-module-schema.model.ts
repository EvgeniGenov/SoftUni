import mongoose from "mongoose";
import { CourseModuleLecture } from "./course-module-lecture-schema.model";

export interface CourseModules {
  title: string;
  description: string;
  lectures: CourseModuleLecture[];
  startDate: Date;
  endDate: Date;
}

const CourseModuleSchema = new mongoose.Schema<CourseModules>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lectures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseModuleLecture'
  }],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

const CourseModule = mongoose.model('CourseModule', CourseModuleSchema);
