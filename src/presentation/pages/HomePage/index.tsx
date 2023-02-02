import React, { FC } from 'react';
import Layout from '../../components/Layout';
import About from './components/About';
import BenefitsGallery from './components/BenefitsGallery';
import CallAction from './components/CallAction';
import Offer from './components/Offer';
import Products from './components/Products';

const HomePage: FC = () => {
  return (
    <Layout>
      <About />
      <BenefitsGallery />
      <Offer />
      <Products />
      <CallAction />
    </Layout>
  );
};

export default HomePage;
