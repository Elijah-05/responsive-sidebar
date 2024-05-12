import { MoonIcon, SunIcon } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../hooks/type_hooks";
import { changeTheme } from "../../redux/reducer";
import { themes } from "../../utils/constants/constants";
import { CollapsePropsType } from "../../utils/types/types";

const ThemeSwitch = ({ isCollapsed }: CollapsePropsType) => {
  const { isDark, theme } = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    isCollapsed &&
      dispatch(
        changeTheme(
          isDark
            ? { isDark: false, theme: themes.lightPalette }
            : { isDark: true, theme: themes.nightPalette }
        )
      );
  };

  return (
    <div
      className={`group flex items-center justify-evenly ${
        isCollapsed ? "h-[64px] scale-[0.8] bottom-6" : "w-auto bottom-20"
      } absolute overflow-hidde left-6 right-6 border-2 ${
        theme.border_color
      } bg-opacity-5 h-12 grow rounded-full shadow-lg duration-500`}
    >
      <button
        onClick={() =>
          dispatch(changeTheme({ isDark: false, theme: themes.lightPalette }))
        }
        className={` w-1/2 ${
          isCollapsed ? "text-[0rem] scale-0" : "flex scale-100"
        } ${
          isDark ? "opacity-50" : "opacity-0"
        } shrink-0 flex justify-center items-center gap-4 duration-1000`}
      >
        <SunIcon className="text-2xl text-slate-500" />
        <span className="text-slate-400">Light</span>
      </button>
      <button
        onClick={() =>
          dispatch(changeTheme({ isDark: true, theme: themes.nightPalette }))
        }
        className={` w-1/2 ${
          isCollapsed ? "text-[0rem] scale-0" : "flex scale-100"
        } ${
          isDark ? "opacity-0" : "opacity-50"
        } shrink-0 flex justify-center items-center gap-4 duration-1000`}
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
        } ${
          theme.primary_color.bg
        } text-white flex justify-center items-center gap-4 scale-[0.94] h-full rounded-full duration-500 transition-all`}
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
        } ${theme.text_color} transition-all duration-300`}
      >
        {isDark ? "Dark" : "Light"}
      </span>
    </div>
  );
};

export default ThemeSwitch;
