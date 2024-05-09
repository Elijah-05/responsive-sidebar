import { useState } from "react";
import SideBar from "../components/side_bar/SideBar";

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
      <main className=""></main>
    </div>
  );
};

export default MasterLayout;
