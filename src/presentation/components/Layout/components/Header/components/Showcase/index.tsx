import React, { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './styles.sass';
import MainAnimation from './components/MainAnimation';
import TitleAnimation from './components/TitleAnimation';

const Showcase: FC = () => {
  const refMobCol1 = useRef<HTMLDivElement>(null);
  const refDeskCol1 = useRef<HTMLDivElement>(null);
  const [mobColWidth, setMobColWidth] = useState<number>(0);
  const [deskColWidth, setDeskColWidth] = useState<number>(0);
  const [display1, setDisplay1] = useState<string>('block');
  const [displayMain, setDisplayMain] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (displayMain === undefined || displayMain) {
      return;
    }

    setDisplayMain(true);
  }, [displayMain]);

  useEffect(() => {
    if (!refMobCol1.current?.clientWidth) {
      return;
    }

    setMobColWidth(refMobCol1.current?.clientWidth);
  }, [refMobCol1.current?.clientWidth]);

  useEffect(() => {
    if (!refDeskCol1.current?.clientWidth) {
      return;
    }

    setDeskColWidth(refDeskCol1.current?.clientWidth);
  }, [refDeskCol1.current?.clientWidth]);

  const onCompleteFirst = () => {
    window.setTimeout(() => {
      setDisplay1('none');
      setDisplayMain(true);
    }, 1700);
  };

  return (
    <div className="showcase">
      <div className="showcase__animation showcase__animation_mobile">
        <motion.div
          className="showcase__animation-col"
          style={{
            backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
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
        {displayMain && <MainAnimation mobColWidth={mobColWidth} setDisplay={setDisplayMain} />}
      </div>
      <div className="showcase__animation showcase__animation_tablet">
        {[...(function* () {
          for (let i = 0; i < 4; i++) {
            yield (
              <motion.div
                className="showcase__animation-col"
                ref={i === 0 ? refDeskCol1 : null}
                style={{
                  left: `${i * 25}%`,
                  display: display1,
                }}
                initial={{transform: `translateY(${50 * (i % 2 === 0 ? -1 : 1)}px)`}}
                animate={{transform: 'translateY(0px)'}}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <div
                  className="showcase__animation-col-picture"
                  style={{backgroundPositionX: `-${i * deskColWidth}px`}}
                />
              </motion.div>
            );
          }
        })()]}
        <motion.div
          className="showcase__animation-col-next"
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(100vh)' }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="showcase__animation-col-next"
          style={{
            left: '25%',
            background: 'linear-gradient(20deg, transparent 20%, #fff 20% 80%)',
          }}
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
          className="showcase__animation-col-next"
          style={{
            left: '75%',
            background: 'linear-gradient(20deg, transparent 20%, #fff 20% 80%)',
          }}
          initial={{ transform: 'translateY(0px)' }}
          animate={{ transform: 'translateY(-100vh)' }}
          transition={{ duration: 1 }}
        />
        {displayMain && <MainAnimation deskColWidth={deskColWidth} setDisplay={setDisplayMain} />}
      </div>
      {displayMain ? (
        <TitleAnimation />
      ) : (
        <div className="showcase__title">
          <div className="showcase__title-animation">
            <motion.div
              initial={{ transform: 'translateY(100%)' }}
              animate={{ transform: 'translateY(0%)' }}
              transition={{ duration: 1 }}
            >
              Doors and
            </motion.div>
          </div>
          <div className="showcase__title-animation">
            <motion.div
              initial={{ transform: 'translateY(100%)' }}
              animate={{ transform: 'translateY(0%)' }}
              transition={{ duration: 1 }}
            >
              hardware for
            </motion.div>
          </div>
          <div className="showcase__title-animation">
            <motion.div
              initial={{ transform: 'translateY(100%)' }}
              animate={{ transform: 'translateY(0%)' }}
              transition={{ duration: 1 }}
            >
              residential
            </motion.div>
          </div>
          <div className="showcase__title-animation">
            <motion.div
              initial={{ transform: 'translateY(100%)' }}
              animate={{ transform: 'translateY(0%)' }}
              transition={{ duration: 1 }}
            >
              construction
            </motion.div>
          </div>
          <div className="showcase__title-animation">
            <motion.div
              initial={{ transform: 'translateY(100%)' }}
              animate={{ transform: 'translateY(0%)' }}
              transition={{ duration: 1 }}
            >
              industries
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcase;
