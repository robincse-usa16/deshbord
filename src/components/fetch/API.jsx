import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Clear previous error messages

    try {
      const response = await axios.post(
        "https://dev-api.rockstreamer.com/auth/authenticate",
        {
          username,
          password,
        }
      );
      console.log("Login successful!", response.data); // Handle success
      // Redirect or handle login success
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Incorrect email or password. Please try again."); // Specific error
      } else {
        setError("An unexpected error occurred. Please try again later."); // Generic error
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
