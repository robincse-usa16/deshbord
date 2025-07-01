import React, { useState } from "react";
import "../layout/Topbar.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Topbar({ isSidebarVisible, setIsSiderVisible }) {
  const toggleSidebar = () => {
    setIsSiderVisible(!isSidebarVisible);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    navigate("/login");
  };
  return (
    <div className={`main-content ${isSidebarVisible ? "" : "expanded"}`}>
      {/* isSidebarVisible */}
      <header className="top-bar">
        <div className="breadcrumb">
          <div className="slider-btn">
            <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
              {isSidebarVisible ? "Hide Sider" : "Show Sider"}
            </button>
          </div>
        </div>
        <div className="header-right">
          <input
            type="text"
            placeholder="Type here..."
            className="search-bar"
          />
          <div className="icons">
            <div className="setting">
              <i className="fa fa-cog"></i>
            </div>
            <div className="bell">
              <i className="fa fa-bell"></i>
            </div>
            <div className="user">
              <i className="fa fa-user"></i>
              <div className="user-menu">
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Topbar;
