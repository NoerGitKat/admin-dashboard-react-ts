import { Router } from "express";
import { getProducts } from "../controllers";

const storeRouter = Router();

storeRouter.route("/products").get(getProducts);

export default storeRouter;
