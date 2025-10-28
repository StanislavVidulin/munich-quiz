import type { Variants, Transition } from 'framer-motion';

export const textAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

export const variants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const transition: Transition = {
  duration: 0.6,
  ease: 'easeInOut',
};
