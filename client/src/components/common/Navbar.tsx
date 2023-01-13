import {
  DarkModeOutlined,
  LightModeOutlined,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import { GridMenuIcon } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { setTheme, toggleSidebar } from "../../store/globalSlice";
import { TTheme } from "../../types";
import { ETheme } from "../../types/enums";
import NavBox from "./NavBox";

const navbarStyles = {
  position: "static",
  background: "none",
  boxShadow: "none",
};

const toolbarStyles = {
  justifyContent: "space-between",
};

function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme<TTheme>();

  return (
    <AppBar sx={navbarStyles}>
      <Toolbar sx={toolbarStyles}>
        {/* LEFT SIDE */}
        <NavBox>
          <IconButton onClick={() => dispatch(toggleSidebar())}>
            <GridMenuIcon />
          </IconButton>
          <NavBox
            styles={{
              backgroundColor: theme.palette.background.alt,
              borderRadius: "9px",
              gap: "3rem",
              padding: "0.1rem 1.5rem",
              margin: "0 0 0 1rem",
            }}
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </NavBox>
        </NavBox>
        {/* RIGHT SIDE */}
        <NavBox>
          <IconButton onClick={() => dispatch(setTheme())}>
            {theme.palette.theme === ETheme.Dark ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </NavBox>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
