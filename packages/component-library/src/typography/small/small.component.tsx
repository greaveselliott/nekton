import React from "react";
import "./small.scss";

const Small: React.FC = ({ children }) => {
  return <small className="small">{children}</small>;
};

export default Small;
