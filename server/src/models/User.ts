import { Document, model, Schema } from "mongoose";

enum ERole {
  user,
  admin,
  superadmin,
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  city: string;
  state: string;
  country: string;
  occupation: string;
  phone: string;
  transactions: string[];
  role: ERole;
}

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    occupation: {
      type: String,
    },
    phone: {
      type: String,
    },
    transactions: {
      type: Array,
    },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true },
);

const User = model<IUser>("User", userSchema);

export default User;
