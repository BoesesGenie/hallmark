import React, {FC} from 'react';
import {motion} from 'framer-motion';

interface ImageContainerProps {
  display: string;
  colWidth: number;
  wrapped?: boolean;
  onAnimationComplete?: () => void;
  delay?: number;
  pictureClassName?: string;
}

const Slide: FC<ImageContainerProps> = ({
  display,
  colWidth,
  wrapped = false,
  onAnimationComplete = () => null,
  delay = 0,
  pictureClassName = '',
}) => {
  if (wrapped) {
    return (
      <>
        {[...(function* () {
          for (let i = 0; i < 4; i++) {
            yield (
              <motion.div
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
                    className={`showcase__animation-col-picture ${pictureClassName}`}
                    style={{backgroundPositionX: `-${i * colWidth}px`}}
                  />
                </motion.div>
              </motion.div>
            );
          }
        })()]}
      </>
    );
  }

  return (
    <>
      {[...(function* () {
        for (let i = 0; i < 4; i++) {
          yield (
            <motion.div
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
                className={`showcase__animation-col-picture ${pictureClassName}`}
                style={{backgroundPositionX: `-${i * colWidth}px`}}
              />
            </motion.div>
          );
        }
      })()]}
    </>
  );
};

export default Slide;
