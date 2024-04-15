import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  name: string;
  age: number;
  email: string;
  password: string;
  is_active: boolean;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  is_active: { type: Boolean, required: true, default: true },
});

export default mongoose.model<User>("User", userSchema);
