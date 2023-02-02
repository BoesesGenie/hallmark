import React, { FC } from 'react';
import { ButtonProps } from './types';
import './styles.sass';

const Button: FC<ButtonProps> = ({ href, target, children }) => {
  if (href) {
    return (
      <a href={href} target={target} className="button">{children}</a>
    );
  }

  return (
    <button className="button">{children}</button>
  );
};

export default Button;
