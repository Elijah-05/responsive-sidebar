import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/side_bar/SideBar";

const MasterLayout = () => {
  const localState =
    localStorage.getItem("isCollapsed") ||
    localStorage.setItem("isCollapsed", "true");
  const [isCollapsed, setIsCollapsed] = useState<boolean>(
    localState === "true" ? true : false
  );

  const handleSideBarToggle = (state: boolean) => {
    setIsCollapsed(state);
    localStorage.setItem("isCollapsed", JSON.stringify(state));
  };

  return (
    <div>
      <aside className="">
        <SideBar
          isCollapsed={isCollapsed}
          toggleSideBar={handleSideBarToggle}
        />
      </aside>
      <main
        className={`${
          isCollapsed ? "md:ml-32" : "md:ml-[330px]"
        } min-h-screen duration-500 px-8 py-6 shrink-0 `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MasterLayout;
