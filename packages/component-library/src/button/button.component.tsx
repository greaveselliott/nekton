import React from 'react';
import classNames from 'classnames';
import './button.scss';

export interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  shape?: 'default' | 'round';
  variant?: 'primary' | 'secondary' | 'negative';
  size?: 'large' | 'medium' | 'small';
  children?: React.ReactChild | React.ReactChild[];
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({
  children,
  variant = 'primary',
  shape = 'default',
  size,
  href = '',
  ...props
}) => {
  const Element = href ? 'a' : 'button';

  return (
    <Element
      {...props}
      className={classNames({
        button: true,
        [`button--${variant}`]: variant,
        [`button--${shape}`]: shape,
        [`button--round--${size}`]: size
      })}
    >
      {children}
    </Element>
  );
};

export default Button;
