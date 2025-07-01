import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if username or password is missing
    if (!username.trim() || !password.trim()) {
      alert("Both username and password are required!");
      return;
    }

    try {
      const response = await axios.post(
        "https://dev-api.rockstreamer.com/auth/authenticate",
        {
          username,
          password,
        }
      );

      // Handle the response
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
