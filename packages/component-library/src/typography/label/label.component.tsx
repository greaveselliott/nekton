import React from "react";
import "./label.scss";

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  htmlFor,
}) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
};

export default Label;
