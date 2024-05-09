import { ReactNode } from "react";

export interface ListPropType {
  icon1?: ReactNode;
  icon2?: ReactNode;
  label: string;
  isCollapsed: boolean;
  toggleCollapse?: (state: boolean) => void;
}
const List = ({ icon1, icon2, label, isCollapsed }: ListPropType) => {
  return (
    <div
      className={`relative group py-3 px-3 flex justify-between items-center cursor-pointer rounded-xl border border-slate-500 transition-all`}
    >
      <div
        className={`flex gap-3 ${
          isCollapsed ? "translate-x-[10px] gap-0  hover:overflow-visible" : ""
        } items-center duration-500`}
      >
        <button
          className={`relative shrink-0 ${
            isCollapsed ? "scale-110 group-hover:scale-[1.35]" : "scale-100"
          } duration-500`}
        >
          {icon1}
        </button>
        <p
          className={`text-white  ${
            isCollapsed
              ? "w-0 text-[0rem] opacity-50 group-hover:text-base group-hover:scale-100 group-hover:w-auto group-hover:opacity-100 group-hover:translate-x-11 duration-300"
              : "w-auto opacity-100 duration-500 "
          } origin-left`}
        >
          {label}
        </p>
      </div>
      <button
        className={`shrink-0 ${
          isCollapsed ? "w-0 opacity-0" : "scale-100 opacity-100"
        } mr-3 duration-500`}
      >
        {icon2}
      </button>
      <div
        className={`absolute right-2 animate-pulse group-hover:animate-none ${
          isCollapsed ? "-translate-x-3 -translate-y-[11px]" : ""
        } bg-green-500 w-2 h-2 rounded-full duration-300`}
      />
    </div>
  );
};

export default List;
