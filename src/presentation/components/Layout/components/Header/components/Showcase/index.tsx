import React, { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './styles.sass';

const Showcase: FC = () => {
  const refMobCol1 = useRef<HTMLDivElement>(null);
  const [mobColWidth, setMobColWidth] = useState<number>(0);

  useEffect(() => {
    if (!refMobCol1.current?.clientWidth) {
      return;
    }

    setMobColWidth(refMobCol1.current?.clientWidth);
  }, [refMobCol1.current?.clientWidth]);

  return (
    <div className="showcase">
      <div className="showcase__animation">
        <motion.div
          className="showcase__animation-col"
          style={{ backgroundPositionX: `calc(60% + ${mobColWidth}px)` }}
          ref={refMobCol1}
          initial={{ transform: 'translateY(50px)' }}
          animate={{ transform: 'translateY(0px)' }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.div
          className="showcase__animation-col"
          style={{ left: '50%' }}
          initial={{ transform: 'translateY(-50px)' }}
          animate={{ transform: 'translateY(0px)' }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.div
          className="showcase__animation-col-bg"
          style={{ background: 'linear-gradient(20deg, transparent 10%, #fff 10% 90%)' }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(-100vh)' }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          className="showcase__animation-col-bg"
          style={{ left: '50%' }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(100vh)' }}
          transition={{ duration: 0.7 }}
        />
      </div>
      <h1 className="showcase__title">Doors for<br /> residential<br /> industries</h1>
    </div>
  );
};

export default Showcase;
