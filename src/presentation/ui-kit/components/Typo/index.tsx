import React, { FC, ReactNode } from 'react';
import H1 from './H1';
import P from './P';
import { TypoElements } from './types';

const Typo: FC<{ children?: ReactNode }> & TypoElements = ({ children }) => <>{children}</>;

Typo.H1 = H1;
Typo.P = P;

export default Typo;
