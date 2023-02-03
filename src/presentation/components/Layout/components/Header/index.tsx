import React, { FC, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../../application/router/routes';
import Navigation from './components/Navigation';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { ReactComponent as LogoDark } from './assets/LogoDark.svg';
import { ReactComponent as LogoColored } from './assets/LogoColored.svg';
import { HeaderProps } from './types';
import './styles.sass';

const Header: FC<HeaderProps> = ({ withShowcase = false }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [headerTopClass, setHeaderTopClass] = useState<string>('header__top');
  const iconDark = !isInView || !withShowcase;
  let mixedClassName = 'header';

  if (!withShowcase) {
    mixedClassName += ' header_without-showcase';
  }

  useEffect(() => {
    if (!isInView || !withShowcase) {
      setHeaderTopClass('header__top header__top_not-in-view');

      return;
    }

    setHeaderTopClass('header__top');
  }, [isInView, withShowcase]);

  return (
    <header className={mixedClassName} ref={ref}>
      <div className={headerTopClass}>
        {withShowcase ? (
          (isInView ? (
            <Logo className='header__logo' onClick={() => navigate(ROUTES.home)} />
          ) : (
            <LogoColored className='header__logo' onClick={() => navigate(ROUTES.home)} />
          ))
        ) : (
          <LogoDark className='header__logo' onClick={() => navigate(ROUTES.home)} />
        )}
        <Navigation iconDark={iconDark} />
      </div>
      {withShowcase && (
        <h1 className="header__title">Doors and Hardware for residential construction industries</h1>
      )}
    </header>
  );
};

export default Header;
