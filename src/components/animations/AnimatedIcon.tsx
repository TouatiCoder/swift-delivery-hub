/**
 * AnimatedIcon Component
 * Icon wrapper with hover rotate/pulse effects
 */

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
  type?: 'rotate' | 'pulse' | 'bounce';
}

/**
 * Icon animation wrapper with multiple effect types:
 * - rotate: Subtle rotation on hover
 * - pulse: Scale pulse on hover
 * - bounce: Bounce effect on hover
 */
const AnimatedIcon = ({ children, className = '', type = 'rotate' }: AnimatedIconProps) => {
  const hoverAnimations = {
    rotate: { rotate: 12, scale: 1.1 },
    pulse: { scale: [1, 1.15, 1] },
    bounce: { y: -3 },
  };

  return (
    <motion.div
      whileHover={hoverAnimations[type]}
      transition={{
        duration: type === 'pulse' ? 0.4 : 0.3,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedIcon;
