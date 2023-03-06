import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../../application/router/routes';
import { Typo } from '../../../../ui-kit';
import MainPost from '../MainPost';
import data from './data';
import './styles.sass';

const PostsList: FC = () => {
  const navigate = useNavigate();

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(new URL(e.currentTarget.href).pathname);

    return false;
  };

  return (
    <section className="posts-list">
      <MainPost />
      {data.map(({ postId, image, title, text }) => (
        <article key={postId}>
          <a href={`${ROUTES.blog}/${postId}`} onClick={onAnchorClick}>
            <img className="posts-list__image" src={image} alt={title} />
            <Typo.BlH2 className="posts-list__title">{title}</Typo.BlH2>
            <Typo.BlP>{text}</Typo.BlP>
          </a>
        </article>
      ))}
    </section>
  );
};

export default PostsList;
