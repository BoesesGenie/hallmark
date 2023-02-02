import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const H2: FC<TypoProps> = ({ className, children }) => (
  <h1 className={`typo__h2 ${className ? className : ''}`}>{children}</h1>
);

export default H2;
