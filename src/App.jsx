import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home";
import UserInjuryInput from "./components/Body/UserInjuryInput/UserInjuryInput";
import Footer from "./components/Footer/Footer";
import Services from "./components/Body/Services/Services";
import Login from "./components/Navbar/signin";
import UserExercise from "./components/Body/UserExercise/UserExercise";
import Diet from "./components/Body/Diet/Diet";
import Posture from "./components/Body/Posture/Posture";
import Chatbot from "./components/Body/Chatbot/Chatbot";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Chatbot />
        <Services />
        <Routes>
          <Route path="/diet" element={<Diet />} />
          <Route path="/posture" element={<Posture />} />
          <Route path="/injury" element={<UserInjuryInput />} />
          <Route path="/userexercise" element={<UserExercise />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
