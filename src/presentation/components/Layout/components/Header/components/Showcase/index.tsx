import React, { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './styles.sass';

const Showcase: FC = () => {
  const refMobCol1 = useRef<HTMLDivElement>(null);
  const [mobColWidth, setMobColWidth] = useState<number>(0);
  const [display1, setDisplay1] = useState<string>('block');
  const [display2, setDisplay2] = useState<string>('none');
  const [display3, setDisplay3] = useState<string>('none');
  const [display4, setDisplay4] = useState<string>('none');

  useEffect(() => {
    if (!refMobCol1.current?.clientWidth) {
      return;
    }

    setMobColWidth(refMobCol1.current?.clientWidth);
  }, [refMobCol1.current?.clientWidth]);

  const onCompleteFirst = () => {
    setDisplay1('none');
    setDisplay2('block');
  };

  const onCompleteSecond = () => {
    setDisplay2('none');
    setDisplay3('block');
  };

  const onCompleteThird = () => {
    setDisplay3('none');
    setDisplay4('block');
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
        <motion.div
          className="showcase__animation-col"
          style={{
            backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
            display: display2,
          }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(-50px)' }}
          transition={{ delay: 3, duration: 0.7 }}
        />
        <motion.div
          className="showcase__animation-col"
          style={{
            left: '50%',
            display: display2,
          }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(50px)' }}
          transition={{ delay: 3, duration: 0.7 }}
        />
        <motion.div
          className="showcase__animation-col-wrap"
          style={{ display: display2 }}
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(-7%)' }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-2"
            style={{
              backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
              width: '100%',
            }}
            initial={{ transform: 'translateY(-100%)' }}
            animate={{ transform: 'translateY(8.4%)' }}
            transition={{ delay: 3, duration: 1 }}
          />
        </motion.div>
        <motion.div
          className="showcase__animation-col-wrap"
          style={{
            left: '50%',
            display: display2,
          }}
          initial={{ transform: 'translateY(-100%)' }}
          animate={{ transform: 'translateY(-7%)' }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-2"
            style={{
              width: '100%',
            }}
            initial={{ transform: 'translateY(100%)' }}
            animate={{ transform: 'translateY(8.4%)' }}
            transition={{ delay: 3, duration: 1 }}
            onAnimationComplete={onCompleteSecond}
          />
        </motion.div>
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-2"
          style={{
            backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
            display: display3,
          }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(-50px)' }}
          transition={{ delay: 6, duration: 0.7 }}
        />
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-2"
          style={{
            left: '50%',
            display: display3,
          }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(50px)' }}
          transition={{ delay: 6, duration: 0.7 }}
        />
        <motion.div
          className="showcase__animation-col-wrap"
          style={{ display: display3 }}
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(-7%)' }}
          transition={{ delay: 6, duration: 1 }}
        >
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-3"
            style={{
              backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
              width: '100%',
            }}
            initial={{ transform: 'translateY(-100%)' }}
            animate={{ transform: 'translateY(8.4%)' }}
            transition={{ delay: 6, duration: 1 }}
          />
        </motion.div>
        <motion.div
          className="showcase__animation-col-wrap"
          style={{
            left: '50%',
            display: display3,
          }}
          initial={{ transform: 'translateY(-100%)' }}
          animate={{ transform: 'translateY(-7%)' }}
          transition={{ delay: 6, duration: 1 }}
        >
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-3"
            style={{
              width: '100%',
            }}
            initial={{ transform: 'translateY(100%)' }}
            animate={{ transform: 'translateY(8.4%)' }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onCompleteThird}
          />
        </motion.div>
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-3"
          style={{
            backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
            display: display4,
          }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(-50px)' }}
          transition={{ delay: 9, duration: 0.7 }}
        />
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-3"
          style={{
            left: '50%',
            display: display4,
          }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(50px)' }}
          transition={{ delay: 9, duration: 0.7 }}
        />
        <motion.div
          className="showcase__animation-col-wrap"
          style={{ display: display4 }}
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(-7%)' }}
          transition={{ delay: 9, duration: 1 }}
        >
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-4"
            style={{
              backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
              width: '100%',
            }}
            initial={{ transform: 'translateY(-100%)' }}
            animate={{ transform: 'translateY(8.4%)' }}
            transition={{ delay: 9, duration: 1 }}
          />
        </motion.div>
        <motion.div
          className="showcase__animation-col-wrap"
          style={{
            left: '50%',
            display: display4,
          }}
          initial={{ transform: 'translateY(-100%)' }}
          animate={{ transform: 'translateY(-7%)' }}
          transition={{ delay: 9, duration: 1 }}
        >
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-4"
            style={{
              width: '100%',
            }}
            initial={{ transform: 'translateY(100%)' }}
            animate={{ transform: 'translateY(8.4%)' }}
            transition={{ delay: 9, duration: 1 }}
          />
        </motion.div>
      </div>
      <h1 className="showcase__title">Doors for<br /> residential<br /> industries</h1>
    </div>
  );
};

export default Showcase;
