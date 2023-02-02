import React, { FC, ReactNode } from 'react';
import H1 from './H1';
import H2 from './H2';
import P from './P';
import { TypoElements } from './types';

const Typo: FC<{ children?: ReactNode }> & TypoElements = ({ children }) => <>{children}</>;

Typo.H1 = H1;
Typo.H2 = H2;
Typo.P = P;

export default Typo;
