import { Router } from "express";
import { getProducts } from "../controllers";

const storeRouter = Router();

storeRouter.route("/").get(getProducts);

export default storeRouter;
