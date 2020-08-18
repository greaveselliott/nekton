import React from "react";
import "./strong.scss";

const H1: React.FC = ({ children }) => {
  return <strong className="strong">{children}</strong>;
};

export default H1;
