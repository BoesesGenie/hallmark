import React, { FC, useState } from 'react';
import data from './data';
import './styles.sass';

const BenefitsGallery: FC = () => {
  const [activeImage, setActiveImage] = useState(data[0].id);

  return (
    <>
      <ol>
        {data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
      <div className="benefits-gallery__images">
        <div className="benefits-gallery__images-inner">
          {data.map(({ id, name, image }) => {
            let className = 'benefits-gallery__image';

            if (id === activeImage) {
              className += ' benefits-gallery__image_active';
            }

            return (
              <img key={id} src={image} alt={name} className={className} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BenefitsGallery;
