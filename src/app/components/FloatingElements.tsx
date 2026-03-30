import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  rotate?: number;
  className?: string;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 6,
  x = 0,
  y = -20,
  rotate = 5,
  className = '',
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, y, 0],
        rotate: [0, rotate, 0],
        x: [0, x, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large orb */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-accent blur-3xl"
      />

      {/* Medium orb */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-secondary blur-3xl"
      />

      {/* Small orb */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-32 left-1/3 w-64 h-64 rounded-full bg-accent blur-3xl"
      />
    </div>
  );
}

interface DecorativeSymbolProps {
  symbol: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animation?: 'float' | 'rotate' | 'pulse' | 'glow';
}

export function DecorativeSymbol({
  symbol,
  className = '',
  size = 'md',
  animation = 'float',
}: DecorativeSymbolProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-20 h-20 text-3xl',
    lg: 'w-32 h-32 text-5xl',
  };

  const animations = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
    },
    rotate: {
      rotate: [0, 360],
      transition: { duration: 20, repeat: Infinity, ease: 'linear' },
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
    glow: {
      filter: [
        'drop-shadow(0 0 5px rgba(139, 69, 19, 0.3))',
        'drop-shadow(0 0 20px rgba(139, 69, 19, 0.6))',
        'drop-shadow(0 0 5px rgba(139, 69, 19, 0.3))',
      ],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      animate={animations[animation]}
      className={`${sizeClasses[size]} border border-accent/20 flex items-center justify-center ${className}`}
    >
      <span className="text-accent/30">{symbol}</span>
    </motion.div>
  );
}
