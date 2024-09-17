import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/signup", { email, password });
      navigate("/");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <>
      <div className="popup-overlay visible">
        <div className="popup-container h-[75vh] w-[150vh]">
          <button className="close-button" onClick={handleClosePopup}>
            X
          </button>
          <div className="items-center flex justify-center px-5 lg:px-0">
            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
              Welcome Back to VPeakFit
            </h1>
          </div>
          <div className="h-[65vh] items-center flex justify-center px-5 lg:px-0">
            <div className="max-w-screen-xl bg-white sm:rounded-lg flex gap-12 justify-center flex-1">
              <div className="flex-1 bg-blue-900 text-center hidden md:flex">
                <div
                  className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(https://www.tailwindtap.com/assets/components/form/createaccount/login.svg)`,
                  }}
                ></div>
              </div>
              <div className="signup_input lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div className=" flex flex-col items-center">
                  <div className="text-center">
                    <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                      Sign in
                    </h1>
                  </div>
                  <div className="w-full flex-1 mt-8">
                    <div className="mx-auto max-w-xs flex flex-col gap-4">
                      <div className="popup_button">
                        <input
                          className="w-[25vw] px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                          // type="email"
                          // placeholder="Enter your email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          className="w-[25vw] px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                          type="password"
                          placeholder="Create your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                          onClick={handleSignup}
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
                          <span className="ml-3">Sign In</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
