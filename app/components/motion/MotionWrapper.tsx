'use client';

import {
  motion,
  useInView,
  useReducedMotion,
  type MotionProps,
  type Variants,
} from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import {
  fadeIn,
  fadeInUp,
  MOTION_EASE,
  scaleIn,
  slideIn,
  staggerContainer,
  type MotionDirection,
} from '@/lib/motion';

type MotionVariantName = 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideIn';

type MotionWrapperProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  variant?: MotionVariantName;
  direction?: MotionDirection;
  once?: boolean;
  amount?: number;
};

function resolveVariant(variant: MotionVariantName, direction: MotionDirection): Variants {
  if (variant === 'fadeIn') {
    return fadeIn;
  }

  if (variant === 'scaleIn') {
    return scaleIn;
  }

  if (variant === 'slideIn') {
    return slideIn(direction);
  }

  return fadeInUp;
}

function applyMotionTiming(variants: Variants, delay: number, staggerChildren: number): Variants {
  const visibleKey = variants.visible ? 'visible' : variants.animate ? 'animate' : null;
  if (!visibleKey) {
    return variants;
  }

  const visible = variants[visibleKey];
  if (!visible || typeof visible !== 'object') {
    return variants;
  }

  const nextTransition =
    visible && 'transition' in visible && visible.transition
      ? { ...(visible.transition as Record<string, unknown>) }
      : {};

  if (delay > 0) {
    nextTransition.delay = delay;
  }

  if (staggerChildren > 0) {
    nextTransition.staggerChildren = staggerChildren;
    if (!('ease' in nextTransition)) {
      nextTransition.ease = MOTION_EASE;
    }
  }

  return {
    ...variants,
    [visibleKey]: {
      ...visible,
      transition: nextTransition,
    },
  };
}

export default function MotionWrapper({
  children,
  className,
  delay = 0,
  staggerChildren = 0,
  variant = 'fadeInUp',
  direction = 'up',
  once = true,
  amount = 0.24,
  ...rest
}: Readonly<MotionWrapperProps>) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(rootRef, {
    once,
    amount,
  });
  const reduceMotion = useReducedMotion();

  const variants = useMemo(() => {
    if (staggerChildren > 0) {
      return applyMotionTiming(staggerContainer, delay, staggerChildren);
    }

    return applyMotionTiming(resolveVariant(variant, direction), delay, 0);
  }, [delay, direction, staggerChildren, variant]);

  useEffect(() => {
    if (!rootRef.current || reduceMotion) {
      return;
    }

    if (isInView) {
      rootRef.current.style.willChange = 'transform, opacity, filter';
      const timeout = window.setTimeout(() => {
        if (rootRef.current) {
          rootRef.current.style.removeProperty('will-change');
        }
      }, 650);

      return () => window.clearTimeout(timeout);
    }
  }, [isInView, reduceMotion]);

  if (reduceMotion) {
    return (
      <div className={className} ref={rootRef}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={rootRef}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

