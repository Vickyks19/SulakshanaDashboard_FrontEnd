import React from "react";
// import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
