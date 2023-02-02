import React, { FC } from 'react';
import { Typo } from '../../../../ui-kit';
import DoorImg from './components/DoorImg';
import ContentAppear from './components/ContentAppear';
import data from './data';
import './styles.sass';

const Products: FC = () => (
  <section className="products">
    <ContentAppear>
      <Typo.H1>Our Products</Typo.H1>
    </ContentAppear>
    {data.map(({ title, image, text }) => (
      <article className="products__article" key={image}>
        <DoorImg src={image} alt="Our Products" />
        <ContentAppear>
          <Typo.H2 className="products__article-title">{title}</Typo.H2>
          <Typo.P>{text}</Typo.P>
        </ContentAppear>
      </article>
    ))}
  </section>
);

export default Products;
