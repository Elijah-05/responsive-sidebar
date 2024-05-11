import { useNavigate } from "react-router-dom";
import {
  Chevron,
  DashboardIcon,
  ExchangeIcon,
  GraphIcon,
  MessageIcon,
  NotificationIcon,
  PlusIcon,
  Profile,
  SettingIcon,
  ThemeIcon,
  WalletIcon,
} from "../../assets";
import { useAppSelector } from "../../hooks/type_hooks";
import { CollapsePropsType } from "../../utils/types/types";
import Avatar from "../avatar/Avatar";
import List from "../list/List";
import Search from "../search/Search";
import ThemeSwitch from "../switch/ThemeSwitch";
import SideBarFooter from "./SideBarFooter";

const SideBar = ({ isCollapsed, toggleSideBar }: CollapsePropsType) => {
  const theme = useAppSelector(({ theme: { theme } }) => theme);
  const navigate = useNavigate();

  const handleInnerNavigate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    path: string
  ) => {
    e.stopPropagation();
    path && navigate(path);
  };

  return (
    <div
      className={`${theme.sidebar_bg} ${
        isCollapsed ? "w-28" : "w-[330px]"
      }  fixed h-full top-0 left-0 pt-14 rounded-2xl transition-all duration-500`}
    >
      <div
        className={`relative ${
          isCollapsed ? "pl-5" : "pl-6"
        } transition-all duration-300 `}
      >
        <div className={`flex items-center gap-3 w-[100%] overflow-hidden`}>
          <Avatar src={Profile} isCollapsed={isCollapsed} />
          <div
            className={`${theme.text_color} transition-all shrink-0 duration-100 leading-7`}
          >
            <h1
              className={`text-[1.34rem] font-semibold ${
                isCollapsed ? "text-[0rem] opacity-0" : "opacity-100"
              } duration-500 tracking-wider`}
            >
              Elyas Abebe
            </h1>
            <p
              className={` text-sm ${
                isCollapsed ? "text-[0rem] opacity-0" : "opacity-50"
              } duration-500`}
            >
              Front-End Developer
            </p>
          </div>
        </div>
        <button
          onClick={() => toggleSideBar(!isCollapsed)}
          className={`group absolute h-9 fully-center bottom-1/2 translate-y-1/2 right-0 ${
            isCollapsed
              ? "translate-x-full rounded-r-full w-7"
              : "rounded-l-full w-8"
          } ${theme.primary_color.bg} transition-all duration-500`}
        >
          <Chevron
            className={`text-[30px] ${
              !isCollapsed ? "-scale-95 translate-x-1" : "scale-90"
            } text-white duration-300`}
          />
          <div
            className={`absolute h-full w-2 ${
              isCollapsed ? "-z-10" : "translate-x-[18px]"
            } ${theme.primary_color.bg} rounded-r-full  duration-500`}
          />
        </button>
      </div>
      <div className={`px-5 mt-10`}>
        <Search isCollapsed={isCollapsed} toggleSideBar={toggleSideBar} />
        <div className="space-y-[8px] my-6 ">
          <List
            isCollapsed={isCollapsed}
            icon1={<DashboardIcon className={`text-2xl `} />}
            label="Dashboard"
            path="/"
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<MessageIcon className={`text-2xl `} />}
            icon2={
              <div
                onClick={(e) => handleInnerNavigate(e, "message/new")}
                className="flex gap-3 flex-row-reverse"
              >
                <div className="text-white fully-center bg-red-500 w-6 h-6 scale-[0.83] rounded-full">
                  3
                </div>
                <div
                  className={`border ${theme.border_color} p-[2px] scale-[0.85] rounded-md`}
                >
                  <PlusIcon className="text-lg " />
                </div>
              </div>
            }
            label="Message"
            path="message"
            notifi
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<NotificationIcon className={`text-2xl scale-[1.23] `} />}
            icon2={
              <div className="text-white text-sm fully-center bg-red-500 w-6 h-6 scale-[0.83] rounded-full">
                7
              </div>
            }
            label="Notification"
            path="notification"
            notifi
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<GraphIcon className={`text-2xl `} />}
            label="Statistics"
            path="statistics"
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<WalletIcon className={`text-2xl `} />}
            icon2={<ExchangeIcon className={`text-2xl `} />}
            label="Wallet"
            path="wallet"
            notifi
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<SettingIcon className={`text-2xl `} />}
            label="Settings"
            path="settings"
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<ThemeIcon className={`text-2xl `} />}
            label="Theme"
            path="theme"
          />
        </div>
        <ThemeSwitch isCollapsed={isCollapsed} toggleSideBar={toggleSideBar} />
        <SideBarFooter isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default SideBar;
