import { useState } from "react";
import { SunIcon, MoonIcon } from "../../assets";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-evenly absolute bottom-5 left-6 right-6 border-2 border-[#ffffff30] py-4 grow rounded-full">
      <button
        onClick={() => setIsDark(false)}
        className={`flex justify-between items-center gap-4`}
      >
        <SunIcon className="text-2xl text-slate-500" />
        <span className="text-slate-400">Light</span>
      </button>
      <button
        onClick={() => setIsDark(true)}
        className="flex justify-between items-center gap-4"
      >
        <MoonIcon className="text-slate-500" />
        <span className="text-slate-400">Dark</span>
      </button>
      <div
        className={`absolute left-0 ${
          isDark ? "translate-x-full" : "translate-x-0"
        } flex items-center justify-evenly scale-[0.94] h-full w-1/2 rounded-full bg-yellow-200 duration-500 transition-all`}
      >
        <div className=" fully-center">
          <MoonIcon
            className={`absolute text-slate-500 ${
              isDark ? "opacity-100" : "opacity-0"
            } transition-all duration-500`}
          />
          <SunIcon
            className={`text-2xl text-slate-500 ${
              isDark ? "opacity-0" : "opacity-100"
            } transition-all duration-500`}
          />
        </div>
        <span className="text-slate-400 duration-500">
          {isDark ? "Dark" : "Light"}
        </span>
      </div>
    </div>
  );
};

export default ThemeSwitch;
