import express from "express";
import { PORT } from "./constants";
import middlewares from "./middlewares";
import { clientRouter } from "./routes";

const app = express();

// Configuration
app.use(express.json());
app.use(middlewares.helmet());
app.use(
  middlewares.helmet.crossOriginResourcePolicy({ policy: "cross-origin" }),
);
app.use(middlewares.cors());
app.use(middlewares.morgan("common"));

// Routes
app.use("/client", clientRouter);

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
