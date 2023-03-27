import React from "react";
import { Link } from "react-router-dom";
import "./Sidee.css";

function Sidee() {
  return (
    <div>
      <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box" />
        <div className="pcoded-container navbar-wrapper">
          <nav className="navbar header-navbar pcoded-header">
            <div className="navbar-wrapper">
              <div className="navbar-logo">
                <a className="mobile-menu" id="mobile-collapse" href="#!">
                  <i className="ti-menu" />
                </a>
                <a className="mobile-search morphsearch-search" href="#">
                  <i className="ti-search" />
                </a>
                <a href="index.html">
                  <span className="img-fluid"> Sri sulekshna</span>
                  {/* <img
                    class="img-fluid"
                    src="assets/images/sulakshana.jpg"
                    // alt="Theme-Logo"
                  /> */}
                </a>
                <a className="mobile-options">
                  <i className="ti-more" />
                </a>
              </div>
              <div className="navbar-container container-fluid">
                <ul className="nav-left">
                  <li>
                    <div className="sidebar_toggle">
                      <a href="javascript:void(0)">
                        <i className="ti-menu" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#!" onclick="javascript:toggleFullScreen()">
                      <i className="ti-fullscreen" />
                    </a>
                  </li>
                </ul>
                <ul className="nav-right">
                  <li className="user-profile header-notification">
                    <a href="#!">
                      {/* <img
                        src="assets/images/sulakshana.jpg"
                        className="img-radius"
                        // alt="User-Profile-Image"
                      /> */}
                      <span>sri sulekshna</span>
                      <i className="ti-angle-down" />
                    </a>
                    <ul className="show-notification profile-notification">
                      {/* <li>
                                <a href="#!">
                                    <i class="ti-settings"></i> Settings
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ti-user"></i> Profile
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ti-email"></i> My Messages
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ti-lock"></i> Lock Screen
                                </a>
                            </li> */}
                      <li>
                        <a href="/">
                          <i className="ti-layout-sidebar-left" /> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <nav className="pcoded-navbar">
                <div className="sidebar_toggle">
                  {/* <a href="#"><i class="icon-close icons"></i></a> */}
                </div>
                <div className="pcoded-inner-navbar main-menu">
                  <div className>
                    <div className="main-menu-header">
                      {/* <img
              class="img-40 img-radius"
              src="assets/images/avatar-4.jpg"
              alt="User-Profile-Image"
            />
            
            <div class="user-details">
              <span>John Doe</span>
              <span id="more-details"
                >UX Designer<i class="ti-angle-down"></i
              ></span>
            </div> */}
                    </div>
                    {/* <div class="main-menu-content">
            <ul>
              <li class="more-details">
                <a href="#"><i class="ti-user"></i>View Profile</a>
                <a href="#!"><i class="ti-settings"></i>Settings</a>
                <a href="auth-normal-sign-in.html"
                  ><i class="ti-layout-sidebar-left"></i>Logout</a
                >
              </li>
            </ul>
          </div> */}
                  </div>

                  <div
                    className="pcoded-mtext"
                    data-i18n="nav.dash.main"
                    href="/dashboard"
                    style={{ cursor: "pointer", paddingLeft: "30px" }}
                  >
                    <Link to="/dashboard">Dashboard</Link>
                  </div>
                  <div
                    className="pcoded-navigatio-lavel"
                    data-i18n="nav.category.navigation"
                  >
                    MASTERS
                  </div>
                  <ul className="pcoded-item pcoded-left-item">
                    {/* <Link to="/frame"> */}
                    <li className="active">
                      <a href="/Frame">
                        <span className="pcoded-micon">
                          <i className="ti-home" />
                          <b>D</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          Frame
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    {/* </Link> */}
                    <li className="active">
                      <a href="/Mount">
                        <span className="pcoded-micon">
                          {/* <i class="ti-layout-grid2-alt"></i> */}
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          MOUNT
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="/Glass">
                        <span className="pcoded-micon">
                          <i className="ti-home" />
                          <b>D</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          GLASS
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="/Hardboard">
                        <span className="pcoded-micon">
                          <i className="ti-home" />
                          <b>D</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          HARDBOARD
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="/Tax">
                        <span className="pcoded-micon">
                          <i className="ti-home" />
                          <b>D</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          TAX
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                  </ul>
                  <div
                    className="pcoded-navigatio-lavel"
                    data-i18n="nav.category.forms"
                  >
                    CUSTOMER
                  </div>
                  <ul className="pcoded-item pcoded-left-item">
                    <li>
                      <a href="/creation">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          CREATION
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/List">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          LIST
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                  </ul>
                  <div
                    className="pcoded-navigatio-lavel"
                    data-i18n="nav.category.forms"
                  >
                    QUOTATION
                  </div>
                  <ul className="pcoded-item pcoded-left-item">
                    <li>
                      <a href="/Creation-1">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          CREATION
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/Info">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          INFO
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>

                    <li>
                      <a href="Invoice">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          INVOICE
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/Painting">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          PAINTING
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/Report">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          REPORT
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          LOGOUT
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidee;
