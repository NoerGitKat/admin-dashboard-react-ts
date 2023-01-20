import { MouseEvent, useState } from "react";

const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return { anchorEl, isOpen, openMenu, closeMenu };
};

export default useMenu;
