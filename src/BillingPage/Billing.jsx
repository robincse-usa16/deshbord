import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import BarCharts from "../components/BarCharts";
import Layout from "../components/layout";
import useSidebarToggle from "../hooks/useSidebarToggle";
import "../BillingPage/Billing.css";

function MainBillingContent() {
  return (
    <div className="Chart">
      <h1>My Billing</h1>
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
