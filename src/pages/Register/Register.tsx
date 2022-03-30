import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './Register.scss';
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div>
      <NavBar />
      <main className="register-content">
        <RegisterForm />
      </main>
    </div>
  );
};

export default Register;
