import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import { LayoutProps } from './types';
import './styles.sass';

const Layout: FC<LayoutProps> = ({ withShowcase = false, children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <div className="layout">
      <Loader />
      <Header withShowcase={withShowcase} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
