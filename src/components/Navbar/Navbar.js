import React from 'react';
import { Link } from 'react-router-dom';
import { MdFilterFrames } from 'react-icons/md';
import { SiGlassdoor } from 'react-icons/si';
import { HiOutlineReceiptTax } from 'react-icons/hi';

function Navbar() {
  return (
    // <div className="navbar">
    //   <div className="wrapper">
    //     <div className="search">
    //       <input type="text" placeholder="Search..." />
    //       <AiOutlineSearch />
    //     </div>
    //   </div>
    // </div>

    <>
      <nav className='navbar header-navbar pcoded-header'>
        <div className='navbar-wrapper'>
          <div className='navbar-logo'>
            <a className='mobile-menu' id='mobile-collapse' href='#!'>
              <i className='ti-menu' />
            </a>
            <a className='mobile-search morphsearch-search' href='#'>
              <i className='ti-search' />
            </a>
            <a href='index.html'>
              <span className='img-fluid'> Sri sulekshna</span>
              {/* <img class="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" /> */}
            </a>
            <a className='mobile-options'>
              <i className='ti-more' />
            </a>
          </div>
          <div className='navbar-container container-fluid'>
            <ul className='nav-left'>
              <li>
                <div className='sidebar_toggle'>
                  <a href='javascript:void(0)'>
                    <i className='ti-menu' />
                  </a>
                </div>
              </li>
              <li>
                <a href='#!' onclick='javascript:toggleFullScreen()'>
                  <i className='ti-fullscreen' />
                </a>
              </li>
            </ul>
            <ul className='nav-right'>
              <li className='user-profile header-notification'>
                <a href='#!'>
                  {/* <img
                      src="assets/images/avatar-4.jpg"
                      className="img-radius"
                      alt="User-Profile-Image"
                    /> */}
                  <span>sri sulekshna</span>
                  <i className='ti-angle-down' />
                </a>
                <ul className='show-notification profile-notification'>
                  <li>
                    <a href='/'>
                      <i className='ti-layout-sidebar-left' /> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
