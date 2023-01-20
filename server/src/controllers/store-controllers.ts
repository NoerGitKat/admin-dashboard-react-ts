import { Request, Response } from "express";
import { Product, ProductStats } from "../models";
import { EHttpStatusCode } from "../types";

export async function getProducts(_req: Request, res: Response) {
  try {
    const products = await Product.find();

    if (!products) {
      throw new Error("No products found!");
    }

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stats = await ProductStats.find({ productId: product._id });
        return { ...product._doc, stats };
      }),
    );

    return res.status(EHttpStatusCode.OK).json(productsWithStats);
  } catch (error) {
    return res
      .status(EHttpStatusCode.NOT_FOUND)
      .json({ message: error.message });
  }
}
