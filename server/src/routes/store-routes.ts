import { Router } from "express";
import { getCustomers, getProducts } from "../controllers";

const storeRouter = Router();

storeRouter.route("/products").get(getProducts);
storeRouter.route("/customers").get(getCustomers);

export default storeRouter;
