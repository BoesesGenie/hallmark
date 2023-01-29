import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.sass';

interface NavButtonProps {
  route: string;
  name: string;
}

const NavButton: FC<NavButtonProps> = ({ route, name }) => {
  const navigate = useNavigate();

  return <button className="nav-button" onClick={() => navigate(route)}>{name}</button>;
};

export default NavButton;
