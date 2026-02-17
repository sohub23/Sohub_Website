import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type AnimationVariant = 'fade-up' | 'mask';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
}

export const AnimatedSection = ({ children, className = '', delay = 0, variant = 'fade-up' }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  if (variant === 'mask') {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: '100%' }}
          animate={isInView ? { y: '0%' } : { y: '100%' }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: [0.22, 1, 0.36, 1] // Google-style "Standard Easing"
          }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
