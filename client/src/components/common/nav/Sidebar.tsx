import { Close, SettingsOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks";
import { toggleSidebar } from "../../../store/globalSlice";
import { IUser, TTheme } from "../../../types";
import NavBox from "./NavBox";
import navItems from "./navItems";
import NavList from "./NavList";

function Sidebar({ width, user }: { width: string; user: IUser | undefined }) {
  const theme: TTheme = useTheme();
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
              borderRight: "0.1rem solid black",
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
          <Box>
            <Divider />
            <NavBox
              styles={{
                textTransform: "none",
                gap: "1rem",
                margin: "1.5rem 2rem 0 3rem",
              }}
            >
              <Box height="2.5rem" width="2.5rem">
                <img
                  width="100%"
                  src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                />
              </Box>
              {user && (
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user && user.name}
                  </Typography>
                  <Typography
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    {user && user.occupation}
                  </Typography>
                </Box>
              )}
              <IconButton color="inherit">
                <SettingsOutlined
                  sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "1.5625rem ",
                  }}
                />
              </IconButton>
            </NavBox>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

export default Sidebar;
