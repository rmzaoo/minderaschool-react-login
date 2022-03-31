import React from "react";
import InputForm from "../InputForm/InputForm";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ContactForm.scss";

const ContactForm = () => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendEmail = async () => {
    let res = await fetch("http://localhost:3094/emails/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: subject,
        email: email,
        message: message,
      }),
    }).then(function (resp) {
      return resp.json();
    });

    if (res.error) {
      alert(res.message);
      return;
    }

    alert("Email sent successfully");
  };

  return (
    <div className="contact-form">
      <div className="contact-form__input-container">
        <InputForm
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="contact-form__input-container">
        <InputForm
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="contact-form__input-container">
        <InputForm
          name="message"
          type="text"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <PrimaryButton onClick={sendEmail}>Send</PrimaryButton>
    </div>
  );
};

export default ContactForm;
