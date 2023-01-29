import React, { FC } from 'react';
import { ReactComponent as Logo } from './assets/Logo.svg';
import Navigation from './components/Navigation';
import './styles.sass';

const Layout: FC = () => (
  <div className="layout">
    <header className="layout__header">
      <div className="layout__header-top">
        <Logo />
        <Navigation />
      </div>
      <h1 className="layout__header-title">Doors and Hardware for residential construction industries</h1>
    </header>
  </div>
);

export default Layout;
