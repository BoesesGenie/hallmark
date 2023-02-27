import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

interface MainAnimationProps {
  mobColWidth: number;
  setDisplay: (display: boolean) => void;
}

const MainAnimation: FC<MainAnimationProps> = ({ mobColWidth, setDisplay }) => {
  const [display1, setDisplay1] = useState<string>('none');
  const [display2, setDisplay2] = useState<string>('block');
  const [display3, setDisplay3] = useState<string>('none');
  const [display4, setDisplay4] = useState<string>('none');

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
    setDisplay1('block');
  };

  return (
    <>
      <motion.div
        className="showcase__animation-col"
        style={{
          backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
          display: display2,
        }}
        initial={{ transform: 'translateY(0px)' }}
        animate={{ transform: 'translateY(-50px)' }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="showcase__animation-col"
        style={{
          left: '50%',
          display: display2,
        }}
        initial={{ transform: 'translateY(0px)' }}
        animate={{ transform: 'translateY(50px)' }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="showcase__animation-col-wrap"
        style={{ display: display2 }}
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(-7%)' }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-2"
          style={{
            backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
            width: '100%',
          }}
          initial={{ transform: 'translateY(-100%)' }}
          animate={{ transform: 'translateY(8.4%)' }}
          transition={{ duration: 1 }}
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
        transition={{ duration: 1 }}
      >
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-2"
          style={{
            width: '100%',
          }}
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(8.4%)' }}
          transition={{ duration: 1 }}
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
        transition={{ delay: 3, duration: 0.7 }}
      />
      <motion.div
        className="showcase__animation-col showcase__animation-col_step-2"
        style={{
          left: '50%',
          display: display3,
        }}
        initial={{ transform: 'translateY(0px)' }}
        animate={{ transform: 'translateY(50px)' }}
        transition={{ delay: 3, duration: 0.7 }}
      />
      <motion.div
        className="showcase__animation-col-wrap"
        style={{ display: display3 }}
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(-7%)' }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-3"
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
          display: display3,
        }}
        initial={{ transform: 'translateY(-100%)' }}
        animate={{ transform: 'translateY(-7%)' }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-3"
          style={{
            width: '100%',
          }}
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(8.4%)' }}
          transition={{ delay: 3, duration: 1 }}
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
        transition={{ delay: 6, duration: 0.7 }}
      />
      <motion.div
        className="showcase__animation-col showcase__animation-col_step-3"
        style={{
          left: '50%',
          display: display4,
        }}
        initial={{ transform: 'translateY(0px)' }}
        animate={{ transform: 'translateY(50px)' }}
        transition={{ delay: 6, duration: 0.7 }}
      />
      <motion.div
        className="showcase__animation-col-wrap"
        style={{ display: display4 }}
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(-7%)' }}
        transition={{ delay: 6, duration: 1 }}
      >
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-4"
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
          display: display4,
        }}
        initial={{ transform: 'translateY(-100%)' }}
        animate={{ transform: 'translateY(-7%)' }}
        transition={{ delay: 6, duration: 1 }}
      >
        <motion.div
          className="showcase__animation-col showcase__animation-col_step-4"
          style={{
            width: '100%',
          }}
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(8.4%)' }}
          transition={{ delay: 6, duration: 1 }}
          onAnimationComplete={onCompleteFourth}
        />
      </motion.div>
      <motion.div
        className="showcase__animation-col showcase__animation-col_step-4"
        style={{
          backgroundPositionX: `calc(60% + ${mobColWidth}px)`,
          display: display1,
        }}
        initial={{ transform: 'translateY(0px)' }}
        animate={{ transform: 'translateY(-50px)' }}
        transition={{ delay: 9, duration: 0.7 }}
      />
      <motion.div
        className="showcase__animation-col showcase__animation-col_step-4"
        style={{
          left: '50%',
          display: display1,
        }}
        initial={{ transform: 'translateY(0px)' }}
        animate={{ transform: 'translateY(50px)' }}
        transition={{ delay: 9, duration: 0.7 }}
      />
      <motion.div
        className="showcase__animation-col-wrap"
        style={{ display: display1 }}
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(-7%)' }}
        transition={{ delay: 9, duration: 1 }}
      >
        <motion.div
          className="showcase__animation-col"
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
          display: display1,
        }}
        initial={{ transform: 'translateY(-100%)' }}
        animate={{ transform: 'translateY(-7%)' }}
        transition={{ delay: 9, duration: 1 }}
      >
        <motion.div
          className="showcase__animation-col"
          style={{
            width: '100%',
          }}
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(8.4%)' }}
          transition={{ delay: 9, duration: 1 }}
          onAnimationComplete={onCompleteFirst}
        />
      </motion.div>
    </>
  );
};

export default MainAnimation;
