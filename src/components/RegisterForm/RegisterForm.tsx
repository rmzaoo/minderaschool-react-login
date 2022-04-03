import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../utils/checkLogin";
import InputForm from "../InputForm/InputForm";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    let res = await fetch("http://localhost:3094/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        name,
      }),
    }).then(function (resp) {
      return resp.json();
    });

    if (res.error) {
      alert(res.message);
      return;
    }

    alert("Register Successful");
    localStorage.setItem("user", res.user);
    navigate("/");
  };

  useLayoutEffect(() => {
    const checkLoginStatus = async () => {
      let res = await checkLogin();
      if (res) {
        navigate("/");
        alert("You are already logged in");
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <div className="register-form">
      <div className="register-form__input-container">
        <h3>Username:</h3>
        <InputForm
          type="text"
          name="username"
          onChange={(e: any) => setUsername(e.target.value)}
        />
      </div>
      <div className="register-form__input-container">
        <h3>Email:</h3>
        <InputForm
          type="email"
          name="email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </div>
      <div className="register-form__input-container">
        <h3>Password:</h3>
        <InputForm
          type="password"
          name="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>
      <div className="register-form__input-container">
        <h3>Name:</h3>
        <InputForm
          type="text"
          name="name"
          onChange={(e: any) => setName(e.target.value)}
        />
      </div>
      <PrimaryButton onClick={registerUser}>Register</PrimaryButton>
    </div>
  );
};

export default RegisterForm;
