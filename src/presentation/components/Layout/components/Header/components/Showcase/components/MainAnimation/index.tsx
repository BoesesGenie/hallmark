import React, {FC, useState} from 'react';
import {motion} from 'framer-motion';

interface MainAnimationProps {
  setDisplay: (display: boolean) => void;
  mobColWidth?: number;
  deskColWidth?: number;
}

const MainAnimation: FC<MainAnimationProps> = ({mobColWidth, setDisplay, deskColWidth}) => {
  const [display1, setDisplay1] = useState<string>('none');
  const [display2, setDisplay2] = useState<string>('block');
  const [display3, setDisplay3] = useState<string>('none');
  const [display4, setDisplay4] = useState<string>('none');
  const [display5, setDisplay5] = useState<string>('none');

  const onCompleteFirst = () => {
    window.setTimeout(() => setDisplay(false), 2000);
  };

  const onCompleteSecond = () => {
    setDisplay2('none');
    setDisplay3('block');
  };

  const onCompleteThird = () => {
    setDisplay3('none');
    setDisplay4('block');
  };

  const onCompleteFourth = () => {
    setDisplay4('none');
    setDisplay5('block');
  };

  const onCompleteFifth = () => {
    setDisplay5('none');
    setDisplay1('block');
  };

  return (
    <>
      {deskColWidth ? (
        <>
          {[...(function* () {
            for (let i = 0; i < 4; i++) {
              yield (
                <motion.div
                  className="showcase__animation-col"
                  style={{
                    left: `${i * 25}%`,
                    display: display2,
                  }}
                  initial={{transform: 'translateY(0px)'}}
                  animate={{transform: `translateY(${50 * (i % 2 === 0 ? 1 : -1)}px)`}}
                  transition={{duration: 0.7}}
                >
                  <div
                    className="showcase__animation-col-picture"
                    style={{backgroundPositionX: `-${i * deskColWidth}px`}}
                  />
                </motion.div>
              );
            }
          })()]}
          {[...(function* () {
            for (let i = 0; i < 4; i++) {
              yield (
                <motion.div
                  className="showcase__animation-col-wrap"
                  style={{
                    left: `${i * 25}%`,
                    display: display2,
                  }}
                  initial={{transform: `translateY(${100 * (i % 2 === 0 ? -1 : 1)}%)`}}
                  animate={{transform: 'translateY(-7%)'}}
                  transition={{duration: 1}}
                >
                  <motion.div
                    className="showcase__animation-col"
                    style={{
                      width: '100%',
                    }}
                    initial={{transform: `translateY(${100 * (i % 2 === 0 ? 1 : -1)}%)`}}
                    animate={{transform: 'translateY(8.4%)'}}
                    transition={{duration: 1}}
                    onAnimationComplete={i === 3 ? onCompleteSecond : undefined}
                  >
                    <div
                      className="showcase__animation-col-picture showcase__animation-col-picture_step-2"
                      style={{backgroundPositionX: `-${i * deskColWidth}px`}}
                    />
                  </motion.div>
                </motion.div>
              );
            }
          })()]}
          {[...(function* () {
            for (let i = 0; i < 4; i++) {
              yield (
                <motion.div
                  className="showcase__animation-col"
                  style={{
                    left: `${i * 25}%`,
                    display: display3,
                  }}
                  initial={{transform: 'translateY(0px)'}}
                  animate={{transform: `translateY(${50 * (i % 2 === 0 ? 1 : -1)}px)`}}
                  transition={{
                    delay: 3,
                    duration: 0.7
                  }}
                >
                  <div
                    className="showcase__animation-col-picture showcase__animation-col-picture_step-2"
                    style={{backgroundPositionX: `-${i * deskColWidth}px`}}
                  />
                </motion.div>
              );
            }
          })()]}
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              display: display3,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 3, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 3, duration: 1}}
            >
              <div className="showcase__animation-col-picture showcase__animation-col-picture_step-3"/>
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '25%',
              display: display3,
            }}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 3, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 3, duration: 1}}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-3"
                style={{backgroundPositionX: `-${deskColWidth}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display3,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 3, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 3, duration: 1}}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-3"
                style={{backgroundPositionX: `-${deskColWidth * 2}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '75%',
              display: display3,
            }}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 3, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 3, duration: 1}}
              onAnimationComplete={onCompleteThird}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-3"
                style={{backgroundPositionX: `-${deskColWidth * 3}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              display: display4,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 6, duration: 0.7}}
          >
            <div className="showcase__animation-col-picture showcase__animation-col-picture_step-3"/>
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '25%',
              display: display4,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 6, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-3"
              style={{backgroundPositionX: `-${deskColWidth}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '50%',
              display: display4,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 6, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-3"
              style={{backgroundPositionX: `-${deskColWidth * 2}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '75%',
              display: display4,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 6, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-3"
              style={{backgroundPositionX: `-${deskColWidth * 3}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              display: display4,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 6, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 6, duration: 1}}
            >
              <div className="showcase__animation-col-picture showcase__animation-col-picture_step-4"/>
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '25%',
              display: display4,
            }}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 6, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 6, duration: 1}}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-4"
                style={{backgroundPositionX: `-${deskColWidth}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display4,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 6, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 6, duration: 1}}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-4"
                style={{backgroundPositionX: `-${deskColWidth * 2}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '75%',
              display: display4,
            }}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 6, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 6, duration: 1}}
              onAnimationComplete={onCompleteFourth}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-4"
                style={{backgroundPositionX: `-${deskColWidth * 3}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              display: display5,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 9, duration: 0.7}}
          >
            <div className="showcase__animation-col-picture showcase__animation-col-picture_step-4"/>
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '25%',
              display: display5,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 9, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-4"
              style={{backgroundPositionX: `-${deskColWidth}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '50%',
              display: display5,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 9, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-4"
              style={{backgroundPositionX: `-${deskColWidth * 2}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '75%',
              display: display5,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 9, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-4"
              style={{backgroundPositionX: `-${deskColWidth * 3}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              display: display5,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 9, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 9, duration: 1}}
            >
              <div className="showcase__animation-col-picture showcase__animation-col-picture_step-5"/>
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '25%',
              display: display5,
            }}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 9, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 9, duration: 1}}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-5"
                style={{backgroundPositionX: `-${deskColWidth}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display5,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 9, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 9, duration: 1}}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-5"
                style={{backgroundPositionX: `-${deskColWidth * 2}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '75%',
              display: display5,
            }}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 9, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 9, duration: 1}}
              onAnimationComplete={onCompleteFifth}
            >
              <div
                className="showcase__animation-col-picture showcase__animation-col-picture_step-5"
                style={{backgroundPositionX: `-${deskColWidth * 3}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              display: display1,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 12, duration: 0.7}}
          >
            <div className="showcase__animation-col-picture showcase__animation-col-picture_step-5"/>
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '25%',
              display: display1,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 12, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-5"
              style={{backgroundPositionX: `-${deskColWidth}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '50%',
              display: display1,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 12, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-5"
              style={{backgroundPositionX: `-${deskColWidth * 2}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '75%',
              display: display1,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 12, duration: 0.7}}
          >
            <div
              className="showcase__animation-col-picture showcase__animation-col-picture_step-5"
              style={{backgroundPositionX: `-${deskColWidth * 3}px`}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              display: display1,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 12, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 12, duration: 1}}
            >
              <div className="showcase__animation-col-picture"/>
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '25%',
              display: display1,
            }}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 12, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 12, duration: 1}}
            >
              <div
                className="showcase__animation-col-picture"
                style={{backgroundPositionX: `-${deskColWidth}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display1,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 12, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 12, duration: 1}}
            >
              <div
                className="showcase__animation-col-picture"
                style={{backgroundPositionX: `-${deskColWidth * 2}px`}}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '75%',
              display: display1,
            }}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 12, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 12, duration: 1}}
              onAnimationComplete={onCompleteFirst}
            >
              <div
                className="showcase__animation-col-picture"
                style={{backgroundPositionX: `-${deskColWidth * 3}px`}}
              />
            </motion.div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className="showcase__animation-col"
            style={{
              backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
              display: display2,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col"
            style={{
              left: '50%',
              display: display2,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col-wrap"
            style={{display: display2}}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{duration: 1}}
          >
            <motion.div
              className="showcase__animation-col showcase__animation-col_step-2"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{duration: 1}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display2,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{duration: 1}}
          >
            <motion.div
              className="showcase__animation-col showcase__animation-col_step-2"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{duration: 1}}
              onAnimationComplete={onCompleteSecond}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-2"
            style={{
              backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
              display: display3,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 3, duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-2"
            style={{
              left: '50%',
              display: display3,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 3, duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col-wrap"
            style={{display: display3}}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 3, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col showcase__animation-col_step-3"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 3, duration: 1}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display3,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 3, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col showcase__animation-col_step-3"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 3, duration: 1}}
              onAnimationComplete={onCompleteThird}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-3"
            style={{
              backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
              display: display4,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 6, duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-3"
            style={{
              left: '50%',
              display: display4,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 6, duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col-wrap"
            style={{display: display4}}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 6, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col showcase__animation-col_step-4"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 6, duration: 1}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display4,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 6, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col showcase__animation-col_step-4"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 6, duration: 1}}
              onAnimationComplete={onCompleteFourth}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-4"
            style={{
              backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
              display: display5,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 9, duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-4"
            style={{
              left: '50%',
              display: display5,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 9, duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col-wrap"
            style={{display: display5}}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 9, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col showcase__animation-col_step-5"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 9, duration: 1}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display5,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 9, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col showcase__animation-col_step-5"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 9, duration: 1}}
              onAnimationComplete={onCompleteFifth}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-5"
            style={{
              backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
              display: display1,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(-50px)'}}
            transition={{delay: 12, duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col showcase__animation-col_step-5"
            style={{
              left: '50%',
              display: display1,
            }}
            initial={{transform: 'translateY(0px)'}}
            animate={{transform: 'translateY(50px)'}}
            transition={{delay: 12, duration: 0.7}}
          />
          <motion.div
            className="showcase__animation-col-wrap"
            style={{display: display1}}
            initial={{transform: 'translateY(100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 12, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                backgroundPositionX: `calc(50% + ${mobColWidth}px)`,
                width: '100%',
              }}
              initial={{transform: 'translateY(-100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 12, duration: 1}}
            />
          </motion.div>
          <motion.div
            className="showcase__animation-col-wrap"
            style={{
              left: '50%',
              display: display1,
            }}
            initial={{transform: 'translateY(-100%)'}}
            animate={{transform: 'translateY(-7%)'}}
            transition={{delay: 12, duration: 1}}
          >
            <motion.div
              className="showcase__animation-col"
              style={{
                width: '100%',
              }}
              initial={{transform: 'translateY(100%)'}}
              animate={{transform: 'translateY(8.4%)'}}
              transition={{delay: 12, duration: 1}}
              onAnimationComplete={onCompleteFirst}
            />
          </motion.div>
        </>
      )}
    </>
  );
};

export default MainAnimation;
