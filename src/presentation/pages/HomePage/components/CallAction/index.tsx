import React, { FC } from 'react';
import { Button, Typo } from '../../../../ui-kit';
import './styles.sass';

const CallAction: FC = () => (
  <section className="call-action">
    <Typo.H2>Ready to discuss <span className="call-action__title-blue">Your project details?</span></Typo.H2>
    <Button href="#">Request a call</Button>
  </section>
);

export default CallAction;
