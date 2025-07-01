import React, { useEffect, useState } from "react";

import Topbar from "../components/layout/Topbar";
import Maincontent from "../components/layout/maincontent";
import Sidebar from "../components/layout/Sidebar";
import Layout from "../components/layout";
import FeedManager from "../components/FeedManager";

function Dashboard() {
  const [isSidebarVisible, setIsSiderVisible] = useState(true);

  return (
    <>
      <Layout
        isSidebarVisible={isSidebarVisible}
        setIsSiderVisible={setIsSiderVisible}
      >
        <Maincontent isSidebarVisible={isSidebarVisible} />
        <h1>Feed Manager</h1>
      </Layout>
    </>

    // <div className="dashboard-container">
    //   {isSidebarVisible && <Sidebar />}
    //   <div className={`main-content ${isSidebarVisible ? "" : "expanded"}`}>
    //     <Topbar />
    //     <header className="top-bar">
    //       <div className="breadcrumb">
    //         <div className="slider-btn">
    //           <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
    //             {isSidebarVisible ? "Hide Sider" : "Show Sider"}
    //           </button>
    //         </div>
    //       </div>
    //       <div className="header-right">
    //         <input
    //           type="text"
    //           placeholder="Type here..."
    //           className="search-bar"
    //         />
    //         <div className="icons">
    //           <div className="setting">
    //             <i className="fa fa-cog"></i>
    //           </div>
    //           <div className="bell">
    //             <i className="fa fa-bell"></i>
    //           </div>
    //           <div className="user">
    //             <i className="fa fa-user"></i>
    //             <div className="user-menu">
    //               <button onClick={handleLogout} className="logout-button">
    //                 Logout
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </header>
    //     {/* <div className="top-text">
    //       <h2>Dashboard</h2>
    //       <p>Check the sales, value and bounce rate by country</p>
    //     </div> */}
    //     <Maincontent />

    //     {/* <div className="cards-section">
    //       <div className="card">
    //         <div className="card-header">
    //           <p>Total Album</p>
    //           <i id="card-icon" className="fa-solid fa-compact-disc"></i>
    //         </div>
    //         <div className="card-body">
    //           <h3>{data.totalAlbum}</h3>
    //           <p className="status">+55% than last week</p>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <div className="card-header">
    //           <p>Total Artist</p>
    //           <i id="card-icon" className="fa-regular fa-file-audio"></i>
    //         </div>
    //         <div className="card-body">
    //           <h3>{data.totalArtist}</h3>
    //           <p className="status">+3% than last month</p>
    //         </div>
    //       </div>

    //       <div className="card">
    //         <div className="card-header">
    //           <p>Total Audio</p>
    //           <i id="card-icon" className="fa-solid fa-music"></i>
    //         </div>
    //         <div className="card-body">
    //           <h3>{data.totalAudio}</h3>
    //           <p className="status">+2% than yesterday</p>
    //         </div>
    //       </div>

    //       <div className="card">
    //         <div className="card-header">
    //           <p>Total Content</p>
    //           <i id="card-icon" className="fa-solid fa-photo-film"></i>
    //         </div>
    //         <div className="card-body">
    //           <h3>{data.totalContent}</h3>
    //           <p className="status">+5% than yesterday</p>
    //         </div>
    //       </div>

    //       <div className="card">
    //         <div className="card-header">
    //           <p>Total Video</p>
    //           <i id="card-icon" className="fa-solid fa-video"></i>
    //         </div>
    //         <div className="card-body">
    //           <h3>{data.totalVideo}</h3>
    //           <p className="status">+2% than yesterday</p>
    //         </div>
    //       </div>

    //       <div className="card">
    //         <div className="card-header">
    //           <p>Total Series</p>
    //           <i id="card-icon" className="fa-solid fa-film"></i>
    //         </div>
    //         <div className="card-body">
    //           <h3>{data.totalSeries}</h3>
    //           <p className="status">+2% than yesterday</p>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <div className="card-header">
    //           <p>Total User Count</p>
    //           <i id="card-icon" className="fa-solid fa-users"></i>
    //         </div>
    //         <div className="card-body">
    //           <h3>{data.totalUserCount}</h3>
    //           <p className="status">+2% than yesterday</p>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <div className="card-header">
    //           <p>Total View Count</p>
    //           <i id="card-icon" className="fa-solid fa-eye"></i>
    //         </div>
    //         <div className="card-body">
    //           <h3>{data.totalViewCount}</h3>
    //           <p className="status">+2% than yesterday</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="charts-section">
    //       <div className="chart-placeholder">
    //         <div className="barchart1">
    //           <h4>Website Views</h4>
    //           <p>Last Campaign Performance</p>
    //           <div className="bar">{<BarCharts />}</div>
    //           <p>
    //             <i className="fa-regular fa-clock"></i> Campaign sent 2 days ago
    //           </p>
    //         </div>
    //       </div>
    //       <div className="chart-placeholder">
    //         <div className="barchat1">
    //           <h4>Monthly Sales</h4>
    //           <p>(+15%) increase in Monthly sales</p>
    //           <div className="bar1">{<Barcharts1 />}</div>
    //           <p>
    //             <i className="fa-regular fa-clock"></i> Update 4 min ago
    //           </p>
    //         </div>
    //       </div>
    //       <div className="chart-placeholder">
    //         <div className="barchart2">
    //           <h4>Dayli Sales</h4>
    //           <p>Last Sales Performance</p>
    //           <div className="bar2">{<Barcharts2 />}</div>
    //           <p>
    //             <i className="fa-regular fa-clock"></i> Just Update
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="projects-orders">
    //       <div className="projects-section">
    //         <h4>Projects</h4>
    //         <p>
    //           <i className="fa-solid fa-check"></i> 30 done this month
    //         </p>
    //       </div>

    //       <div className="orders-section">
    //         <h3>Orders Overview</h3>
    //         <p>
    //           <i className="fa-solid fa-up-long"></i> 24% this month
    //         </p>
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
  );
}

export default Dashboard;
