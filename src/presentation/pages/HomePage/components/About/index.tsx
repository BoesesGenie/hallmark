import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Typo } from '../../../../ui-kit';
import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';
import './styles.sass';

const About: FC = () => {
  const transition = { duration: 0.7 };

  return (
    <section className="about">
      <motion.div
        style={{ originY: 0 }}
        transition={transition}
        initial={{
          opacity: 0,
          transform: 'scaleY(1.2)',
        }}
        whileInView={{
          opacity: 1,
          transform: 'scaleY(1)',
        }}
      >
        <Typo.H1>About us</Typo.H1>
        <Typo.P className="about__txt">
          We specialize in supply, installation and maintenance of architectural doors,
          hardware and automatic door operators for residential, commercial, institutional
          and detention construction industries in Canada. Being proud member of Doors
          and Hardware Institute, Hallmark Hardware offers advanced technical experience
          in doors and hardware, as well as extended knowledge of construction industry.
        </Typo.P>
      </motion.div>
      <div className="about__img-block">
        <motion.img
          src={about1}
          alt="About us"
          className="about__img1"
          transition={transition}
          style={{ originX: 0 }}
          initial={{
            transform: 'perspective(150px) rotateY(70deg)'
          }}
          whileInView={{ transform: 'perspective(150px) rotateY(0deg)' }}
        />
        <motion.img
          src={about2}
          alt="About us"
          transition={transition}
          style={{ originX: 0 }}
          className="about__img2"
          initial={{
            transform: 'perspective(150px) rotateY(70deg)'
          }}
          whileInView={{ transform: 'perspective(150px) rotateY(0deg)' }}
        />
      </div>
    </section>
  );
};

export default About;
