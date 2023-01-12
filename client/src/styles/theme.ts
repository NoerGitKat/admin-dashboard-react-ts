import { TTheme, TThemePalette } from "../types";

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

export const lightTheme: TThemePalette = {
  grey: {
    "0": "#000000",
    "10": "#141414",
    "50": "#292929",
    "100": "#3d3d3d",
    "200": "#525252",
    "300": "#666666",
    "400": "#858585",
    "500": "#a3a3a3",
    "600": "#c2c2c2",
    "700": "#e0e0e0",
    "800": "#f0f0f0",
    "900": "#f6f6f6",
    "1000": "#ffffff",
  },
  primary: {
    "100": "#070812",
    "200": "#0d1025",
    "300": "#141937",
    "400": "#191F45",
    "500": "#21295c",
    "600": "#4d547d",
    "700": "#7a7f9d",
    "800": "#a6a9be",
    "900": "#d3d4de",
  },
  secondary: {
    "50": "#332a14",
    "100": "#665429",
    "200": "#997d3d",
    "300": "#cca752",
    "400": "#ffd166",
    "500": "#ffda85",
    "600": "#ffe3a3",
    "700": "#ffedc2",
    "800": "#fff6e0",
    "900": "#f0f0f0",
  },
};

// mui theme settings
export const themeSettings = (theme: string): TTheme => {
  return {
    palette: {
      theme,
      ...(theme === "dark"
        ? {
            // Dark mode
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
            // Light mode
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
