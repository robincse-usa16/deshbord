import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { jwtDecode } from "jwt-decode";

function Login() {
  const url = "https://dev-api.rockstreamer.com/auth/authenticate";
  const [data, setData] = useState({
    fname: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function handle(e) {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function singIn(e) {
    e.preventDefault();
    setError("");

    if (!data.fname || !data.password) {
      setError("Filled Up Username or Password!");
      return;
    }
    setIsLoading(true);
    axios
      .post(url, {
        username: data.fname,
        password: data.password,
      })
      .then((response) => {
        const token = response.data.token;
        const decodedToken = jwtDecode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiry", decodedToken.exp);
        console.log("Login successfull:", response.data);
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setError("Incorrect email or password");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="login-form">
      {isLoading && <Loading />}
      <div className="container">
        <div className="main">
          <div className="content">
            <div className="top">
              <h2>Sign In</h2>
              <div>
                <i id="icon" className="fa-brands fa-facebook"></i>
                <i id="icon" className="fa-brands fa-twitter"></i>
              </div>
            </div>
            <form onSubmit={(e) => singIn(e)}>
              <label htmlFor="fname">username</label>
              <input
                type="text"
                value={data.fname}
                onChange={(e) => handle(e)}
                id="fname"
                placeholder="Username"
              />
              <label htmlFor="password">password</label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => handle(e)}
                id="password"
                placeholder="Password"
              />
              <p className="error">{error}</p>
              <button
                id="signIn"
                className="btn"
                type="button"
                onClick={singIn}
              >
                Sign in
              </button>
            </form>
            <div className="checkbox">
              <div className="checkbox-low">
                <input type="checkbox" name="" id="form-check-label" />
                <label id="remember" htmlFor="form-check-label">
                  Remember me
                </label>
              </div>
              <p>Forget Password</p>
            </div>
          </div>
          <div className="form-right">
            <h1 id="r-heding">Welcome to login</h1>
            <h3 id="p-text">Don't have an account</h3>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
