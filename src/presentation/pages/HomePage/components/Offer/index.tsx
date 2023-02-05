import React, { FC, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import data from './data';
import './styles.sass';

const Offer: FC = () => {
  const [activeItem, setActiveItem] = useState<number>(data[0].id);

  const orderedData = useMemo(() => {
    const result = [];

    for (let i = activeItem, j = 0; j < data.length; j++) {
      let index = (i <= data.length ? i : i - data.length) - 1;

      result.push(data[index]);

      i++;
    }

    return result;
  }, [activeItem]);

  const onItemMoveComplete = () => {
    setActiveItem(activeItem % data.length + 1);
  };

  return (
    <section className="offer">
      <div className="offer__content">
        <h2 className="offer__title">What are we offer?</h2>
        <p className="offer__text">At Hallmark Hardware, we only work with the most reputable suppliers so our customers feel confident knowing that when aligned with us, they are getting the best</p>
      </div>
      <div className="offer__carousel-wrapper">
        <motion.div
          className="offer__carousel"
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          initial={{
            '--move': '0px',
          } as any}
          animate={{
            '--move': 'calc(-100% - 1px)',
          } as any}
          onUpdate={(latest) => {
            if (latest['--move'] === 'calc(-100% - 1px)') {
              onItemMoveComplete();
            }
          }}
        >
          {orderedData.map(({ id, image }) => (
            <div
              key={id}
              className="offer__carousel-item"
              style={{
                transform: 'translateX(var(--move))',
              }}
            >
              <img src={image} alt={`${id}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
