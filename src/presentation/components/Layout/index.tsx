import React, { FC, ReactNode } from 'react';
import { ReactComponent as Logo } from './assets/Logo.svg';
import Navigation from './components/Navigation';
import './styles.sass';

const Layout: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="layout">
    <header className="layout__header">
      <div className="layout__header-top">
        <Logo />
        <Navigation />
      </div>
      <h1 className="layout__header-title">Doors and Hardware for residential construction industries</h1>
    </header>
    {children}
  </div>
);

export default Layout;
