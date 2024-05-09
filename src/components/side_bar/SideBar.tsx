import {
  Chevron,
  DashboardIcon,
  ExchangeIcon,
  Github,
  GraphIcon,
  Linkedin,
  MessageIcon,
  NotificationIcon,
  PlusIcon,
  Profile,
  SettingIcon,
  Twitter,
  WalletIcon,
  WhatsApp,
} from "../../assets";
import { CollapsePropsType } from "../../utils/types/types";
import Avatar from "../avatar/Avatar";
import List from "../list/List";
import Search from "../search/Search";
import ThemeSwitch from "../switch/ThemeSwitch";

const SideBar = ({ isCollapsed, toggleSideBar }: CollapsePropsType) => {
  return (
    <div
      className={` ${
        isCollapsed ? "w-28" : "w-[330px]"
      } bg-gradient-to-t from-[#08182E] to-[#091A32] fixed h-full top-0 left-0 pt-14 rounded-2xl transition-all duration-500`}
    >
      <div
        className={`relative ${
          isCollapsed ? "pl-5" : "pl-6"
        } transition-all duration-300 `}
      >
        <div className={`flex items-center gap-3 w-[100%] overflow-hidden`}>
          <Avatar src={Profile} isCollapsed={isCollapsed} />
          <div
            className={`text-white transition-all shrink-0 duration-100 leading-7`}
          >
            <h1
              className={`text-[1.34rem] font-semibold ${
                isCollapsed ? "text-[0rem] opacity-0" : "opacity-100"
              } duration-500 tracking-wider`}
            >
              Elyas Abebe
            </h1>
            <p
              className={`text-sm ${
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
          } bg-green-600 transition-all duration-500`}
        >
          <Chevron
            className={`text-[30px] ${
              !isCollapsed ? "-scale-95 translate-x-1" : "scale-90"
            } text-white duration-300`}
          />
          <div
            className={`absolute h-full w-2 ${
              isCollapsed ? "-z-10" : "translate-x-[18px]"
            } bg-green-600 rounded-r-full  duration-500`}
          />
        </button>
      </div>
      <div className={`px-5 mt-10`}>
        <Search isCollapsed={isCollapsed} toggleSideBar={toggleSideBar} />
        <div className="space-y-3 my-6 ">
          <List
            isCollapsed={isCollapsed}
            icon1={<DashboardIcon className="text-2xl text-white" />}
            label="Dashboard"
            path="/"
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<MessageIcon className="text-2xl text-white" />}
            icon2={
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex gap-3 flex-row-reverse"
              >
                <div className="text-white fully-center bg-red-500 w-6 h-6 scale-[0.83] rounded-full">
                  3
                </div>
                <div className="border p-[2px] scale-[0.85] rounded-md">
                  <PlusIcon className="text-lg text-white" />
                </div>
              </div>
            }
            label="Message"
            path="message"
          />
          <List
            isCollapsed={isCollapsed}
            icon1={
              <NotificationIcon className="text-2xl scale-[1.23] text-white" />
            }
            icon2={
              <div className="text-white fully-center bg-red-500 w-6 h-6 scale-[0.83] rounded-full">
                7
              </div>
            }
            label="Notification"
            path="notification"
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<GraphIcon className="text-2xl text-white" />}
            label="Statistics"
            path="statistics"
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<WalletIcon className="text-2xl text-white" />}
            icon2={<ExchangeIcon className="text-2xl text-white" />}
            label="Wallet"
            path="wallet"
          />
          <List
            isCollapsed={isCollapsed}
            icon1={<SettingIcon className="text-2xl text-white" />}
            label="Settings"
            path="settings"
          />
        </div>
        <ThemeSwitch isCollapsed={isCollapsed} toggleSideBar={toggleSideBar} />
        <div
          className={`${
            isCollapsed ? "opacity-0 text-[0rem]" : "text-xs opacity-100"
          } absolute shrink-0 left-0 right-0 bottom-7 px-6 text-white grow transition-all duration-500`}
        >
          <p className=" opacity-35 text-center">
            Design & Developed by Elyas Abebe
          </p>
          <div
            className={`fully-center ${
              isCollapsed ? "scale-0" : "scale-100"
            } text-sm mt-3 gap-4 opacity-40 duration-300`}
          >
            <Linkedin className="" />
            <Github className="" />
            <Twitter className="" />
            <WhatsApp className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
