import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

function Login() {
  const [fname, setFname] = useState("");
  const [password, setPassword] = useState("");

  // function saveData() {
  //   // console.warn({ fname, password });
  //   let data = { fname, password };
  //   fetch("http://localhost:5174/", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((result) => {
  //     console.warn("result", result);
  //   });
  // }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((result) => console.log("result", result.data));
  }, []);

  function saveData() {
    console.log({ fname, password });
  }
  return (
    <div className="login-form">
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
            <form action="#" method="post">
              <label htmlFor="fname">username</label>
              <input
                type="text"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                id="fname"
                placeholder="Username"
              />
              <label htmlFor="password">password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                placeholder="Password"
              />
              <button className="btn" type="button" onClick={saveData}>
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
