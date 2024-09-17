import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav/MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login"); // Redirect the user to the login page after logout
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper bg-blue-800">
        <div className="nav-content py-1 ">
          <div className="logo-section flex gap-3">
            <i class="fa-solid fa-dumbbell  text-white"></i>
            <div className="name text-white font-bold ">VPeakFit</div>
          </div>
          <div className="nav-container">
            <ul>
              <Link to="/">
                <li>
                  <a className="menu-item text-md flex gap-2" href="">
                    <i class="fa-solid fa-house"></i>
                    Home
                  </a>
                </li>
              </Link>
            </ul>
            <Link to="/login">
              <li className="flex gap-2 login_content">
                <a className="menu-item text-md" href="">
                  <i class="fa-solid fa-user"></i>
                </a>
                <a className="menu-item text-md" href="">
                  {localStorage.getItem("authToken") ? (
                    <button onClick={handleLogout}>Logout</button>
                  ) : (
                    <button
                      className="menu-item"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </button>
                  )}
                </a>
              </li>
            </Link>

            <button
              className="gap-2 contact-btn text-md px-3 rounded-lg bg-white text-blue-500 contact_btn menu-item"
              onClick={() => {}}
            >
              Contact Us
              <i class="fa-solid fa-phone"></i>
            </button>
          </div>
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
