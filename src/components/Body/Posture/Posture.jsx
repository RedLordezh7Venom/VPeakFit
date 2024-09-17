// import React, { useState } from "react";
// import "./Posture.css";

// const Posture = () => {
//   const [user, setUser] = useState({
//     age: " ",
//     weight: "",
//     goal: "",
//     profession: "",
//   });

//   let name, value;

//   const handleInputs = (e) => {
//     console.log(e);
//     e.preventDefault();
//     name = e.target.name;
//     value = e.target.value;

//     setUser({ ...user, [name]: value });
//   };
//   return (
//     <>
//       <section className="main-container">
//         <h1 className="calculate-title">Posture Corrector</h1>
//         <div className="calculate-content">
//           <form
//             action="{{ url_for('recommendations')}}"
//             method="post"
//             onSubmit={handleInputs}
//             className="calculate-diet"
//             id="calculate-diet"
//           >
//             <div className="calculate-group">
//               <label>
//                 Age <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 name="age"
//                 value={user.name}
//                 onChange={handleInputs}
//                 className="input-box"
//                 type="number"
//                 min="1"
//                 max="120"
//                 id="age"
//                 placeholder="Age in years"
//                 required
//               />
//             </div>

//             <div className="calculate-group">
//               <label>
//                 Weight <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 name="weight"
//                 value={user.name}
//                 onChange={handleInputs}
//                 className="input-box"
//                 type="number"
//                 min="1"
//                 max="200"
//                 id="weight"
//                 placeholder="Weight in KG"
//                 required
//               />
//             </div>

//             <div className="calculate-group">
//               <label>
//                 Goal <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 name="goal"
//                 value={user.name}
//                 onChange={handleInputs}
//                 className="input-box"
//                 type="text"
//                 placeholder="Goal"
//                 required
//               />
//             </div>

//             <div className="calculate-group">
//               <label>
//                 Profession <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 className="input-box"
//                 name="profession"
//                 value={user.name}
//                 onChange={handleInputs}
//                 id="profession"
//                 placeholder="Profession"
//                 required
//               ></input>
//             </div>

//             <button type="submit" className="button">
//               Predict
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Posture;

import React, { useState } from "react";
import "./Posture.css";

const Posture = () => {
  const [user, setUser] = useState({
    age: "",
    weight: "",
    goal: "",
    profession: "",
  });

  const [postureResult, setPostureResult] = useState(null);

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You can include the 'Accept' header as well
          Accept: "application/json",
        },
        body: JSON.stringify({
          age: user.age,
          weight: user.weight,
          goal: user.goal,
          profession: user.profession,
        }),
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorText}`
        );
      }

      const data = await response.json();
      setPostureResult(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="main-container">
        <h1 className="calculate-title">Posture Corrector</h1>
        <div className="calculate-content">
          <form
            onSubmit={submitForm}
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
                className="input-box"
                name="profession"
                value={user.profession}
                onChange={handleInputs}
                placeholder="Profession"
                required
              />
            </div>

            <button type="submit" className="button">
              Predict
            </button>
          </form>

          {postureResult && (
            <div className="result">
              <h2>Posture Result: {postureResult.posture}</h2>
              <p>{postureResult.message}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Posture;
