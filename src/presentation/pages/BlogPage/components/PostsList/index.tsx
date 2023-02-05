import React, { FC } from 'react';
import { Typo } from '../../../../ui-kit';
import image from './assets/image.jpg';
import './styles.sass';

const PostsList: FC = () => {
  const title = 'Advice and resources for AAPI Business Owners';

  return (
    <section className="posts-list">
      <article>
        <img className="posts-list__image" src={image} alt={title} />
        <Typo.BlH2 className="posts-list__title">{title}</Typo.BlH2>
        <Typo.BlP>How Mielle Organics went viral on social media, and what that virality means for the company initi...</Typo.BlP>
      </article>
      <article>
        <img className="posts-list__image" src={image} alt={title} />
        <Typo.BlH2 className="posts-list__title">{title}</Typo.BlH2>
        <Typo.BlP>How Mielle Organics went viral on social media, and what that virality means for the company initi...</Typo.BlP>
      </article>
      <article>
        <img className="posts-list__image" src={image} alt={title} />
        <Typo.BlH2 className="posts-list__title">{title}</Typo.BlH2>
        <Typo.BlP>How Mielle Organics went viral on social media, and what that virality means for the company initi...</Typo.BlP>
      </article>
    </section>
  );
};

export default PostsList;
