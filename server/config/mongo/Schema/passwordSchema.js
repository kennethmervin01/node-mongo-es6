import { Schema } from "mongoose";

const PasswordInfoSchema = new Schema({
  title: { type: String, required: true },
  url: String,
  password: { type: String, required: true },
  username: { type: String },
  email: { type: String },
  icon: { type: String },
  createDate: { type: Date, default: Date.now }
});

const Password = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", unique: true },
  socialPassword: [PasswordInfoSchema],
  updateDate: { type: Date, default: Date.now }
});

export default Password;
