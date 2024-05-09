import { useState } from "react";
import SideBar from "../components/side_bar/SideBar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleSideBarToggle = (state: boolean) => {
    setIsCollapsed(state);
  };

  return (
    <div>
      <aside className="">
        <SideBar
          isCollapsed={isCollapsed}
          toggleSideBar={handleSideBarToggle}
        />
      </aside>
      <main className="ml-96 stroke h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MasterLayout;
