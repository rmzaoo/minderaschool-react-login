import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../utils/checkLogin";
import "./About.scss";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkLogin()) {
      navigate("/login");
    }
  }, []);

  return <div className="about-content">texto e imagem</div>;
};

export default About;
