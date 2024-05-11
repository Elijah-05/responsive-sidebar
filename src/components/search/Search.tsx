import { useRef, useState } from "react";
import { SearchIcon } from "../../assets";
import { CollapsePropsType } from "../../utils/types/types";
import { useAppSelector } from "../../hooks/type_hooks";

const Search = ({ isCollapsed, toggleSideBar }: CollapsePropsType) => {
  const currentTheme = useAppSelector(({ theme }) => theme);
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleExpandSearch = () => {
    toggleSideBar(false);
    inputRef.current && inputRef.current.focus();
  };

  return (
    <div
      className={`${currentTheme.active_list_bg} bg-opacity-10 group ${
        isInputFocused
          ? `border-t-2 border-b-2`
          : "border-t-0 border-b-2 border-slate-500"
      } flex items-center gap-2 px-4 h-12 rounded-3xl shadow-inner transition-all duration-300`}
    >
      <SearchIcon
        onClick={() => isCollapsed && handleExpandSearch()}
        className={`text-slate-400 mt-[2px] ml-[2px] ${
          isCollapsed && "scale-150 translate-x-1/2"
        } transition-all duration-500`}
      />
      <input
        ref={inputRef}
        type="text"
        className={`${
          isCollapsed ? "w-0 opacity-0" : "w-full opacity-100"
        } bg-transparent h-full placeholder:${
          currentTheme.inactive_text_color
        } duration-300 ${
          currentTheme.inactive_text_color
        } indent-2 border-transparent stroke-none rounded-lg outline-none`}
        placeholder="Search"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <span
        className={`absolute scale-0 opacity-0 ${
          isCollapsed &&
          "group-hover:scale-100 group-hover:opacity-100 group-hover: group-hover:translate-x-[86px]"
        } ${currentTheme.inactive_text_color} duration-300`}
      >
        Search
      </span>
    </div>
  );
};

export default Search;
