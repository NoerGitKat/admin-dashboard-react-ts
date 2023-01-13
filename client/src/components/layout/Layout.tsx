import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/nav/Sidebar";
import Topbar from "../common/nav/Topbar";

function Layout() {
  return (
    <Box width="100%" height="100%">
      <Sidebar width="15.625rem" />
      <Box>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
