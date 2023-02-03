import React, { FC } from 'react';
import { Button, Input, TextArea, Typo } from '../../../../../../ui-kit';
import './styles.sass';

const ContactUsForm: FC = () => {
  return (
    <section className="contact-us-form" id="contactUs">
      <Typo.H2 className="contact-us-form__title">Request a call back</Typo.H2>
      <Input label="Phone Number" className="contact-us-form__input" />
      <Input label="Email *" className="contact-us-form__input" />
      <Input label="Your Name" className="contact-us-form__input" />
      <TextArea label="Message *" className="contact-us-form__textarea" />
      <Button className="contact-us-form__button">submit request</Button>
    </section>
  );
};

export default ContactUsForm;
