import React from 'react';
import classNames from 'classnames';
import './button.scss';

type props = {
  type?: 'default' | 'round';
  style?: 'primary' | 'secondary' | 'negative';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

const Button: React.FC<props> = ({
  children,
  style,
  disabled,
  type,
  size,
  onClick,
  href
}) => {
  const Element = href ? 'a' : 'button';

  return (
    <Element
      className={classNames({
        button: true,
        [`button--${style}`]: style,
        [`button--${type}`]: type,
        [`button--round--${size}`]: size
      })}
      disabled={disabled}
      onClick={onClick}
      href={href}
    >
      {children}
    </Element>
  );
};

export default Button;

Button.defaultProps = {
  type: 'default',
  style: 'primary'
};
