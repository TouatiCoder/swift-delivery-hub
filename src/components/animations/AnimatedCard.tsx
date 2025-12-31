/**
 * AnimatedCard Component
 * Card with hover scale, shadow, and icon animation effects
 * Professional SaaS-style interactions
 */

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Card component with:
 * - Scroll-triggered entrance animation
 * - Hover scale (1.03) and shadow
 * - Smooth transitions
 */
const AnimatedCard = ({ children, className = '', delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
