import { TThemePalette } from "../types";
import { reverseTheme } from "../utils";

// color design tokens export
export const darkTheme: TThemePalette = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45",
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    // yellow
    50: "#f0f0f0",
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

export const lightTheme = reverseTheme(darkTheme);

// mui theme settings
export const themeSettings = (mode: string) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              ...darkTheme.primary,
              main: darkTheme.primary[400],
              light: darkTheme.primary[400],
            },
            secondary: {
              ...darkTheme.secondary,
              main: darkTheme.secondary[300],
            },
            neutral: {
              ...darkTheme.grey,
              main: darkTheme.grey[500],
            },
            background: {
              default: darkTheme.primary[600],
              alt: darkTheme.primary[500],
            },
          }
        : {
            primary: {
              ...lightTheme.primary,
              main: darkTheme.grey[50],
              light: darkTheme.grey[100],
            },
            secondary: {
              ...lightTheme.secondary,
              main: darkTheme.secondary[600],
              light: darkTheme.secondary[700],
            },
            neutral: {
              ...lightTheme.grey,
              main: darkTheme.grey[500],
            },
            background: {
              default: darkTheme.grey[0],
              alt: darkTheme.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
