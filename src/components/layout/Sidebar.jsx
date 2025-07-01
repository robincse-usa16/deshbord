import React, { useState } from "react";
import "../layout/Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar({ isSidebarVisible }) {
  return (
    <div className={`sidebar-content ${isSidebarVisible ? "" : "expanded"}`}>
      {isSidebarVisible && (
        <div className="sidebar ">
          <h2 className="icon-side">
            <i class="fa-solid fa-crown"></i>Creative Tim
          </h2>
          <ul>
            <li className="side-icon">
              <i className="fa-solid fa-box-open"></i>
              <Link to={"/"}>Dashboard</Link>
            </li>
            <li className="side-icon">
              <i className="fa-solid fa-table-cells"></i>
              <Link to={""}>Analytics</Link>
            </li>
            <li className="side-icon">
              <i className="fa-solid fa-money-bill-trend-up"></i>
              <Link to={"/billing"}>Content Duration</Link>
            </li>
            <li className="side-icon">
              <i class="fa-regular fa-square-caret-left"></i>
              <Link to={""}>Feed Manager</Link>
            </li>
            <li className="side-icon">
              <i className="fa-brands fa-centercode"></i>
              <Link to={""}>Content Manager</Link>
            </li>
            <li className="side-icon">
              <i class="fa-brands fa-battle-net"></i>
              <Link to={""}>Encoder Manager</Link>
            </li>
            <li className="side-icon">
              <i className="fa-brands fa-reddit-alien"></i>
              <Link to={""}>Channel Manager</Link>
            </li>
            <li className="side-icon">
              <i class="fa-brands fa-hive"></i>
              <Link to={""}>Category Manager</Link>
            </li>
            <li className="side-icon">
              <i className="fa-regular fa-bell"></i>
              <Link to={""}>Notification Manager</Link>
            </li>
            <li className="side-icon">
              <i class="fa-brands fa-firstdraft"></i>
              <Link to={""}>Banner Manager</Link>
            </li>
            <li className="side-icon">
              <i class="fa-solid fa-people-arrows"></i>
              <Link to={""}>Artist Manager</Link>
            </li>
            <li className="side-icon">
              <i className="fa-solid fa-vr-cardboard"></i>
              <Link to={""}>Shorts Manager</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
