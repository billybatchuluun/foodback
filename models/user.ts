import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
  },
  password: {
    type: String,
    minlenght: 6,
    required: [true, "Please enter your password"],
  },
  address: {
    district: { type: String },
    street: { type: String },
    buildingNo: { type: Number },
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  createdAt: { type: Date, default: new Date() },
});
const User = model("User", userSchema);
export default User;
