import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav/MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper bg-blue-800">
        <div className="nav-content py-1 justify-between">
          <div className="logo-section flex gap-3">
            <i class="fa-solid fa-dumbbell text-2xl text-white"></i>
            <div className="name text-white font-bold text-2xl">VPeakFit</div>
          </div>
          <ul>
            <Link to="/">
              <li>
                <a className="menu-item text-md flex gap-2" href="">
                  <i class="fa-solid fa-house"></i>
                  Home
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li className="flex gap-2">
                <a className="menu-item text-md" href="">
                  <i class="fa-solid fa-user"></i>
                </a>
                <a className="menu-item text-md" href="">
                  Login
                </a>
              </li>
            </Link>
            <button
              className="gap-2 contact-btn text-md px-3 rounded-lg bg-white text-blue-500 contact_btn"
              onClick={() => {}}
            >
              Contact Us
              <i class="fa-solid fa-phone"></i>
            </button>
          </ul>

          <button className="menu-btn " onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "2rem" }}
            >
              {openMenu ? "X" : "≡"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
