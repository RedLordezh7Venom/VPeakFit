import React, { useState } from "react";
import "./Posture.css";

const Posture = () => {
  const [user, setUser] = useState({
    age: " ",
    weight: "",
    goal: "",
    profession: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <section className="main-container">
        <h1 className="calculate-title">Posture Corrector</h1>
        <div className="calculate-content">
          <form
            action="{{ url_for('recommendations')}}"
            method="post"
            onSubmit={handleInputs}
            className="calculate-diet"
            id="calculate-diet"
          >
            <div className="calculate-group">
              <label>
                Age <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="age"
                value={user.name}
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
                value={user.name}
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
                value={user.name}
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
                className="input-box"
                name="profession"
                value={user.name}
                onChange={handleInputs}
                id="profession"
                placeholder="Profession"
                required
              ></input>
            </div>

            <button type="submit" className="button">
              Predict
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Posture;
