import React, { FC, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import logo from './assets/logo.svg';
import './styles.sass';

const Loader: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const controls = useAnimationControls();

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);

      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || !isAnimationCompleted) {
      return;
    }

    controls.start({ opacity: 0 });

    window.setTimeout(() => setShow(false), 500);
  }, [isLoaded, isAnimationCompleted]);

  const onAnimationComplete = () => setIsAnimationCompleted(true);

  if (!show) {
    return null;
  }

  return (
    <motion.div
      className="loader"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={logo}
        alt="Hallmark"
        transition={{ duration: 0.7 }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      />
      <motion.div
        className="loader__text"
        initial={{
          opacity: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
        }}
        onAnimationComplete={onAnimationComplete}
      >
        The mark of quality work
      </motion.div>
    </motion.div>
  );
};

export default Loader;
