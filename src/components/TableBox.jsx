import React, { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import BarCharts from "./BarCharts";
import Layout from "./layout";
import useSidebarToggle from "../hooks/useSidebarToggle";

function MainBillingContent() {
  return (
    <div className="Chart">
      <h1>My Table</h1>
    </div>
  );
}

function Billing() {
  const [isSidebarVisible, setIsSiderVisible] = useState(true);
  return (
    <>
      <Layout
        isSidebarVisible={isSidebarVisible}
        setIsSiderVisible={setIsSiderVisible}
      >
        <MainBillingContent />
      </Layout>
    </>
  );
}

export default Billing;
