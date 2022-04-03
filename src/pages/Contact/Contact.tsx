import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import checkLogin from "../../utils/checkLogin";
import './Contact.scss';

const Contact = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const checkLoginStatus = async () => {
      let res = await checkLogin();
      if (!res) {
        navigate("/");
        alert("You are not logged in");
      }
    };

    checkLoginStatus();
  }, []);
  return (
    <div className="contact-content">
      <h1>Contact us</h1>
      <ContactForm />
      <p>We will contact you as soon as possible</p>
    </div>
  );
};

export default Contact;
