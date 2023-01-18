import { ERole } from "enums";

export type TAffilliateStat = {
  _id: string;
  userId: string;
  affiliateSales: string[];
};

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
