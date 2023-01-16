import express from "express";
import { PORT } from "./constants";
import middlewares from "./middlewares";
import { authRouter, clientRouter } from "./routes";
import { connectDB, seedDB } from "./services/";

const app = express();

// Seed database

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
app.use("/auth", authRouter);

app.listen(PORT, async () => {
  try {
    await connectDB();
    await seedDB();
    console.log("Successfully seeded database!");
    return console.log(`Server is listening at http://localhost:${PORT}`);
  } catch (error) {
    console.log("Error!", error);
  }
});
