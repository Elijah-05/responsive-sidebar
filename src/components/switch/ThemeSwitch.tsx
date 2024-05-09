import { useState } from "react";
import { SunIcon, MoonIcon } from "../../assets";
import { CollapsePropsType } from "../../utils/types/types";

const ThemeSwitch = ({ isCollapsed }: CollapsePropsType) => {
  const [isDark, setIsDark] = useState(false);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`flex items-center justify-evenly ${
        isCollapsed ? "h-[64px] scale-[0.8]" : "w-auto"
      } absolute bottom-20 overflow-hidden left-6 right-6 border-2 border-[#ffffff30] h-12 grow rounded-full duration-500`}
    >
      <button
        onClick={() => setIsDark(false)}
        className={`${
          isCollapsed ? "text-[0rem] opacity-0" : "flex opacity-100"
        } shrink-0 flex justify-between items-center gap-4 duration-1000`}
      >
        <SunIcon className="text-2xl text-slate-500" />
        <span className="text-slate-400">Light</span>
      </button>
      <button
        onClick={() => setIsDark(true)}
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
        } flex justify-center items-center gap-4 scale-[0.94] h-full rounded-full bg-yellow-200 duration-500 transition-all`}
      >
        <div className=" fully-center">
          <MoonIcon
            className={`absolute text-slate-500 ${
              isDark ? "opacity-100" : "opacity-0"
            } ${
              isCollapsed
                ? `scale-150 ${isDark ? "rotate-[360deg]" : "rotate-0"}`
                : "scale-100"
            } transition-all duration-500`}
          />
          <SunIcon
            className={`text-2xl text-slate-500 ${
              isDark ? "opacity-0" : "opacity-100"
            } ${
              isCollapsed
                ? `scale-150 ${isDark ? "rotate-[360deg]" : "rotate-0"}`
                : "scale-100"
            } transition-all duration-500`}
          />
        </div>
        <span
          className={`text-slate-400 duration-500 ${
            isCollapsed ? "hidden" : ""
          }`}
        >
          {isDark ? "Dark" : "Light"}
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitch;
