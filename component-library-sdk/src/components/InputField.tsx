import React from 'react';
import './InputField.css';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, className = '', ...props }) => {
  return (
    <div className={`input-field ${className}`}>
      <label className="input-label">{label}</label>
      <input className="input-element" {...props} />
    </div>
  );
};

export default InputField;
