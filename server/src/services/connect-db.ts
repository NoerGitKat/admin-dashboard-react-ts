import { connect, set } from "mongoose";
import { MONGODB_URI } from "../constants";

set("strictQuery", false);

const connectDB = async () => await connect(MONGODB_URI);

export default connectDB;
