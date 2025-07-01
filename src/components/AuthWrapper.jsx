import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    // console.log("Current time in millis", currentTime);

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token");
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthWrapper;
