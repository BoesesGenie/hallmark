import React, { FC } from 'react';
import { Typo } from '../../../../ui-kit';
import ContentAppear from '../../../ContentAppear';
import stamp from './assets/stamp-colored.svg';
import stampColored from './assets/stamp-colored.svg';
import stampGreen from './assets/stamp-green.png';
import Contacts from './components/Contacts';
import ContactUsForm from './components/ContactUsForm';
import './styles.sass';

const Footer: FC = () => (
  <div className="footer__wrapper">
    <footer className="footer">
      <ContentAppear>
        <div>
          <Typo.H1 className="footer__title">Contact us</Typo.H1>
          <Typo.P className="footer__text">Doors and Hardware for residential, commercial, institutional and detention construction industries</Typo.P>
        </div>
        <img src={stamp} alt="Hallmark" className="footer__stamp" />
        <img src={stampColored} alt="Hallmark" className="footer__stamp-colored" />
        <img src={stampGreen} alt="Hallmark" className="footer__stamp-green" />
      </ContentAppear>
      <ContactUsForm />
      <Contacts />
    </footer>
  </div>
);

export default Footer;
