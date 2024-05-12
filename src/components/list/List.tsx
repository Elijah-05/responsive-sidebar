import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/type_hooks";

export interface ListPropType {
  isActive?: boolean;
  icon1?: ReactNode;
  icon2?: ReactNode;
  label: string;
  isCollapsed: boolean;
  toggleCollapse?: (state: boolean) => void;
  path?: string;
  notifi?: boolean;
}
const List = ({
  icon1,
  icon2,
  label,
  isCollapsed,
  path,
  notifi,
}: ListPropType) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentTheme = useAppSelector(({ theme: { theme } }) => theme);

  const isActive =
    path && (pathname.split("/").includes(path) || pathname === path);

  const variableStyle = `${currentTheme.primary_color.bg} ${
    isActive ? "bg-opacity-100" : "hover:bg-opacity-30"
  } ${isCollapsed ? "px-3 md:px-1 md:mx-2" : "px-3"} `;

  return (
    <div
      onClick={() => path && navigate(path)}
      className={`relative group py-3 bg-opacity-10 ${variableStyle} flex justify-between items-center cursor-pointer rounded-xl borde border-slate-500 transition-all duration-500`}
    >
      <div
        className={`flex gap-3 ${
          isCollapsed ? "md:translate-x-[10px] gap-0 hover:md:overflow-visible" : ""
        } items-center duration-500`}
      >
        <button
          className={`relative shrink-0 ${
            isCollapsed ? "scale-110 group-hover:scale-[1.35]" : "scale-100"
          } ${isActive ? "text-white" : currentTheme.text_color} duration-500`}
        >
          {icon1}
        </button>
        <p
          className={`  ${
            isCollapsed
              ? `md:w-0 md:text-[0rem] md:opacity-50 group-hover:md:text-base group-hover:md:scale-100 group-hover:md:w-auto group-hover:md:opacity-100 group-hover:md:translate-x-11 duration-300`
              : "w-auto opacity-100 duration-500 "
          } ${
            isActive
              ? `${isCollapsed ? `${currentTheme.text_color}` : "text-white"}`
              : currentTheme.text_color
          } origin-left`}
        >
          {label}
        </p>
      </div>
      <button
        className={`shrink-0 ${
          isCollapsed ? "md:scale-0 md:opacity-0" : "scale-100 opacity-100"
        }  ${
          isActive ? "text-white" : currentTheme.text_color
        } mr-3 duration-500`}
      >
        {icon2}
      </button>
      <div
        className={`absolute right-0 animate-pulse group-hover:animate-none ${
          isCollapsed ? "-translate-x-[5px] md:-translate-x-1 -translate-y-[12px] md:-translate-y-[16px]" : "-translate-x-2"
        } ${
          !notifi && "hidden"
        } bg-green-500 w-2 h-2 rounded-full duration-300`}
      />
    </div>
  );
};

export default List;
