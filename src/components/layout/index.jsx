import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import useSidebarToggle from "../../hooks/useSidebarToggle";

function Layout({ children, isSidebarVisible, setIsSiderVisible }) {
  console.log("isSidebar state via props in layout", isSidebarVisible);
  console.log("setSidebar function via props in layout", setIsSiderVisible);

  return (
    <>
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <Topbar
        isSidebarVisible={isSidebarVisible}
        setIsSiderVisible={setIsSiderVisible}
      />
      {children}
    </>
  );
}

export default Layout;
