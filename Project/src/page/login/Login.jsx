import React from "react";
import "./Login.css";
import img from "./clipart2603183.png";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="loginbg">
        <div className="login">
          <div>
            <div className="login-img">
              <img src={img} />
            </div>
          </div>
          <div className="login-username">
            <div className="login-name">
              <input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
              />
            </div>
            <div class="login-password">
              <input
                id="user-pw"
                placeholder="Password"
                type="password"
                name="user-pw"
              />
            </div>
          </div>
          {/*<div className="forgot">
            <Link to="/">Forgot Password?</Link>
          </div>*/}
          <div className="signup">
            <Link to="/Signin">Sign Up</Link>
          </div>
          <section className="loginbt">
            <input
              className="loginbt"
              id="enterAdd"
              type="submit"
              value="LOGIN"
            />
          </section>
        </div>
      </div>
    );
  }
}
export default Login;
