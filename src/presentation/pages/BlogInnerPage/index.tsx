import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../application/router/routes';
import Layout from '../../components/Layout';
import { Button, Typo } from '../../ui-kit';
import image from './assets/image.png';
import './styles.sass';

const BlogInnerPage: FC = () => {
  const navigate = useNavigate();

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(new URL(e.currentTarget.href).pathname);

    return false;
  };

  return (
    <Layout>
      <div className="blog-inner-page__wrapper">
        <div>
          <section className="blog-inner-page__post">
            <article>
              <Typo.BlInH1>Doors and Hardware AND THER USE IN various INDUSTRIES IN bc (H1)</Typo.BlInH1>
              <div className="blog-inner-page__date">Feb 19, 2023</div>
              <img src={image} alt="Doors and Hardware" className="blog-inner-page__image" />
              <Typo.BlInP>Doors and hardware are essential components of a building and play a crucial role in ensuring its security and functionality. The right door can provide privacy, insulation, and security, while also serving as a decorative element. The type of door used in a building depends on its intended use and the level of security required. For example, interior doors may have a lighter construction, while exterior doors must be sturdy enough to withstand break-ins and extreme weather conditions.</Typo.BlInP>
              <Typo.BlInH2 className="blog-inner-page__subtitle">AND HOW IS IT DONE? (H2)</Typo.BlInH2>
              <Typo.BlInH3>Great example of that (H3)</Typo.BlInH3>
              <Typo.BlInP>
                The hardware on a door, such as hinges, locks, and handles, is just as important as the door itself. 
                <ul>
                  <li>These components determine how easily the door opens and closes, as well as how secure it is. The hinges must be strong enough to support the weight of the door, and the locks must be able to resist forced entry. </li>
                  <li>Door handles come in a variety of styles, from classic to modern, and can be made from</li>
                </ul>
              </Typo.BlInP>
            </article>
          </section>
          <section className="blog-inner-page__call-action">
            <div>
              <Button>GET A QUOTE</Button>
            </div>
          </section>
        </div>
        <section className="blog-inner-page__list">
          <a href={ROUTES.blog} onClick={onAnchorClick} className="blog-inner-page__list-link">Read more from Hallmark Hardware</a>
          <div className="blog-inner-page__posts">
            <a href={`${ROUTES.blog}/1`} onClick={onAnchorClick} className="blog-inner-page__list-post-link">
              <article>
                <img src={image} alt="Hallmark" className="blog-inner-page__list-image" />
                <h4 className="blog-inner-page__list-title">The Importance of Proper Door Hardware for Building Security</h4>
              </article>
            </a>
            <a href={`${ROUTES.blog}/1`} onClick={onAnchorClick} className="blog-inner-page__list-post-link">
              <article>
                <img src={image} alt="Hallmark" className="blog-inner-page__list-image" />
                <h4 className="blog-inner-page__list-title">The Importance of Proper Door Hardware for Building Security</h4>
              </article>
            </a>
            <a href={`${ROUTES.blog}/1`} onClick={onAnchorClick} className="blog-inner-page__list-post-link">
              <article>
                <img src={image} alt="Hallmark" className="blog-inner-page__list-image" />
                <h4 className="blog-inner-page__list-title">The Importance of Proper Door Hardware for Building Security</h4>
              </article>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogInnerPage;
