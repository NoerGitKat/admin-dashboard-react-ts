import { ERole } from "enums";

export type TAffilliateStat = {
  _id: string;
  userId: string;
  affiliateSales: string[];
};

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  city: string;
  state: string;
  country: string;
  occupation: string;
  phone: string;
  transactions: string[];
  role: ERole;
}

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  rating: number;
  supply: number;
}

export interface IProductStats extends Document {
  productId: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  year: number;
  monthlyData: [
    {
      month: string;
      totalSales: number;
      totalUnits: number;
    },
  ];
  dailyData: {
    date: string;
    totalSales: number;
    totalUnits: number;
  };
}
