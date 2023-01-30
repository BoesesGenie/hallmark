import React, { FC } from 'react';
import { Typo } from '../../ui-kit';
import Layout from '../../components/Layout';
import BenefitsGallery from './components/BenefitsGallery';
import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';
import './styles.sass';

const HomePage: FC = () => (
  <Layout>
    <section className="home-page__about">
      <Typo.H1>About us</Typo.H1>
      <Typo.P className="home-page__about-txt">
        We specialize in supply, installation and maintenance of architectural doors,
        hardware and automatic door operators for residential, commercial, institutional
        and detention construction industries in Canada. Being proud member of Doors
        and Hardware Institute, Hallmark Hardware offers advanced technical experience
        in doors and hardware, as well as extended knowledge of construction industry.
      </Typo.P>
      <div className="home-page__about-img-block">
        <img src={about1} alt="About us" className="home-page__about-img1" />
        <img src={about2} alt="About us" className="home-page__about-img2" />
      </div>
    </section>
    <section className="home-page__benefits">
      <Typo.H1 className="home-page__benefits-title">Our benefits</Typo.H1>
      <BenefitsGallery />
    </section>
  </Layout>
);

export default HomePage;
