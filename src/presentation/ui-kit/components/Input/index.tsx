import React, { FC } from 'react';
import { InputProps } from './types';
import './styles.sass';

const Input: FC<InputProps> = ({ label, onChange, className }) => {
  let mixedClassName = 'input';

  if (className) {
    mixedClassName += ` ${className}`;
  }

  return (
    <label className={mixedClassName}>
      <div>{label}</div>
      <input className="input__input" type="text" onChange={onChange} />
    </label>
  );
};

export default Input;
