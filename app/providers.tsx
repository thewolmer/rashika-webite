'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

import { Toaster } from '@/components/ui/sonner';

const Providers = ({ children }: { children: ReactNode }) => (
  <>
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
    <ProgressBar height="5px" color="#824ba3" options={{ showSpinner: false }} />
    <Toaster richColors position="top-right" />
  </>
);

export default Providers;
