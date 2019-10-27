import React from 'react';
import './link.scss';

const Link: React.FC = ({ children }) => {
  return <a className="link">{children}</a>;
};

export default Link;
