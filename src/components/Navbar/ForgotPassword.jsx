// import React, { useState } from "react";
// import axios from "axios";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleForgotPassword = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/forgot-password", { email });
//       alert("Password reset email sent");
//     } catch (error) {
//       console.error("Password reset failed", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleForgotPassword}>Send Reset Password</button>
//     </div>
//   );
// };

// export default ForgotPassword;
