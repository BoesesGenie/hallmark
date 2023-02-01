import React, { FC } from 'react';
import Layout from '../../components/Layout';
import About from './components/About';
import BenefitsGallery from './components/BenefitsGallery';
import Offer from './components/Offer';

const HomePage: FC = () => {
  return (
    <Layout>
      <About />
      <BenefitsGallery />
      <Offer />
    </Layout>
  );
};

export default HomePage;
