import React, { FC } from 'react';
import { Typo } from '../../../../ui-kit';
import ContentAppear from '../../../ContentAppear';
import stamp from './assets/stamp.svg';
import Contacts from './components/Contacts';
import ContactUsForm from './components/ContactUsForm';
import './styles.sass';

const Footer: FC = () => (
  <footer className="footer">
    <ContentAppear>
      <div>
        <Typo.H1>Contact us</Typo.H1>
        <Typo.P className="footer__text">Doors and Hardware for residential, commercial, institutional and detention construction industries</Typo.P>
      </div>
      <img src={stamp} alt="Hallmark" className="footer__stamp" />
    </ContentAppear>
    <ContactUsForm />
    <Contacts />
  </footer>
);

export default Footer;
