import { ReactNode } from 'react';
import H1 from './H1';
import BlH1 from './BlH1';
import H2 from './H2';
import P from './P';
import BlP from './BlP';

export interface TypoProps {
  className?: string;
  children?: ReactNode;
}

export type TypoElements = {
  H1: typeof H1;
  BlH1: typeof BlH1;
  H2: typeof H2;
  P: typeof P;
  BlP: typeof BlP;
};
