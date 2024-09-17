import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import HomePage from "./components/Navbar/HomePage";
import UserInjuryInput from "./components/Body/UserInjuryInput/UserInjuryInput";
import Footer from "./components/Footer/Footer";
import Services from "./components/Body/Services/Services";
import Signup from "./components/Body/UserHandel/Signup";
import Login from "./components/Body/UserHandel/Login";
import Popup from "./components/Body/UserHandel/Popup";
// import ForgotPassword from "./components/Navbar/ForgotPassword";
import UserExercise from "./components/Body/UserExercise/UserExercise";
import Diet from "./components/Body/Diet/Diet";
import Posture from "./components/Body/Posture/Posture";
import Chatbot from "./components/Body/Chatbot/Chatbot";

function App() {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
        </Routes>
      </div>
      <Popup />

      <Chatbot />
      <Services />
      <Routes>
        <Route path="/diet" element={<Diet />} />
        <Route path="/posture" element={<Posture />} />
        <Route path="/injury" element={<UserInjuryInput />} />
        <Route path="/userexercise" element={<UserExercise />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
