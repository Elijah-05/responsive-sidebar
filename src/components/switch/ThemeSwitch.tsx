import { useState } from "react";
import { SunIcon, MoonIcon } from "../../assets";
import { CollapsePropsType } from "../../utils/types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/type_hooks";
import { changeTheme } from "../../redux/reducer";
import { themes } from "../../utils/constants/constants";

const ThemeSwitch = ({ isCollapsed }: CollapsePropsType) => {
  const [isDark, setIsDark] = useState(true);
  const theme = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    dispatch(changeTheme(isDark ? themes.lightPalette : themes.darkPalette));
    setIsDark(!isDark);
  };

  return (
    <div
      className={`group flex items-center justify-evenly ${
        isCollapsed ? "h-[64px] scale-[0.8] bottom-6" : "w-auto bottom-20"
      } absolute overflow-hidde left-6 right-6 border-2 border-[#ffffff30] ${
        theme.active_list_bg
      } bg-opacity-5 h-12 grow rounded-full shadow-lg duration-500`}
    >
      <button
        onClick={() => {
          setIsDark(false);
          dispatch(changeTheme(themes.lightPalette));
        }}
        className={`${
          isCollapsed ? "text-[0rem] opacity-0" : "flex opacity-100"
        } shrink-0 flex justify-between items-center gap-4 duration-1000`}
      >
        <SunIcon className="text-2xl text-slate-500" />
        <span className="text-slate-400">Light</span>
      </button>
      <button
        onClick={() => {
          setIsDark(true);
          dispatch(changeTheme(themes.darkPalette));
        }}
        className={`${
          isCollapsed ? "text-[0rem] opacity-0" : "flex opacity-100"
        } shrink-0 flex justify-between items-center gap-4 duration-1000`}
      >
        <MoonIcon className="text-slate-500" />
        <span className="text-slate-400">Dark</span>
      </button>
      <button
        onClick={handleToggleTheme}
        className={`absolute left-0 ${
          isCollapsed
            ? "w-full"
            : `${isDark ? "translate-x-full" : "translate-x-0"} w-1/2`
        } flex justify-center items-center gap-4 scale-[0.94] h-full rounded-full ${
          theme.active_list_bg
        } ${theme.active_text_color} duration-500 transition-all`}
      >
        <div className=" fully-center">
          <MoonIcon
            className={`absolute ${isDark ? "opacity-100" : "opacity-0"} ${
              isCollapsed
                ? `scale-150 ${isDark ? "rotate-[360deg]" : "rotate-0"}`
                : "scale-100"
            } transition-all duration-500`}
          />
          <SunIcon
            className={`text-2xl ${isDark ? "opacity-0" : "opacity-100"} ${
              isCollapsed
                ? `scale-150 ${isDark ? "rotate-[360deg]" : "rotate-0"}`
                : "scale-100"
            } transition-all duration-500`}
          />
        </div>
        <span className={` duration-500 ${isCollapsed ? "hidden" : ""}`}>
          {isDark ? "Dark" : "Light"}
        </span>
      </button>
      <span
        className={`text-xl absolute right-0 ${
          isCollapsed
            ? "group-hover:translate-x-[105px] group-hover:scale-100 opacity-0 group-hover:opacity-100 scale-0"
            : "hidden"
        } ${theme.inactive_text_color} transition-all duration-300`}
      >
        {isDark ? "Dark" : "Light"}
      </span>
    </div>
  );
};

export default ThemeSwitch;
