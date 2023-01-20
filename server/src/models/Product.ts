import { model, Schema } from "mongoose";
import { IProduct } from "../types";

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    price: Number,
    description: {
      type: String,
      required: true,
    },
    rating: Number,
    supply: Number,
  },
  { timestamps: true },
);

const Product = model<IProduct>("Product", productSchema);

export default Product;
