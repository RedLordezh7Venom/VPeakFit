import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <ul>
            <div className="logo-section flex gap-3">
              <i class="fa-solid fa-dumbbell text-2xl text-white"></i>
              <div className="name text-white font-bold text-2xl">VPeakFit</div>
            </div>
            <li>
              <a className="menu-item" href="">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                <Link to="/login">Login</Link>
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Contact Us
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
