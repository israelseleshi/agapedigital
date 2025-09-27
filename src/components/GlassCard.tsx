import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const GlassCard = ({ children, delay = 0, className = '' }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass-consistent rounded-2xl p-8 premium-hover ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;