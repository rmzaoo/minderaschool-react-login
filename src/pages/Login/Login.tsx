import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import NavBar from "../../components/NavBar/NavBar";
import './Login.scss'

const Login = () => {
  return (
    <div className="login-content">
      <h1>Login</h1>
      <LoginForm />
      <p>Welcome Back, thank you for your preference</p>
    </div>
  );
};

export default Login;
