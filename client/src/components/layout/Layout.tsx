import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Sidebar from "../Sidebar";

function Layout() {
  return (
    <Box width="100%" height="100%">
      <Sidebar width="15.625rem" />
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
