import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  Close,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks";
import { toggleSidebar } from "../../../store/globalSlice";
import { TNavItem } from "../../../types";
import NavBox from "./NavBox";
import NavList from "./NavList";

const navItems: TNavItem[] = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

function Sidebar({ width }: { width: string }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isSidebarOpened = useAppSelector(
    (state) => state.global.isSidebarOpened,
  );

  return (
    <Box component="nav">
      {isSidebarOpened && (
        <Drawer
          open={isSidebarOpened}
          onClose={() => dispatch(toggleSidebar())}
          variant="persistent"
          anchor="left"
          sx={{
            width,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isDesktop ? 0 : "0.125rem",
              width,
              borderRight: "0.25rem solid black",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <NavBox styles={{ color: theme.palette.secondary.main }}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Mern Dashy
                  </Typography>
                </Box>

                <IconButton
                  color="inherit"
                  onClick={() => dispatch(toggleSidebar())}
                >
                  <Close />
                </IconButton>
              </NavBox>
            </Box>
            <NavList navItems={navItems} />
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

export default Sidebar;
