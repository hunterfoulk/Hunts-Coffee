import React from "react";
// import { useStateValue } from '.././state'
import "./components.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-buttons">
        <a href="/">
          <div className="nav-link">Home</div>
        </a>
        <a href="#menu-section">
          <div className="nav-link">Menu</div>
        </a>
        <Link to="/order">
          <div className="nav-link">Place order</div>
        </Link>
        <a href="#intouch-section">
          <div className="nav-link">Contact</div>
        </a>
      </div>
    </div>
  );
}
