export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

export const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const hoverVariants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3,
};

export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getMotionVariants = (variants) => {
  return prefersReducedMotion() ? reducedMotionVariants : variants;
};