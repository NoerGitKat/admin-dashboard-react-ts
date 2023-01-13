import { ChevronRightOutlined } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { TNavItem, TTheme } from "../../../types";

function NavList({ navItems }: { navItems: TNavItem[] }) {
  const theme: TTheme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <List>
      {navItems.map(({ text, icon }: TNavItem) => {
        if (!icon) {
          return (
            <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
              {text}
            </Typography>
          );
        }
        const lcText = text.toLowerCase();
        return (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(`/${lcText}`);
              }}
              sx={{
                backgroundColor:
                  pathname === `/${lcText}`
                    ? theme.palette.primary[300]
                    : "transparent",
                color: theme.palette.secondary[100],
              }}
            >
              <ListItemIcon
                sx={{
                  ml: "2rem",
                  color: theme.palette.secondary[200],
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
              {pathname === `/${lcText}` && (
                <ChevronRightOutlined sx={{ ml: "auto" }} />
              )}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default NavList;
