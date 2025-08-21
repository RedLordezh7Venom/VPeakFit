import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav/MobileNav";
import Logo from "../UI/Logo";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, [location.pathname]); // Re-run when route changes

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
<li>
        <Link 
          to="/" 
          className={`block py-2 px-3 rounded md:p-0 transition-colors duration-200 ${
            isActive('/') 
              ? 'text-indigo-600 font-semibold' 
              : 'text-gray-700 hover:text-indigo-600'}`}
          aria-current="page"
        >
          Home
        </Link>
      </li>
      {isLoggedIn && (
        <li>
          <Link 
            to="/dashboard" 
            className={`block py-2 px-3 rounded md:p-0 transition-colors duration-200 ${
              isActive('/dashboard') 
                ? 'text-indigo-600 font-semibold' 
                : 'text-gray-700 hover:text-indigo-600'}`}
          >
            Dashboard
          </Link>
        </li>
      )}
      {localStorage.getItem("authToken") ? (
        <li>
          <button 
            onClick={handleLogout} 
            className="block w-full text-left py-2 px-3 text-gray-700 hover:text-indigo-600 rounded md:bg-transparent md:p-0 transition-colors duration-200"
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <Link 
            to="/login" 
            className={`block py-2 px-3 rounded md:p-0 transition-colors duration-200 ${
              isActive('/login') 
                ? 'text-indigo-600 font-semibold' 
                : 'text-gray-700 hover:text-indigo-600'}`}
          >
            Login
          </Link>
        </li>
      )}
    </ul>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 shadow-md backdrop-blur-sm' 
        : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo size="md" />
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navLinks}
            <button 
              onClick={handleContactClick} 
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </button>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            {navLinks}
            <button 
              onClick={handleContactClick}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
