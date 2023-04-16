import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import ROUTES from '../../../application/router/routes';
import usePost from '../../../application/hooks/usePost';
import Layout from '../../components/Layout';
import {Button, Typo} from '../../ui-kit';
import image from './assets/image.png';
import './styles.sass';

const BlogInnerPage: FC = () => {
  const navigate = useNavigate();
  const {isPending, post} = usePost();

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(new URL(e.currentTarget.href).pathname);

    return false;
  };

  if (isPending) {
    return null;
  }

  return (
    <Layout>
      <div className="blog-inner-page__wrapper">
        <div>
          <section className="blog-inner-page__post">
            <article>
              <Typo.BlInH1>{post.title}</Typo.BlInH1>
              <div className="blog-inner-page__date">{post.date}</div>
              <img src={post.featuredImage} alt={post.title} className="blog-inner-page__image" width="100%"/>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </section>
          <section className="blog-inner-page__call-action">
            <div>
              <Button>GET A QUOTE</Button>
            </div>
          </section>
        </div>
        <section className="blog-inner-page__list">
          <h3 className="blog-inner-page__list-header">Read more from Hallmark Hardware</h3>
          <div className="blog-inner-page__posts">
            <a href={`${ROUTES.blog}/1`} onClick={onAnchorClick} className="blog-inner-page__list-post-link">
              <article>
                <img src={image} alt="Hallmark" className="blog-inner-page__list-image"/>
                <h4 className="blog-inner-page__list-title">The Importance of Proper Door Hardware for Building
                  Security</h4>
              </article>
            </a>
            <a href={`${ROUTES.blog}/1`} onClick={onAnchorClick} className="blog-inner-page__list-post-link">
              <article>
                <img src={image} alt="Hallmark" className="blog-inner-page__list-image"/>
                <h4 className="blog-inner-page__list-title">The Importance of Proper Door Hardware for Building
                  Security</h4>
              </article>
            </a>
            <a href={`${ROUTES.blog}/1`} onClick={onAnchorClick} className="blog-inner-page__list-post-link">
              <article>
                <img src={image} alt="Hallmark" className="blog-inner-page__list-image"/>
                <h4 className="blog-inner-page__list-title">The Importance of Proper Door Hardware for Building
                  Security</h4>
              </article>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogInnerPage;
