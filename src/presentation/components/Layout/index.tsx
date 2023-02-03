import React, { FC, ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ROUTES from '../../../application/router/routes';
import { ReactComponent as Logo } from './assets/Logo.svg';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './styles.sass';

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-top">
          <Logo onClick={() => navigate(ROUTES.home)} />
          <Navigation />
        </div>
        <h1 className="layout__header-title">Doors and Hardware for residential construction industries</h1>
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
