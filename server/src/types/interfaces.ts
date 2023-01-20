import { ERole } from "enums";

interface DocumentResult<T> {
  _doc: T;
}

export type TAffilliateStat = {
  _id: string;
  userId: string;
  affiliateSales: string[];
};

export interface IUser extends DocumentResult<IUser> {
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

export interface IProduct extends DocumentResult<IProduct> {
  name: string;
  price: number;
  description: string;
  rating: number;
  supply: number;
}

export interface IProductStats extends DocumentResult<IProductStats> {
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
