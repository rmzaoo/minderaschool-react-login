import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Register.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Register.scss";
const Register = () => {
  return <div className="register-content">
    <h1>Register</h1>
    <RegisterForm />
    <p>Thank You for register on your's Website</p>
  </div>;
};

export default Register;
