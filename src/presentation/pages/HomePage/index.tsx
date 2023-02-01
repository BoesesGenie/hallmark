import React, { FC } from 'react';
import { Typo } from '../../ui-kit';
import Layout from '../../components/Layout';
import About from './components/About';
import BenefitsGallery from './components/BenefitsGallery';

const HomePage: FC = () => {
  return (
    <Layout>
      <About />
      <BenefitsGallery />
    </Layout>
  );
};

export default HomePage;
