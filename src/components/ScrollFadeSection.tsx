import React from 'react';
import { motion } from 'motion/react';

interface ScrollFadeSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const ScrollFadeSection: React.FC<ScrollFadeSectionProps> = ({
  children,
  className = '',
  id,
  delay = 0,
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ 
        duration: 0.65, 
        ease: [0.16, 1, 0.3, 1],
        delay 
      }}
    >
      {children}
    </motion.section>
  );
};
