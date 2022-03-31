import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import checkLogin from "../../utils/checkLogin";

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkLogin()) {
      navigate("/login");
    }
  }, []);
  return <>Gallery</>;
};

export default Gallery;
