import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./sust.jpg";
const Header = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_logo">
          <img src={logo} alt="logo" />
          <Link to="/" className="nav_text">
            SUST-PORTAL
          </Link>
        </div>
        <div className="navbar_link">
        <Link to="/" className="nav_text">
          Home
          </Link>
        <Link to="/homepage" className="nav_text">
           Daily Updates
          </Link>
          <Link to="/blogs" className="nav_text">
            Blogs of SUST
          </Link>
          <Link to="/homepage" className="nav_text">
            Resourses
          </Link>
          <Link to="/about" className="nav_text">
            About
          </Link>
          <Link to="/logout" className="nav_text">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
