import { ReactNode } from "react";
import { ETheme } from "./enums";

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

export type TTheme = {
  palette: {
    primary: any;
    secondary: any;
    neutral: any;
    background: {
      default: string;
      alt: string;
    };
    theme: string;
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
};

export type TNavItem = {
  text: string;
  icon: ReactNode | undefined;
};
