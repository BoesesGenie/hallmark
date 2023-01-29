import React, { FC, useState } from 'react';
import ROUTES from '../../../../../application/router/routes';
import NavButton from './components/NavButton';
import { ReactComponent as Menu } from './assets/Menu.svg';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { ReactComponent as Close } from './assets/Close.svg';
import './styles.sass';

const Navigation: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const navRoutes = [
    {
      route: ROUTES.blog,
      name: 'Our blog'
    },
    {
      route: ROUTES.positions,
      name: 'Open postions'
    },
    {
      route: ROUTES.contacts,
      name: 'Contact us'
    },
  ] as const;

  const toggleOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      {isOpened ? (
        <div className="navigation">
          <div className="navigation__top">
            <Logo />
            <Close onClick={toggleOpened} />
          </div>
          <nav className="navigation__center">
            {navRoutes.map(({ route, name }) => (
              <NavButton key={name} route={route} name={name} />
            ))}
          </nav>
          <div className="navigation__bottom">Phone: (604) 371-0717</div>
        </div>
      ) : (
        <Menu onClick={toggleOpened} />
      )}
    </>
  );
};

export default Navigation;
