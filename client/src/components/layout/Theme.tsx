import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "../../hooks";
import { themeSettings } from "../../styles/theme";

function Theme({ children }: { children: React.ReactNode }) {
  const globalTheme = useAppSelector((state) => state.global.theme);
  const theme = useMemo(
    () => createTheme(themeSettings(globalTheme)),
    [globalTheme],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
