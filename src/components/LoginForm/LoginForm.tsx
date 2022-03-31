import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../InputForm/InputForm";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    let res = await fetch("http://localhost:3094/users/login", {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then(function (resp) {
      return resp.json();
    });


    console.log("teste", res);
    if (res.error) {
      alert(res.message);
      return;
    }

    alert("Login Successful");
    navigate("/");
  };

  const checkLogin = () => {
    let user = localStorage.getItem("user");

    if (user && JSON.parse(user).id) {
      alert("You are already logged in");
      navigate("/");
    }
  };

  useEffect(() => {
    checkLogin();
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
        <h3>Password:</h3>
        <InputForm
          type="password"
          name="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>

      <PrimaryButton onClick={loginUser}>Login</PrimaryButton>
    </div>
  );
};

export default LoginForm;
