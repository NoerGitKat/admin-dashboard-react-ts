import { Box, Typography, useTheme } from "@mui/material";

import { TTheme } from "../../types";

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  const theme = useTheme<TTheme>();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "0.3125rem" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
