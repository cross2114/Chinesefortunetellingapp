import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function MysticParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function BaGuaSymbol({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      {/* Outer circle */}
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      
      {/* Center Yin Yang */}
      <g transform="translate(100, 100)">
        <path
          d="M 0,-40 A 40,40 0 0,1 0,40 A 20,20 0 0,1 0,0 A 20,20 0 0,0 0,-40"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M 0,40 A 40,40 0 0,1 0,-40 A 20,20 0 0,1 0,0 A 20,20 0 0,0 0,40"
          fill="currentColor"
          opacity="0.2"
        />
        <circle cx="0" cy="20" r="5" fill="currentColor" opacity="0.2" />
        <circle cx="0" cy="-20" r="5" fill="currentColor" opacity="0.6" />
      </g>
      
      {/* Trigrams */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 100 + Math.cos(rad) * 70;
        const y = 100 + Math.sin(rad) * 70;
        
        return (
          <g key={i} transform={`translate(${x}, ${y}) rotate(${angle + 90})`}>
            {/* Three lines of trigram */}
            <rect x="-10" y="-15" width="20" height="2" fill="currentColor" opacity="0.5" />
            <rect x="-10" y="-8" width="20" height="2" fill="currentColor" opacity="0.5" />
            <rect x="-10" y="-1" width="20" height="2" fill="currentColor" opacity="0.5" />
          </g>
        );
      })}
    </svg>
  );
}

export function ChineseCharacter({ char, className = '' }: { char: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 text-accent blur-xl"
      >
        {char}
      </motion.span>
      <span className="relative text-accent/80">{char}</span>
    </span>
  );
}