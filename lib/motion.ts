import type { TargetAndTransition, Transition, Variants } from 'framer-motion';

export type MotionDirection = 'up' | 'down' | 'left' | 'right';

export const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const defaultTransition: Transition = {
  duration: 0.48,
  ease: MOTION_EASE,
};

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 28,
  mass: 0.7,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
      ease: MOTION_EASE,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: defaultTransition,
  },
};

export function slideIn(direction: MotionDirection = 'up', distance = 28): Variants {
  const axis = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }[direction];

  return {
    hidden: { opacity: 0, ...axis },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: defaultTransition,
    },
  };
}

export const hoverLift: TargetAndTransition = {
  y: -4,
  boxShadow: '0 18px 38px rgba(0,0,0,0.34)',
  transition: springTransition,
};

export const buttonPress: TargetAndTransition = {
  scale: 0.97,
  transition: {
    type: 'spring',
    stiffness: 420,
    damping: 30,
    mass: 0.55,
  },
};

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 14,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.46,
      ease: MOTION_EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: 'blur(5px)',
    transition: {
      duration: 0.32,
      ease: MOTION_EASE,
    },
  },
};
