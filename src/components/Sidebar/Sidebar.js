import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { AiOutlineLogout } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="" style={{ textDecoration: "none" }}>
          <span className="logo">Admin-Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MASTERS</p>
          <li>
            {/* <DashboardIcon className="icon" /> */}
            <span>FRAME</span>
          </li>
          <li>
            <span>MOUNT</span>
          </li>
          <li>
            <span>GLASS</span>
          </li>
          <li>
            <span>HARDBOARD</span>
          </li>
          <li>
            <span>TAX</span>
          </li>
          <p className="title">CUSTOMER</p>
          <Link to="" style={{ textDecoration: "none" }}>
            <li>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span>CREATION</span>
            </li>
            <li>
              <span>LIST</span>
            </li>
          </Link>
          <p className="title">QUATION</p>
          <li>
            {/* <InsertChartIcon className="icon" /> */}
            <span>CREATION</span>
          </li>
          <li>
            {/* <NotificationsNoneIcon className="icon" /> */}
            <span>INFO</span>
          </li>
          <p className="title">INVOIVE</p>

          <p className="title">PAINTING</p>
          <p className="title">REPORT</p>
          <Link to="/">
            {/* <p className="title"> */}
            <AiOutlineLogout className="icon" />
            <span className="title">LOGOUT</span>
            {/* </p> */}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
