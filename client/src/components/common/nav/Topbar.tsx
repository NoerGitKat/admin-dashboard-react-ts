import {
  ArrowDropDownOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { GridMenuIcon } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { useMenu } from "../../../hooks";
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
  const { anchorEl, isOpen, openMenu, closeMenu } = useMenu();

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
            {theme.palette.mode === ETheme.Dark ? (
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
            }}
          >
            <Button
              onClick={openMenu}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
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
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user && user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user && user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "1.5625rem",
                }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={closeMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <MenuItem onClick={closeMenu}>Profile</MenuItem>
              <MenuItem onClick={closeMenu}>My account</MenuItem>
              <MenuItem onClick={closeMenu}>Logout</MenuItem>
            </Menu>
          </NavBox>
        </NavBox>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
