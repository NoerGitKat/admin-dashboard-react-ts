import { IProductStats } from "interfaces";
import { model, Schema } from "mongoose";

const productStatsSchema: Schema = new Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: {
      date: String,
      totalSales: Number,
      totalUnits: Number,
    },
  },
  { timestamps: true },
);

const ProductStats = model<IProductStats>("ProductStats", productStatsSchema);

export default ProductStats;
