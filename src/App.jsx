import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Navbar/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserInjuryInput from "./components/Body/UserInjuryInput/UserInjuryInput";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Body/UserHandel/Signup";
import Login from "./components/Body/UserHandel/Login";
import UserExercise from "./components/Body/UserExercise/UserExercise";
import Diet from "./components/Body/Diet/Diet";
import Posture from "./components/Body/Posture/Posture";
import Chatbot from "./components/Body/Chatbot/Chatbot";
import { DietService } from "./pages/services/DietService";
import { PostureService } from "./pages/services/PostureService";
import { InjuryService } from "./pages/services/InjuryService";
import { ExerciseService } from "./pages/services/ExerciseService";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="space-y-10 md:space-y-16 py-6 md:py-10">
              <HomePage />
              <Chatbot />
            </div>
          </main>
        } />
        
        {/* Dashboard Route - Protected */}
        <Route 
          path="/dashboard" 
          element={
            localStorage.getItem('authToken') ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Service Routes */}
        <Route path="/diet" element={<DietService />} />
        <Route path="/posture" element={<PostureService />} />
        <Route path="/injury" element={<InjuryService />} />
        <Route path="/userexercise" element={<ExerciseService />} />
        
        {/* Legacy Routes (keep for backward compatibility) */}
        <Route path="/diet-old" element={<Diet />} />
        <Route path="/posture-old" element={<Posture />} />
        <Route path="/injury-old" element={<UserInjuryInput />} />
        <Route path="/userexercise-old" element={<UserExercise />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
