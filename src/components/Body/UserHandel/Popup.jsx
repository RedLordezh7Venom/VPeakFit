import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Popup.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <>
      {showPopup && !localStorage.getItem("authToken") && (
        <div className="popup-overlay visible">
          <div className="popup-container">
            <button className="close-button" onClick={handleClosePopup}>
              X
            </button>
            <div className="popup_button">
              <button
                className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={() => {
                  handleClosePopup();
                  navigate("/login");
                }}
              >
                <i class="fa-solid fa-user"></i>
                <span className="ml-3">Login</span>
              </button>
              <button
                className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={() => {
                  handleClosePopup();
                  navigate("/signup");
                }}
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Signup</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
