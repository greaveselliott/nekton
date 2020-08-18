import React from "react";
import "./character.scss";

const Character: React.FC = ({
  children,
}) => {
  return (
    <div className="character">
      {children}
    </div>
  );
};

export default Character;
