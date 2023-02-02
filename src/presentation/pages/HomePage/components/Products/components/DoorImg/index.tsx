import React, { FC } from 'react';
import { motion } from 'framer-motion';
import './styles.sass';

interface DoorImgProps {
  src: string;
  alt: string;
}

const DoorImg: FC<DoorImgProps> = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className="door-img"
    transition={{ duration: 0.7 }}
    initial={{
      transform: 'perspective(150px) rotateY(70deg)',
      transformOrigin: 'left',
    } as any}
    whileInView={{
      transform: 'perspective(150px) rotateY(0deg)',
      transformOrigin: 'left',
    }}
  />
);

export default DoorImg;
