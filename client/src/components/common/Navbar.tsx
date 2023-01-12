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
  useTheme,
} from "@mui/material";
import { GridMenuIcon } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { useSidebar } from "../../hooks";
import { setTheme } from "../../store/globalSlice";
import { TTheme } from "../../types";
import { ETheme } from "../../types/enums";

const navbarStyles = {
  position: "static",
  background: "none",
  boxShadow: "none",
};

const toolbarStyles = {
  justifyContent: "space-between",
};

const navBoxStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function Navbar() {
  const { isOpened, toggleSidebar } = useSidebar();
  const dispatch = useDispatch();
  const theme = useTheme<TTheme>();

  return (
    <AppBar sx={navbarStyles}>
      <Toolbar sx={toolbarStyles}>
        {/* LEFT SIDE */}
        <Box sx={navBoxStyles}>
          <IconButton onClick={toggleSidebar}>
            <GridMenuIcon />
          </IconButton>
          <Box
            sx={{
              ...navBoxStyles,
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
          </Box>
        </Box>
        {/* RIGHT SIDE */}
        <Box sx={navBoxStyles}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
