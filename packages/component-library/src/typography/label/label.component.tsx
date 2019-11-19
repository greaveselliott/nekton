import React from 'react';
import './label.scss';

export interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactChild;
}

const Label: React.FC<Props> = ({ children }) => {
  return <label className="label">{children}</label>;
};

export default Label;
