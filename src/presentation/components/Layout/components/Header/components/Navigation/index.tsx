import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ROUTES from '../../../../../../../application/router/routes';
import NavButton from './components/NavButton';
import MenuIcon from './components/MenuIcon';
import { ReactComponent as Logo } from '../../assets/LogoColored.svg';
import { ReactComponent as Close } from './assets/Close.svg';
import { NavigationProps } from './types';
import './styles.sass';

const Navigation: FC<NavigationProps> = ({ iconDark }) => {
  const [isOpened, setIsOpened] = useState(false);
  const portalElement = document.getElementById('portal');

  const navRoutes = [
    {
      route: ROUTES.blog,
      name: 'Our blog'
    },
    {
      href: 'https://google.com',
      target: '_blank',
      name: 'Open postions'
    },
    {
      href: '#contactUs',
      name: 'Contact us'
    },
  ] as const;

  const toggleOpened = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add('fixedPos');
    } else {
      document.body.classList.remove('fixedPos');
    }

    return () => {
      document.body.classList.remove('fixedPos');
    };
  }, [isOpened]);

  return (
    <>
      {isOpened && portalElement ? (
        (createPortal(
          <div className="navigation">
            <div className="navigation__top">
              <Logo />
              <Close onClick={toggleOpened} />
            </div>
            <nav className="navigation__center">
              {navRoutes.map((item) => (
                <NavButton
                  key={item.name}
                  onClick={toggleOpened}
                  {...item}
                />
              ))}
            </nav>
            <div className="navigation__bottom">Phone: (604) 371-0717</div>
          </div>,
          portalElement
        ))
      ) : (
        <MenuIcon fill={iconDark ? 'black' : 'white'} onClick={toggleOpened} />
      )}
    </>
  );
};

export default Navigation;
