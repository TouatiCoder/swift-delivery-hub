/**
 * AnimatedButton Component
 * Button wrapper with hover glow and click scale effects
 */

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  pulse?: boolean;
}

/**
 * Button animation wrapper with:
 * - Hover glow effect
 * - Click scale-down (0.97)
 * - Optional subtle pulse animation
 */
const AnimatedButton = ({ children, className = '', pulse = false }: AnimatedButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      animate={pulse ? {
        boxShadow: [
          '0 0 0 0 rgba(15, 118, 110, 0)',
          '0 0 0 8px rgba(15, 118, 110, 0.15)',
          '0 0 0 0 rgba(15, 118, 110, 0)',
        ],
      } : {}}
      transition={pulse ? {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      } : {
        duration: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedButton;
