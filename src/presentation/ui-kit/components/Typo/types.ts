import { ReactNode } from 'react';
import H1 from './H1';
import P from './P';

export interface TypoProps {
  className?: string;
  children?: ReactNode;
}

export type TypoElements = {
  H1: typeof H1;
  P: typeof P;
};
