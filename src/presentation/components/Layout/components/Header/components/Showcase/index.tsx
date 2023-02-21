import React, { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './styles.sass';
import MainAnimation from './components/MainAnimation';

const Showcase: FC = () => {
  const refMobCol1 = useRef<HTMLDivElement>(null);
  const [mobColWidth, setMobColWidth] = useState<number>(0);
  const [display1, setDisplay1] = useState<string>('block');
  const [displayMain, setDisplayMain] = useState<boolean>(false);

  useEffect(() => {
    if (!refMobCol1.current?.clientWidth) {
      return;
    }

    setMobColWidth(refMobCol1.current?.clientWidth);
  }, [refMobCol1.current?.clientWidth]);

  const onCompleteFirst = () => {
    window.setTimeout(() => {
      setDisplay1('none');
      setDisplayMain(true);
    }, 1700);
  };

  return (
    <div className="showcase">
      <div className="showcase__animation">
        <motion.div
          className="showcase__animation-col"
          style={{
            backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
            display: display1,
          }}
          ref={refMobCol1}
          initial={{ transform: 'translateY(50px)' }}
          animate={{ transform: 'translateY(0px)' }}
          transition={{ delay: 0.3, duration: 1 }}
          onAnimationComplete={onCompleteFirst}
        />
        <motion.div
          className="showcase__animation-col"
          style={{
            left: '50%',
            display: display1,
          }}
          initial={{ transform: 'translateY(-50px)' }}
          animate={{ transform: 'translateY(0px)' }}
          transition={{ delay: 0.3, duration: 1 }}
        />
        <motion.div
          className="showcase__animation-col-next"
          style={{ background: 'linear-gradient(20deg, transparent 10%, #fff 10% 90%)' }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(-100vh)' }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="showcase__animation-col-next"
          style={{ left: '50%' }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(100vh)' }}
          transition={{ duration: 1 }}
        />
        {displayMain && <MainAnimation mobColWidth={mobColWidth} />}
      </div>
      <h1 className="showcase__title">Doors for<br /> residential<br /> industries</h1>
    </div>
  );
};

export default Showcase;
