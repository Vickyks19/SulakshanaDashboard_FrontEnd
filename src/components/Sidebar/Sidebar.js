import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { AiOutlineLogout } from "react-icons/ai";
import { MdFilterFrames } from "react-icons/md";
import { SiGlassdoor } from "react-icons/si";
import { HiOutlineReceiptTax } from "react-icons/hi";
import LogoutIcon from "@mui/icons-material/Logout";
import ReportIcon from "@mui/icons-material/Report";
import BrushIcon from "@mui/icons-material/Brush";
import PeopleIcon from "@mui/icons-material/People";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import ImageIcon from "@mui/icons-material/Image";
import { Menu, MenuItem, ProSidebarProvider, SubMenu } from "react-pro-sidebar";

function Sidebar() {
  return (
    <ProSidebarProvider>
      <nav className="pcoded-navbar">
        <div className="sidebar_toggle">
          <a href="#">
            <i className="icon-close icons" />
          </a>
        </div>
        <div className="pcoded-inner-navbar main-menu">
          <div
            className="pcoded-mtext"
            data-i18n="nav.dash.main"
            href="/dashboard"
            style={{
              cursor: "pointer",
              paddingLeft: "20px",
              paddingTop: "15px",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            <Link to="/dashboard">DASHBOARD</Link>
          </div>
          <Menu>
            <SubMenu label="Masters">
              <MenuItem
                component={<Link to="/frame" />}
                icon={<FilterFramesIcon fontSize="small" />}
              >
                FRAME
              </MenuItem>
              <MenuItem
                component={<Link to="/mount" />}
                icon={<ImageIcon fontSize="small" />}
              >
                Mount
              </MenuItem>
              <MenuItem component={<Link to="/glass" />}>Glass</MenuItem>
              <MenuItem component={<Link to="/hardboard" />}>
                Hardboard
              </MenuItem>
              <MenuItem component={<Link to="/tax" />}>Tax</MenuItem>
            </SubMenu>
          </Menu>

          <Menu>
            <MenuItem
              component={<Link to="/customer" />}
              icon={<PeopleIcon fontSize="small" />}
            >
              Customer
            </MenuItem>
            <MenuItem component={<Link to="/quotation" />}>Quotation</MenuItem>
            <MenuItem component={<Link to="/invoice" />}>Invoice</MenuItem>
            <MenuItem
              component={<Link to="/painting" />}
              icon={<BrushIcon fontSize="small" />}
            >
              Painting
            </MenuItem>
            <MenuItem
              component={<Link to="" />}
              icon={<ReportIcon fontSize="small" />}
            >
              Report
            </MenuItem>
            <MenuItem
              component={<Link to="/" />}
              icon={<LogoutIcon fontSize="small" />}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </ProSidebarProvider>
  );
}

export default Sidebar;
