'use client';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { NavBar } from '../Layout/Header/NavBar';

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.1) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0  top-1 z-50 mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-2xl border border-transparent bg-foreground/10 px-8 py-2  backdrop-blur-xl',
          className,
        )}
      >
        <NavBar />
      </motion.div>
    </AnimatePresence>
  );
};
