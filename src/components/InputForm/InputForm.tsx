import React from "react";
import "./InputForm.scss";

interface InputFormProps {
  type?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

const InputForm: React.FC<InputFormProps> = ({ type, name, placeholder, onChange }) => {
  return (
    <input type={type} name={name} onChange={onChange} className="InputForm" placeholder={placeholder}/>
  );
};

export default InputForm;
