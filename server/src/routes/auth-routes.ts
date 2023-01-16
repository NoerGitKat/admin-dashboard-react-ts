import { Router } from "express";
import { getUser } from "../controllers/auth-controllers";

const authRouter = Router();

authRouter.route("/user/:id").get(getUser);

export default authRouter;
