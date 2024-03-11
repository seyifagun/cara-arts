"use client";

import "../../styles/Login.scss";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  return (
    <div className="login">
      <img src="/Afro_art/3_dots.jpg" alt="login" className="login_decor" />
      <div className="login_content">
        <form className="login_content_form">
          <input
            placeholder="Email"
            name="email"
            type="email"
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
          />
          <a className="btnStyle" href="/">
            Log In
          </a>
        </form>
        <a href="/"><button className="google">
          <p>Log In with Google</p>
          <FcGoogle />
        </button></a>
        <a href="/register">Don't have an account? Sign Up Here</a>
      </div>
    </div>
  );
};

export default Login;
