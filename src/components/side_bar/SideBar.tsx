import { Chevron, Profile, SearchIcon } from "../../assets";
import Avatar from "../avatar/Avatar";
import ThemeSwitch from "../switch/ThemeSwitch";

const SideBar = () => {
  return (
    <div className="bg-gradient-to-t from-[#08182E] to-[#091A32] fixed h-full top-0 left-0 w-[310px] pt-14 rounded-2xl">
      <div className="relative pl-6">
        <div className="flex items-center gap-3 ">
          <Avatar src={Profile} />
          <div className="text-white leading-3">
            <h1 className="text-lg font-semibold">Elijah Abebe</h1>
            <p className="text-sm opacity-50">Front-End Developer</p>
          </div>
        </div>
        <button className="group absolute h-10 w-10 transition-all fully-center top-0 translate-y-1/2 right-0 bg-green-600 rounded-l-full duration-300">
          <Chevron className="text-[33px] -scale-100 text-white" />
        </button>
      </div>
      <div className={`px-5 mt-10`}>
        <div
          className={`bg-slate-800 flex items-center gap-3 px-4 py-3 rounded-3xl shadow-inner border-b-2 border-slate-500`}
        >
          <SearchIcon className={`text-slate-400`} />
          <input
            type="text"
            className={`bg-slate-800 placeholder:text-slate-300`}
            placeholder="Search"
          />
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default SideBar;
