import React, { FC } from 'react';
import { Typo } from '../../ui-kit';
import Layout from '../../components/Layout';
import About from './components/About';
import BenefitsGallery from './components/BenefitsGallery';
import './styles.sass';

const HomePage: FC = () => {
  return (
    <Layout>
      <About />
      <section className="home-page__benefits">
        <Typo.H1 className="home-page__benefits-title">Our benefits</Typo.H1>
        <BenefitsGallery />
      </section>
    </Layout>
  );
};

export default HomePage;
