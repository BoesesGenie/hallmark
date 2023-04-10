import React, {FC} from 'react';
import {motion} from 'framer-motion';

interface StepProps {
  display: string;
  colWidth: number;
  picture1: string;
  picture2: string;
  onAnimationComplete: () => void;
  delay: number;
}

const Step: FC<StepProps> = ({
  display,
  colWidth,
  picture1,
  picture2,
  onAnimationComplete = () => null,
  delay = 0,
}) => {
  return (
    <>
      {[...(function* () {
        for (let i = 0; i < 4; i++) {
          yield (
            <motion.div
              key={`step1_${i}`}
              className="showcase__animation-col"
              style={{
                left: `${i * 25}%`,
                display,
              }}
              initial={{transform: 'translateY(0px)'}}
              animate={{transform: `translateY(${50 * (i % 2 === 0 ? 1 : -1)}px)`}}
              transition={{
                delay,
                duration: 0.7,
              }}
            >
              <div
                className="showcase__animation-col-picture"
                style={{
                  backgroundPositionX: `-${i * colWidth}px`,
                  backgroundImage: `url(${picture1})`,
                }}
              />
            </motion.div>
          );
        }
      })()]}
      {[...(function* () {
        for (let i = 0; i < 4; i++) {
          yield (
            <motion.div
              key={`step2_${i}`}
              className="showcase__animation-col-wrap"
              style={{
                left: `${i * 25}%`,
                display,
              }}
              initial={{transform: `translateY(${100 * (i % 2 === 0 ? -1 : 1)}%)`}}
              animate={{transform: 'translateY(-7%)'}}
              transition={{
                delay,
                duration: 1,
              }}
            >
              <motion.div
                className="showcase__animation-col"
                style={{
                  width: '100%',
                }}
                initial={{transform: `translateY(${100 * (i % 2 === 0 ? 1 : -1)}%)`}}
                animate={{transform: 'translateY(8.4%)'}}
                transition={{
                  delay,
                  duration: 1,
                }}
                onAnimationComplete={i === 3 ? onAnimationComplete : undefined}
              >
                <div
                  className="showcase__animation-col-picture"
                  style={{
                    backgroundPositionX: `-${i * colWidth}px`,
                    backgroundImage: `url(${picture2})`,
                  }}
                />
              </motion.div>
            </motion.div>
          );
        }
      })()]}
    </>
  );
};

export default Step;
