import { useEffect, useState } from "react";
import { themes } from "../constants/constants";
import { ThemePropTypes } from "../types/types";

const useStyles = () => {
  const [theme, setSelectedTheme] = useState<ThemePropTypes>(
    themes.nightPalette
  );

  const changeTheme = (newTheme: ThemePropTypes) => {
    setSelectedTheme(newTheme);
  };

  useEffect(() => {
    setSelectedTheme(theme);
    console.log("rendered! color Change");
  }, [theme]);

  return { theme, changeTheme };
};

export default useStyles;
