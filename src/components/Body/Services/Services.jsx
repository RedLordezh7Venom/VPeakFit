import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="services p-1 m-2 " id="main_service_container">
        <br />
        <h1 className="font-bold text-3xl text-blue-500 my-2 mx-1 p-2">
          Services
        </h1>
        <br />
        <div
          className="service-box flex mt-2 mx-1 justify-center gap-4 w-full"
          id="service_container"
        >
          <Link to="/diet">
            <div className="diet gap-3 bg-blue-500 w-[100%] h-60 flex flex-col items-center justify-center rounded-xl inner_boxes">
              <span className="font-bold text-white text-2xl inner_span_1">
                Diet Planner
              </span>
              <i class="fa-solid fa-bowl-food text-white text-6xl"></i>
            </div>
          </Link>
          <Link to="/posture">
            <div className="posture bg-blue-500 w-[100%] h-60 flex flex-col gap-3 items-center justify-center rounded-xl inner_boxes">
              <span className="font-bold text-white text-2xl inner_span_2">
                Posture Corrector
              </span>
              <i class="fa-solid fa-person  text-white text-6xl"></i>
            </div>
          </Link>
          <Link to="/injury">
            <div className="injury gap-3 bg-blue-500 w-[100%] h-60 flex flex-col items-center justify-center rounded-xl inner_boxes">
              <span className="font-bold text-white text-2xl inner_span_3">
                Injury And Risk Manager
              </span>
              <i class="fa-solid fa-user-injured  text-white text-6xl"></i>
            </div>
          </Link>
          <Link to="/userexercise">
            <div className=" exercise posture bg-blue-500 w-[100%] h-60 flex flex-col gap-3 items-center justify-center rounded-xl inner_boxes">
              <span className="font-bold text-white text-2xl inner_span_4">
                Exercise Recommender
              </span>
              <i class="fa-solid fa-person-walking text-white text-6xl"></i>
            </div>
          </Link>
        </div>
      </div>
      <br />
    </>
  );
};

export default Services;
