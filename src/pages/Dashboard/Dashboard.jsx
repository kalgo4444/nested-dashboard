import React from "react";
import Logo from "../../components/Logo/Logo";
import SidebarLinks from "../../components/sidebar-links/Sidebar-links";
import { LINKS, LINKS_USER } from "../../static";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ContentTitle from "../../components/ContentTitle.jsx/ContentTitle";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <aside className="max-w-xs w-full h-screen sticky top-0 left-0 flex flex-col bg-white border-r border-neutral-300 px-3 py-2">
        <div className="block mx-auto py-3">
          <Logo link={"/dashboard"} />
        </div>
        <div className="py-5">
          <SidebarLinks links={LINKS} />
        </div>
        <div className="flex-1 flex flex-col justify-end my-4">
          <SidebarLinks links={LINKS_USER} />
        </div>
      </aside>
      {/* content */}
      <div className="flex-1 relative overflow-y-scroll">
        <Navbar />
        {/* dashboard body */}
        <div className="bg-neutral-100 w-full h-full p-5">
          <ContentTitle />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
