import { motion, useAnimationControls } from 'framer-motion';
import React, { FC, useMemo, useState } from 'react';
import data from './data';
import './styles.sass';

const BenefitsGallery: FC = () => {
  const [activeImage, setActiveImage] = useState<number>(data[0].id);
  const [classNameContainer, setClassNameContainer] = useState('benefits-gallery__active-image-container');
  const controls = useAnimationControls();

  const orderedData = useMemo(() => {
    const result = [];

    for (let i = activeImage, j = 0; j < data.length; j++) {
      let index = (i <= data.length ? i : i - data.length) - 1;
      
      result.push(data[index]);

      i++;
    }

    return result;
  }, [activeImage]);

  const changeImage = (id: number) => () => {
    if (id === activeImage) {
      return;
    }

    const mult = id - 1;

    controls.start({
      transform: `translateX(calc(-${100 * mult}% - ${80 * mult}px)) perspective(var(--perspective)) rotateY(var(--rotateY))`,
    } as any);

    setActiveImage(id);
  };

  const onCompleteDoor = () => {
    setClassNameContainer('benefits-gallery__active-image-container benefits-gallery__active-image-container_completed');
  };
  
  const onStartDoor = () => {
    setClassNameContainer('benefits-gallery__active-image-container');
  };

  return (
    <>
      <ol className="benefits-gallery__switcher">
        {data.map(({ id, name }) => (
          <li key={id} onClick={changeImage(id)}>{name}</li>
        ))}
      </ol>
      <div className="benefits-gallery__images">
        <motion.div
          className="benefits-gallery__images-inner"
          transition={{ duration: 0.7 }}
          initial={{
            '--perspective': '150px',
            '--rotateY': '70deg',
          } as any}
          whileInView={{
            '--perspective': '150px',
            '--rotateY': '0deg',
          } as any}
          onAnimationStart={onStartDoor}
          onAnimationComplete={onCompleteDoor}
        >
          <div className={classNameContainer}>
            {data.map(({ id, name, image }) => {
              return (
                <motion.img
                  key={id}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    duration: 0.7,
                  }}
                  src={image}
                  alt={name}
                  className="benefits-gallery__image-main"
                  style={{
                    transform: 'perspective(var(--perspective)) rotateY(var(--rotateY))',
                    transformOrigin: 'left',
                  }}
                  animate={controls}
                />
              );
            })}
          </div>
          {orderedData.map(({ id, name, image }) => {
            return (
              <img key={id} src={image} alt={name} className="benefits-gallery__image" />
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default BenefitsGallery;
