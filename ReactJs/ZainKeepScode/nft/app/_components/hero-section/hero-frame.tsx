'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './hero-frame.module.css';

const animations = {
  scaleDown: {
    initial: { backgroundSize: '150%' },
    animate: { backgroundSize: '100%' },
    transition: { duration: 3.5, ease: 'easeInOut' },
  },
  move: {
    initial: { backgroundPosition: '100% center' },
    animate: { backgroundPosition: '50% center' },
    transition: { duration: 3, ease: 'easeInOut' },
  },
};

const HeroFrame = ({
  height,
  width,
  bgImage,
  animationType = 'scaleDown',
}: {
  height: {
    base: number;
    lg: number;
  };
  width: {
    base: number;
    lg: number;
  };
  bgImage: string;
  animationType?: 'scaleDown' | 'move';
}) => {
  const animation = animations[animationType];
  return (
    <motion.div
      className={styles.frame}
      style={
        {
          backgroundImage: `url(${bgImage})`,
          width: `${width.base}px`,
          height: `${height.base}px`,
          '--lg-width': `${width.base}px`,
          '--lg-height': `${height.base}px`,
        } as React.CSSProperties
      }
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    />
  );
};

export default HeroFrame;
