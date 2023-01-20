import {
  DarkModeOutlined,
  LightModeOutlined,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { GridMenuIcon } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { setTheme, toggleSidebar } from "../../../store/globalSlice";
import { IUser, TTheme } from "../../../types";
import { ETheme } from "../../../types/enums";
import NavBox from "./NavBox";

const topbarStyles = {
  position: "static",
  background: "none",
  boxShadow: "none",
};

const toolbarStyles = {
  justifyContent: "space-between",
};

function Topbar({ user }: { user: IUser | undefined }) {
  const dispatch = useDispatch();
  const theme = useTheme<TTheme>();

  return (
    <AppBar sx={topbarStyles}>
      <Toolbar sx={toolbarStyles}>
        {/* LEFT SIDE */}
        <NavBox>
          <IconButton color="inherit" onClick={() => dispatch(toggleSidebar())}>
            <GridMenuIcon />
          </IconButton>
          <NavBox
            styles={{
              backgroundColor: theme.palette.background.alt,
              borderRadius: "9px",
              gap: "3rem",
              padding: "0.1rem 0.35rem 0 1rem",
              margin: "0 0 0 1rem",
            }}
          >
            <InputBase sx={{ color: "inherit" }} placeholder="Search..." />
            <IconButton color="inherit">
              <Search />
            </IconButton>
          </NavBox>
        </NavBox>
        {/* RIGHT SIDE */}
        <NavBox>
          <IconButton color="inherit" onClick={() => dispatch(setTheme())}>
            {theme.palette.theme === ETheme.Dark ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton color="inherit">
            <SettingsOutlined />
          </IconButton>
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
          </NavBox>
        </NavBox>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
