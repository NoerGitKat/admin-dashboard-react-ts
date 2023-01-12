import { useCallback, useState } from "react";

const useSidebar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpened((prevState) => !prevState);
  }, [isOpened]);

  return { isOpened, toggleSidebar };
};

export default useSidebar;
