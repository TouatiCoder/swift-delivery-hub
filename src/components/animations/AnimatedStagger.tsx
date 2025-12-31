/**
 * AnimatedStagger Component
 * Parent wrapper for staggered children animations
 * Used for sequential reveal effects (e.g., How It Works steps)
 */

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

// Container variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

/**
 * Parent container that staggers child AnimatedStaggerItem components
 */
const AnimatedStagger = ({ children, className = '', staggerDelay = 0.15 }: AnimatedStaggerProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Child item variants
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface AnimatedStaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Child item that animates in sequence within AnimatedStagger parent
 */
export const AnimatedStaggerItem = ({ children, className = '' }: AnimatedStaggerItemProps) => {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedStagger;
