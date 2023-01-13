import { Box } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

const navBoxStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function NavBox({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: CSSProperties;
}) {
  return <Box sx={{ ...navBoxStyles, ...styles }}>{children}</Box>;
}

export default NavBox;
