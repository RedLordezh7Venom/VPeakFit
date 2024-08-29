import React, { useState } from "react";
import "./UserExercise.css";
import ReactMarkdown from 'react-markdown';

const UserExercise = () => {
  const [user, setUser] = useState({
    age: "",
    weight: "",
    goal: "",
    profession: "",
  });

  const [exercise, setExercise] = useState("");

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleExercise = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/exercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(user).toString(),
      });

      const result = await response.json();
      setExercise(result.tips || "Error fetching recommendations");
    } catch (error) {
      console.error("Error:", error);
      setExercise("Error fetching recommendations");
    }
  };

  return (
    <>
      <section className="main-container">
        <h1 className="calculate-title">Exercise Recommender</h1>
        <div className="calculate-content">
          <form
            method="post"
            onSubmit={handleExercise}
            className="calculate-diet"
            id="calculate-diet"
          >
            <div className="calculate-group">
              <label>
                Age <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="age"
                value={user.age}
                onChange={handleInputs}
                className="input-box"
                type="number"
                min="1"
                max="120"
                id="age"
                placeholder="Age in years"
                required
              />
            </div>

            <div className="calculate-group">
              <label>
                Weight <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="weight"
                value={user.weight}
                onChange={handleInputs}
                className="input-box"
                type="number"
                min="1"
                max="200"
                id="weight"
                placeholder="Weight in KG"
                required
              />
            </div>

            <div className="calculate-group">
              <label>
                Goal <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="goal"
                value={user.goal}
                onChange={handleInputs}
                className="input-box"
                type="text"
                placeholder="Goal"
                required
              />
            </div>

            <div className="calculate-group">
              <label>
                Profession <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="profession"
                value={user.profession}
                onChange={handleInputs}
                className="input-box"
                id="profession"
                placeholder="Profession"
                required
              />
            </div>

            <button type="submit" className="button">
              Predict
            </button>
          </form>
          {exercise && <p className="result"><ReactMarkdown>{exercise}</ReactMarkdown></p>}
        </div>
      </section>
    </>
  );
};

export default UserExercise;