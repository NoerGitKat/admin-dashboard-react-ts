import { Request, Response } from "express";
import { Product, ProductStats, User } from "../models";
import { EHttpStatusCode } from "../types";

export async function getProducts(_req: Request, res: Response) {
  try {
    const products = await Product.find();

    if (!products) {
      throw new Error("No products found!");
    }

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stats = await ProductStats.findOne({ productId: product._id });
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

export async function getCustomers(_req: Request, res: Response) {
  try {
    // Temp: users are customers
    const customers = await User.find({ role: "user" }).select("-password");

    if (!customers) {
      throw new Error("No customers found!");
    }

    return res.status(EHttpStatusCode.OK).json(customers);
  } catch (error) {
    return res
      .status(EHttpStatusCode.NOT_FOUND)
      .json({ message: error.message });
  }
}
