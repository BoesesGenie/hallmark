import React, { FC } from 'react';
import { Button, Typo } from '../../../../ui-kit';
import image from './assets/image.jpg';
import './styles.sass';

const MainPost: FC = () => {
  const title = '17 Best Door Examples that Architects could use in their floor plans';

  return (
    <section className="main-post">
      <img src={image} alt={title} className="main-post__image" />
      <Typo.BlH1 className="main-post__title">{title}</Typo.BlH1>
      <Typo.BlP>How Mielle Organics went viral on social media, and what that virality means for the company initiial planning</Typo.BlP>
      <div className="main-post__button-container">
        <Button className="main-post__button">Read now</Button>
      </div>
    </section>
  );
};

export default MainPost;
