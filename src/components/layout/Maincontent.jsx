import React, { useEffect, useState } from "react";
import "../layout/Maincontent.css";
import BarCharts from "../BarCharts";
import Barcharts1 from "../Barcharts1";
import Barcharts2 from "../Barcharts2";
import axios from "axios";
import useSidebarToggle from "../../hooks/useSidebarToggle";

function Maincontent({ isSidebarVisible }) {
  const token = localStorage.getItem("token");
  const tokenExpiry = localStorage.getItem("tokenExpiry");
  // console.log(token);
  const apiUrl = "https://dev-api.rockstreamer.com/api/getCount?platform_id=19";
  const [data, setdata] = useState({
    totalAlbum: "",
    totalArtist: "",
    totalAudio: "",
    totalContent: "",
    totalSeries: "",
    totalUserCount: "",
    totalVideo: "",
    totalViewCount: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(apiUrl, {
            totalAlbum: data.totalAlbum,
            totalArtist: data.totalArtist,
            totalAudio: data.totalAudio,
            totalContent: data.totalContent,
            totalSeries: data.totalSeries,
            totalUserCount: data.totalUserCount,
            totalVideo: data.totalVideo,
            totalViewCount: data.totalViewCount,
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response);
            setdata(response.data);
          });
        setData(response.data);
        console.log(useEffect);
      } catch (error) {
        console.error();
      }
    };

    fetchData();
  }, [token, tokenExpiry]);
  return (
    <div className={`main-content ${isSidebarVisible ? "" : "expanded"}`}>
      {/* {isSidebarVisible && <Sidebar />} */}
      <div className="top-text">
        <h2 className="top-content">Dashboard</h2>
        <p className="text-dashboard">
          Check the sales, value and bounce rate by country
        </p>
      </div>

      <div className="cards-section">
        <div className="card">
          <div className="card-header">
            <p>Total Album</p>
            <i id="card-icon" className="fa-solid fa-compact-disc"></i>
          </div>
          <div className="card-body">
            <h3>{data.totalAlbum}</h3>
            <p className="status">+55% than last week</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <p>Total Artist</p>
            <i id="card-icon" className="fa-regular fa-file-audio"></i>
          </div>
          <div className="card-body">
            <h3>{data.totalArtist}</h3>
            <p className="status">+3% than last month</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <p>Total Audio</p>
            <i id="card-icon" className="fa-solid fa-music"></i>
          </div>
          <div className="card-body">
            <h3>{data.totalAudio}</h3>
            <p className="status">+2% than yesterday</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <p>Total Content</p>
            <i id="card-icon" className="fa-solid fa-photo-film"></i>
          </div>
          <div className="card-body">
            <h3>{data.totalContent}</h3>
            <p className="status">+5% than yesterday</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <p>Total Video</p>
            <i id="card-icon" className="fa-solid fa-video"></i>
          </div>
          <div className="card-body">
            <h3>{data.totalVideo}</h3>
            <p className="status">+2% than yesterday</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <p>Total Series</p>
            <i id="card-icon" className="fa-solid fa-film"></i>
          </div>
          <div className="card-body">
            <h3>{data.totalSeries}</h3>
            <p className="status">+2% than yesterday</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <p>Total User Count</p>
            <i id="card-icon" className="fa-solid fa-users"></i>
          </div>
          <div className="card-body">
            <h3>{data.totalUserCount}</h3>
            <p className="status">+2% than yesterday</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <p>Total View Count</p>
            <i id="card-icon" className="fa-solid fa-eye"></i>
          </div>
          <div className="card-body">
            <h3>{data.totalViewCount}</h3>
            <p className="status">+2% than yesterday</p>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-placeholder">
          <div className="barchart1">
            <h4>Website Views</h4>
            <p>Last Campaign Performance</p>
            <div className="bar">{<BarCharts />}</div>
            <p>
              <i className="fa-regular fa-clock"></i> Campaign sent 2 days ago
            </p>
          </div>
        </div>
        <div className="chart-placeholder">
          <div className="barchat1">
            <h4>Monthly Sales</h4>
            <p>(+15%) increase in Monthly sales</p>
            <div className="bar1">{<Barcharts1 />}</div>
            <p>
              <i className="fa-regular fa-clock"></i> Update 4 min ago
            </p>
          </div>
        </div>
        <div className="chart-placeholder">
          <div className="barchart2">
            <h4>Dayli Sales</h4>
            <p>Last Sales Performance</p>
            <div className="bar2">{<Barcharts2 />}</div>
            <p>
              <i className="fa-regular fa-clock"></i> Just Update
            </p>
          </div>
        </div>
      </div>

      <div className="projects-orders">
        <div className="projects-section">
          <h4>Projects</h4>
          <p>
            <i className="fa-solid fa-check"></i> 30 done this month
          </p>
        </div>

        <div className="orders-section">
          <h3>Orders Overview</h3>
          <p>
            <i className="fa-solid fa-up-long"></i> 24% this month
          </p>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
