import mongoose, { Schema, Document } from "mongoose";

export interface Role extends Document {
  user_id: string;
  role: string;
  is_active: boolean;
}

const roleSchema: Schema = new Schema({
  user_id: { type: String, required: true },
  role: { type: String, required: true },
  is_active: { type: Boolean, required: true, default: true },
});

export default mongoose.model<Role>("Role", roleSchema);
