import React, { FC } from 'react';
import { Typo } from '../../ui-kit';
import Layout from '../../components/Layout';
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
    </section>
  </Layout>
);

export default HomePage;
