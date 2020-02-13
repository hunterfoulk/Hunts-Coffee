import React from "react";
// import { useStateValue } from '.././state'
import "./components.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-buttons">
        <a href="#intro-section">
          <div className="nav-link">Home</div>
        </a>
        <a href="#tech-section">
          <div className="nav-link">Menu</div>
        </a>
        <a href="#projects-section">
          <div className="nav-link">Place order</div>
        </a>
        <a href="#intouch-section">
          <div className="nav-link">Contact</div>
        </a>
      </div>
    </div>
  );
}
