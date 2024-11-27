import React from "react";
import "../components/style.css";

function Login() {
  return (
    <div className="login-form">
      <div className="container">
        <div className="main">
          <div className="content">
            <div className="top">
              <h2>Sign In</h2>
              <div>
                <i id="icon" class="fa-brands fa-facebook"></i>
                <i id="icon" class="fa-brands fa-twitter"></i>
              </div>
            </div>
            <form action="#" method="post">
              <label for="fname">username</label>
              <input type="text" name="" placeholder="Username" />
              <label for="password">password</label>
              <input type="password" name="" placeholder="Password" />
              <button class="btn" type="submit">
                Sign in
              </button>
            </form>
            <div className="checkbox">
              <div className="checkbox-low">
                <input type="checkbox" name="" id="" />
                <label id="remember" for="form-check-label">
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
