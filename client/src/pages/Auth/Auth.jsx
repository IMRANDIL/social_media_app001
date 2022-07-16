import React from "react";
import LogoImg from "../../img/logo.png";
import "./Auth.css";
import Signup from "./Signup";
const Auth = () => {
  return (
    <div className="auth">
      <div className="auth-left">
        <img src={LogoImg} alt="logo-img" draggable="false" />
        <div className="webname">
          <h1 className="logoGrad">AIA Hub</h1>
          <h6>Explore the world of possibilities!</h6>
        </div>
      </div>
      <Signup />
    </div>
  );
};

export default Auth;
