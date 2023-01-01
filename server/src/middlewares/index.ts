import cors from "cors";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

config();

export default {
  cors,
  helmet,
  morgan,
};
