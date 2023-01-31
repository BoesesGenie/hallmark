import { motion } from 'framer-motion';
import React, { FC, useMemo, useState } from 'react';
import data from './data';
import './styles.sass';

const BenefitsGallery: FC = () => {
  const [activeImage, setActiveImage] = useState<number>(data[0].id);

  const orderedData = useMemo(() => {
    const result = [];

    for (let i = activeImage, j = 0; j < data.length; j++) {
      let index = (i <= data.length ? i : i - data.length) - 1;
      
      result.push(data[index]);

      i++;
    }

    return result;
  }, [activeImage]);

  const changeImage = (id: number) => {
    return () => {
      setActiveImage(id);
    };
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
        >
          {orderedData.map(({ id, name, image }) => {
            let className = 'benefits-gallery__image';

            if (id === activeImage) {
              className += ' benefits-gallery__image_active';

              return <img
                key={id}
                src={image}
                alt={name}
                className={className}
                style={{
                  transform: 'perspective(var(--perspective)) rotateY(var(--rotateY))',
                  transformOrigin: 'left',
                }}
              />;
            }

            return (
              <img key={id} src={image} alt={name} className={className} />
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default BenefitsGallery;
