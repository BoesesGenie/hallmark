import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../../application/router/routes';
import { Button, Typo } from '../../../../ui-kit';
import image from './assets/image.jpg';
import './styles.sass';

const MainPost: FC = () => {
  const title = '17 Best Door Examples that Architects could use in their floor plans';
  const navigate = useNavigate();

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(new URL(e.currentTarget.href).pathname);

    return false;
  };

  return (
    <div className="main-post">
      <img src={image} alt={title} className="main-post__image" />
      <Typo.BlH1 className="main-post__title"><a href={`${ROUTES.blog}/1`} onClick={onAnchorClick}>{title}</a></Typo.BlH1>
      <Typo.BlP>How Mielle Organics went viral on social media, and what that virality means for the company initiial planning</Typo.BlP>
      <div className="main-post__button-container">
        <Button className="main-post__button" onClick={() => navigate(`${ROUTES.blog}/1`)}>Read now</Button>
      </div>
    </div>
  );
};

export default MainPost;
