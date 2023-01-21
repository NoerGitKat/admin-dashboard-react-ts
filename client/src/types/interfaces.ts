import { Theme } from "@mui/material";
import { ReactNode } from "react";
import { ERole, ETheme } from "./enums";

export type TThemePalette = {
  grey: {
    0: string;
    10: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
  };
  primary: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
};

export type TTheme = Theme & {
  palette: {
    mode: string;
    primary: TThemePalette["primary"];
    secondary: TThemePalette["secondary"];
    background: {
      default: string;
      alt: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    h1: {
      fontFamily: string;
      fontSize: number;
    };
    h2: {
      fontFamily: string;
      fontSize: number;
    };
    h3: {
      fontFamily: string;
      fontSize: number;
    };
    h4: {
      fontFamily: string;
      fontSize: number;
    };
    h5: {
      fontFamily: string;
      fontSize: number;
    };
    h6: {
      fontFamily: string;
      fontSize: number;
    };
  };
};

export type TGlobalState = {
  theme: ETheme;
  isSidebarOpened: boolean;
  userId: string;
};

export type TNavItem = {
  text: string;
  icon: ReactNode | undefined;
};

interface DocumentResult<T> {
  _doc: T;
}

export interface IUser extends DocumentResult<IUser> {
  _id: string;
  name: string;
  email: string;
  password: string;
  city: string;
  state: string;
  country: string;
  occupation: string;
  phoneNumber: string;
  transactions: string[];
  role: ERole;
}

export interface IProduct extends DocumentResult<IProduct> {
  _id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  supply: number;
  stats: {
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
  };
}
