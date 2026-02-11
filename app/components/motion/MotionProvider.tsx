'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { MOTION_EASE } from '@/lib/motion';

type MotionProviderProps = {
  children: ReactNode;
};

export default function MotionProvider({ children }: Readonly<MotionProviderProps>) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.46,
        ease: MOTION_EASE,
      }}
    >
      {children}
    </MotionConfig>
  );
}

