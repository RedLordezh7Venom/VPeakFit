import React, { useState } from "react";
import "./Diet.css";
import ReactMarkdown from "react-markdown";

const Diet = () => {
  const [user, setUser] = useState({
    age: "",
    weight: "",
    goal: "",
    profession: "",
    Weight: "",
    Height: "",
  });

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [bmi, setBMI] = useState("");
  const [dietTips, setDietTips] = useState("");
  const [loadingDiet, setLoadingDiet] = useState(false); // Loading state for diet prediction
  const [loadingBMI, setLoadingBMI] = useState(false); // Loading state for BMI calculation

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) return;

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("age", user.age);
    formData.append("weight", user.weight);
    formData.append("goal", user.goal);
    formData.append("profession", user.profession);

    try {
      setLoadingDiet(true); // Show loading spinner for diet prediction
      const response = await fetch("http://127.0.0.1:5000/diet", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setDietTips(result.recommendations || "Error fetching diet tips");
    } catch (error) {
      console.error("Error uploading file:", error);
      setDietTips("Error fetching diet tips");
    } finally {
      setLoadingDiet(false); // Hide spinner
    }
  };

  const handleBMI = async (e) => {
    e.preventDefault();
    try {
      setLoadingBMI(true); // Show loading spinner for BMI calculation
      const response = await fetch("http://127.0.0.1:5000/bmi_check", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(user).toString(),
      });

      const result = await response.json();
      setBMI(result.bmi_result || "Error fetching BMI result");
    } catch (error) {
      console.error("Error:", error);
      setBMI("Error fetching BMI result");
    } finally {
      setLoadingBMI(false); // Hide spinner
    }
  };

  return (
    <>
      <section className="main-container">
        <h1 className="calculate-title">Diet Planner</h1>
        <div className="calculate-content">
          <form
            onSubmit={handleUpload}
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

            <div className="calculate-group">
              <label>
                Upload Image <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
              {image && (
                <img
                  src={image}
                  alt="Selected"
                  style={{ width: "200px", height: "auto" }}
                />
              )}
              <div>
                <button className="Submit_button" type="submit">
                  Predict
                </button>
                {/* onClick={handleUpload} */}
              </div>
            </div>

            {/* <button type="submit" className="button">
              Predict
            </button> */}
          </form>

          {/* Show spinner only for diet prediction */}
          {loadingDiet ? (
            <div className="loading-spinner"></div>
          ) : (
            dietTips && (
              <p className="result">
                <ReactMarkdown>{dietTips}</ReactMarkdown>
              </p>
            )
          )}
        </div>

        <h1 className="calculate-title">Calculate Your BMI</h1>
        <div className="calculate-content">
          <form
            onSubmit={handleBMI}
            className="calculate-diet"
            id="calculate-diet"
          >
            <div className="calculate-group">
              <label>
                Weight <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="Weight"
                value={user.Weight}
                onChange={handleInputs}
                className="input-box"
                type="number"
                placeholder="Weight in KG"
                required
              />
            </div>

            <div className="calculate-group">
              <label>
                Height <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="Height"
                value={user.Height}
                onChange={handleInputs}
                className="input-box"
                type="number"
                placeholder="Height in m"
                required
              />
            </div>

            <button type="submit" className="button">
              Calculate BMI
            </button>
          </form>

          {/* Show spinner only for BMI calculation */}
          {loadingBMI ? (
            <div className="loading-spinner"></div>
          ) : (
            bmi && (
              <p className="result">
                <ReactMarkdown>{bmi}</ReactMarkdown>
              </p>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Diet;
