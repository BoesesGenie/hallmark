import React, { FC, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Button, Typo } from '../../../../ui-kit';
import ContentAppear from '../../components/ContentAppear';
import data from './data';
import arrow from './assets/arrow.svg';
import './styles.sass';

const ProjectsCallery: FC = () => {
  const [activeImage, setActiveImage] = useState<number>(data[0].id);
  const controls = useAnimationControls();

  const onClick = (direction: 'left' | 'right') => {
    return (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if ((direction === 'left' && activeImage === data[0].id)
        || (direction === 'right' && activeImage === data[data.length - 1].id)
      ) {
        return;
      }

      let move = -activeImage * 100;

      if (direction === 'left') {
        move = -(activeImage - 2) * 100;
      }

      controls.start({
        transform: `translateX(${move}%)`,
      } as any);

      setActiveImage((direction === 'right' ? activeImage + 1 : activeImage - 1));
    };
  };

  return (
    <section className="projects-gallery">
      <ContentAppear>
        <Typo.H1 className="projects-gallery__title">Our ProJects</Typo.H1>
      </ContentAppear>
      <div className="projects-gallery__images">
        {data.map(({ id, image, title }) => {
          let className = 'projects-gallery__image-container';
          
          if (id === activeImage) {
            className += ' projects-gallery__image-container_active';
          }

          return (
            <motion.div
              key={image}
              className={className}
              animate={controls}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.7,
              }}
            >
              <img src={image} alt={title} />
              <h2>{title}</h2>
            </motion.div>
          );
        })}
      </div>
      <div className="projects-gallery__controls">
        <div className="projects-gallery__count">01 — 0{data.length}</div>
        <div className="projects-gallery__buttons">
          <Button theme="circle" onClick={onClick('left')}>
            <img src={arrow} alt="left" />
          </Button>
          <Button theme="circle" onClick={onClick('right')}>
            <img src={arrow} alt="right" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCallery;
