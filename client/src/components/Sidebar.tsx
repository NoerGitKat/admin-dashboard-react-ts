import { Close } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { toggleSidebar } from "../store/globalSlice";
import NavBox from "./common/NavBox";

function Sidebar({ width }: { width: string }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isSidebarOpened = useAppSelector(
    (state) => state.global.isSidebarOpened,
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();
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
                    NAVIGATION
                  </Typography>
                </Box>

                <IconButton onClick={() => dispatch(toggleSidebar())}>
                  <Close />
                </IconButton>
              </NavBox>
            </Box>
            <List>
              { }
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

export default Sidebar;
