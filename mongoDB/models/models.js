import { model, Schema } from "mongoose";
import { sSchema, tSchema } from "./schema";

// studentd Schema
const StudentSchema = new Schema(sSchema);

// teachers Schema
const TeacherSchema = new Schema(tSchema);

// student model
export const Student = model("Student", StudentSchema);

// teacher model
export const Teacher = model("Teacher", TeacherSchema);