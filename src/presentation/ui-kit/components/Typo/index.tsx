import React, { FC, ReactNode } from 'react';
import H1 from './H1';
import BlH1 from './BlH1';
import H2 from './H2';
import BlH2 from './BlH2';
import P from './P';
import BlP from './BlP';
import { TypoElements } from './types';

const Typo: FC<{ children?: ReactNode }> & TypoElements = ({ children }) => <>{children}</>;

Typo.H1 = H1;
Typo.BlH1 = BlH1;
Typo.H2 = H2;
Typo.BlH2 = BlH2;
Typo.P = P;
Typo.BlP = BlP;

export default Typo;
