import { useRef, useState } from "react";
import { SearchIcon } from "../../assets";
import { CollapsePropsType } from "../../utils/types/types";

const Search = ({ isCollapsed, toggleSideBar }: CollapsePropsType) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleExpandSearch = () => {
    toggleSideBar(false);
    inputRef.current && inputRef.current.focus();
  };

  console.log({ isInputFocused });

  return (
    <div
      className={` group ${
        isInputFocused
          ? "border-t-2 border-b-2 border-blue-900"
          : "border-t-0 border-b-2 border-slate-500"
      } bg-slate-800 flex items-center gap-2 px-4 h-12 rounded-3xl shadow-inner transition-all duration-300`}
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
        } bg-slate-800 h-full placeholder:text-slate-300 duration-300 text-slate-100 indent-2 border-transparent stroke-none rounded-lg outline-none`}
        placeholder="Search"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <span
        className={`absolute scale-0 opacity-0 ${
          isCollapsed &&
          "group-hover:scale-100 group-hover:opacity-100 group-hover: group-hover:translate-x-20"
        } text-white duration-300`}
      >
        Search
      </span>
    </div>
  );
};

export default Search;
