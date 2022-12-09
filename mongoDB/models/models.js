import { model, models, Schema } from "mongoose";
import { sSchema, tSchema } from "./schema";

// studentd Schema
const StudentSchema = new Schema(sSchema);

// teachers Schema
const TeacherSchema = new Schema(tSchema);

// student model
export const Student = models.Student || model("Student", StudentSchema);

// teacher model
export const Teacher = models.Teacher || model("Teacher", TeacherSchema);