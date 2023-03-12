import React, { FC, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ReactComponent as Logo }  from './assets/logo.svg';
import './styles.sass';

interface LoaderProps {
  setShowContent: (show: boolean) => void;
}

let allIsLoaded = false;

const Loader: FC<LoaderProps> = ({ setShowContent }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!allIsLoaded) {
      return;
    }

    setShowContent(true);
  }, [setShowContent]);

  useEffect(() => {
    if (show) {
      document.body.classList.add('fixedPos');
    } else {
      document.body.classList.remove('fixedPos');
    }

    return () => {
      document.body.classList.remove('fixedPos');
    };
  }, [show]);

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

    window.setTimeout(() => {
      setShowContent(true);
    }, 0);

    window.setTimeout(() => {
      setShow(false);
      allIsLoaded = true;
    }, 500);
  }, [isLoaded, isAnimationCompleted, controls, setShowContent]);

  const onAnimationComplete = () => setIsAnimationCompleted(true);

  if (!show || allIsLoaded) {
    return null;
  }

  return (
    <motion.div
      className="loader"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        <Logo />
      </motion.div>
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
