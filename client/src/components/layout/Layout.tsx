import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { useGetUserQuery } from "../../store/api/authApi";
import Sidebar from "../common/nav/Sidebar";
import Topbar from "../common/nav/Topbar";

function Layout() {
  const userId = useAppSelector((state) => state.global.userId);
  const { data: user } = useGetUserQuery(userId);

  return (
    <Box width="100%" height="100%">
      <Sidebar user={user} width="15.625rem" />
      <Box>
        <Topbar user={user} />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
