import React from "react";
import "./InputForm.scss";

interface InputFormProps {
  type: string;
  name: string;
  onChange: (e: any) => void;
}

const InputForm: React.FC<InputFormProps> = ({ type, name, onChange }) => {
  return (
    <input type={type} name={name} onChange={onChange} className="InputForm" />
  );
};

export default InputForm;
