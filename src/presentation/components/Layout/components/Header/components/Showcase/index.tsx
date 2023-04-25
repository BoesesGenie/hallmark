import React, {FC, useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import './styles.sass';
import MainAnimation from './components/MainAnimation';
import TitleAnimation from './components/TitleAnimation';

const Showcase: FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [showcaseWidth, setShowcaseWidth] = useState<number>(0);
  const [mobColWidth, setMobColWidth] = useState<number>(0);
  const [deskColWidth, setDeskColWidth] = useState<number>(0);
  const [displayMain, setDisplayMain] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (displayMain === undefined || displayMain) {
      return;
    }

    setDisplayMain(true);
  }, [displayMain]);

  useEffect(() => {
    if (!showcaseRef.current?.clientWidth) {
      return;
    }

    setShowcaseWidth(showcaseRef.current?.clientWidth);
    setMobColWidth(showcaseRef.current?.clientWidth / 2);
    setDeskColWidth(showcaseRef.current?.clientWidth / 4);
  }, [showcaseRef.current?.clientWidth]);

  const onCompleteFirst = () => {
    window.setTimeout(() => {
      setDisplayMain(true);
    }, 1700);
  };

  return (
    <div className="showcase" ref={showcaseRef}>
      {showcaseWidth < 768 ? (
        <div className="showcase__animation showcase__animation_mobile">
          <motion.div
            className="showcase__animation-col"
            style={{
              backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
            }}
            initial={{transform: 'translateY(50px)'}}
            animate={{transform: 'translateY(0px)'}}
            transition={{delay: 0.3, duration: 1}}
            onAnimationComplete={onCompleteFirst}
          />
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '50%',
            }}
            initial={{transform: 'translateY(-50px)'}}
            animate={{transform: 'translateY(0px)'}}
            transition={{delay: 0.3, duration: 1}}
          />
          <motion.div
            className="showcase__animation-col-next"
            style={{background: 'linear-gradient(20deg, transparent 10%, #fff 10% 90%)'}}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-100vh)'}}
            transition={{duration: 1}}
          />
          <motion.div
            className="showcase__animation-col-next"
            style={{left: '50%'}}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(100vh)'}}
            transition={{duration: 1}}
          />
          {displayMain && <MainAnimation mobColWidth={mobColWidth} setDisplay={setDisplayMain}/>}
        </div>
      ) : (
        <div className="showcase__animation showcase__animation_tablet">
          {[...(function* () {
            for (let i = 0; i < 4; i++) {
              const onComplete = i === 0 ? onCompleteFirst : () => null;

              yield (
                <motion.div
                  key={`prev${i}`}
                  className="showcase__animation-col"
                  style={{
                    left: `${i * 25}%`,
                  }}
                  initial={{transform: `translateY(${50 * (i % 2 === 0 ? -1 : 1)}px)`}}
                  animate={{transform: 'translateY(0px)'}}
                  transition={{delay: 0.3, duration: 1}}
                  onAnimationComplete={onComplete}
                >
                  <div
                    className="showcase__animation-col-picture"
                    style={{backgroundPositionX: `calc(50% - ${i * deskColWidth}px)`}}
                  />
                </motion.div>
              );
            }
          })()]}
          <motion.div
            className="showcase__animation-col-next"
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(100vh)'}}
            transition={{duration: 1}}
          />
          <motion.div
            className="showcase__animation-col-next"
            style={{
              left: '25%',
              background: 'linear-gradient(20deg, transparent 20%, #fff 20% 80%)',
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-100vh)'}}
            transition={{duration: 1}}
          />
          <motion.div
            className="showcase__animation-col-next"
            style={{left: '50%'}}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(100vh)'}}
            transition={{duration: 1}}
          />
          <motion.div
            className="showcase__animation-col-next"
            style={{
              left: '75%',
              background: 'linear-gradient(20deg, transparent 20%, #fff 20% 80%)',
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-100vh)'}}
            transition={{duration: 1}}
          />
          {displayMain && <MainAnimation deskColWidth={deskColWidth} setDisplay={setDisplayMain}/>}
        </div>
      )}
      {displayMain ? (
        <TitleAnimation/>
      ) : (
        <div className="showcase__title">
          <div className="showcase__title-animation">
            <motion.div
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(0%)'}}
              transition={{duration: 1}}
            >
              Doors and
            </motion.div>
          </div>
          <div className="showcase__title-animation">
            <motion.div
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(0%)'}}
              transition={{duration: 1}}
            >
              hardware for
            </motion.div>
          </div>
          <div className="showcase__title-animation">
            <motion.div
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(0%)'}}
              transition={{duration: 1}}
            >
              residential
            </motion.div>
          </div>
          <div className="showcase__title-animation">
            <motion.div
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(0%)'}}
              transition={{duration: 1}}
            >
              construction
            </motion.div>
          </div>
          <div className="showcase__title-animation">
            <motion.div
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(0%)'}}
              transition={{duration: 1}}
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
