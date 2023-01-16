import { dataUser } from "../data";
import User from "../models/User";

async function seedDB() {
  await User.db.dropCollection("users");
  await User.insertMany(dataUser);
}
export default seedDB;
