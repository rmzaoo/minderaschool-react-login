import React, {useState} from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./RegisterForm.scss";

const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");





  const loginUser = () => {
    console.log("email: ", email);
    console.log("password: ", password);
  };


  return (
    <div className="register-form">
      <h1>Register</h1>

      <div className="register-form__input-container">
        <h3>Username:</h3>
        <input type="text" name="username" onChange={() => setEmail(event.target.value)} />
      </div>
      <div className="register-form__input-container">
        <h3>Password:</h3>
        <input type="password" name="password" onChange={() => setPassword(event.target.value)} />
      </div>

      <PrimaryButton onClick={loginUser}>Register</PrimaryButton>
    </div>
  );
};

export default RegisterForm;
