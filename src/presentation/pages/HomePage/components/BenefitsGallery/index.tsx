import { motion, useAnimationControls, useInView } from 'framer-motion';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Typo } from '../../../../ui-kit';
import data from './data';
import './styles.sass';

const BenefitsGallery: FC = () => {
  const ref = useRef(null);
  const [activeImage, setActiveImage] = useState<number>(data[0].id);
  const [classNameContainer, setClassNameContainer] = useState('benefits-gallery__active-image-container');
  const [timeoutId, setTimeoutId] = useState<number|undefined>(undefined);
  const controls = useAnimationControls();
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView && timeoutId) {
      window.clearTimeout(timeoutId);
      setTimeoutId(undefined);

      return;
    }

    if (!isInView && !timeoutId) {
      doChangeImage(data[0].id);
    }

    const currentTimeoutlId = window.setTimeout(() => {
      const nextImage = activeImage < data.length ? activeImage + 1 : 1;

      doChangeImage(nextImage);
    }, 3000);

    setTimeoutId(currentTimeoutlId);

    return () => window.clearTimeout(timeoutId);
  }, [isInView, activeImage]);

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

    window.clearTimeout(timeoutId);

    doChangeImage(id);
  };

  const doChangeImage = (id: number) => {
    const mult = id - 1;

    controls.start({
      transform: `translateX(calc(-${100 * mult}% - ${80 * mult}px)) perspective(var(--perspective)) rotateY(var(--rotateY))`,
    } as any);

    setActiveImage(id);
  };

  const onCompleteDoor = () => {
    

    setClassNameContainer('benefits-gallery__active-image-container benefits-gallery__active-image-container_completed');

    const currentTimeoutlId = window.setTimeout(() => {
      const nextImage = activeImage < data.length ? activeImage + 1 : 1;
      
      doChangeImage(nextImage);
    }, 2300);

    setTimeoutId(currentTimeoutlId);
  };
  
  const onStartDoor = () => {
    window.clearTimeout(timeoutId);
    setClassNameContainer('benefits-gallery__active-image-container');
  };

  return (
    <section className="benefits-gallery" ref={ref}>
      <motion.div
        style={{ originY: 0 }}
        transition={{ duration: 0.7 }}
        initial={{
          opacity: 0,
          transform: 'scaleY(1.2)',
        }}
        whileInView={{
          opacity: 1,
          transform: 'scaleY(1)',
        }}
      >
        <Typo.H1 className="benefits-gallery__title">Our benefits</Typo.H1>
        <ol className="benefits-gallery__switcher">
          {data.map(({ id, name }) => {
            let className = 'benefits-gallery__switcher-item';

            if (id === activeImage && isInView) {
              className = 'benefits-gallery__switcher-item benefits-gallery__switcher-item_active';
            }

            return (
              <li
                key={id}
                className={className}
                onClick={changeImage(id)}
              >{name}</li>
            );
          })}
        </ol>
      </motion.div>
      <div className="benefits-gallery__images">
        <div className="benefits-gallery__images-inner">
          <motion.div
            className={classNameContainer}
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
          </motion.div>
          {orderedData.map(({ id, name, image }) => {
            return (
              <img key={id} src={image} alt={name} className="benefits-gallery__image" />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGallery;
