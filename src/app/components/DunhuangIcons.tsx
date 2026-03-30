import { motion } from 'motion/react';

interface IconProps {
  className?: string;
}

// 生辰八字 - 古钱币与阴阳
export function BaZiIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Outer circle with ancient coin design */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Inner square (方孔钱) */}
      <rect x="40" y="40" width="20" height="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      
      {/* Four Pillars - 四柱 */}
      <line x1="50" y1="10" x2="50" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="65" x2="50" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="65" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      
      {/* Eight trigram dots */}
      <circle cx="50" cy="15" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="50" cy="85" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="50" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="85" cy="50" r="2" fill="currentColor" opacity="0.8" />
      
      {/* Diagonal accent lines */}
      <motion.line
        x1="30" y1="30" x2="38" y2="38"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.line
        x1="70" y1="30" x2="62" y2="38"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      <motion.line
        x1="30" y1="70" x2="38" y2="62"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.line
        x1="70" y1="70" x2="62" y2="62"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
    </svg>
  );
}

// 周易 - 八卦与书卷
export function IChingIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Hexagram lines - 卦象 */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          {i % 2 === 0 ? (
            // Solid line (阳爻)
            <motion.line
              x1="25"
              y1={20 + i * 12}
              x2="75"
              y2={20 + i * 12}
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ) : (
            // Broken line (阴爻)
            <>
              <motion.line
                x1="25"
                y1={20 + i * 12}
                x2="45"
                y2={20 + i * 12}
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
              <motion.line
                x1="55"
                y1={20 + i * 12}
                x2="75"
                y2={20 + i * 12}
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            </>
          )}
        </g>
      ))}
      
      {/* Book scroll decoration */}
      <path
        d="M 20 15 Q 20 10 25 10 L 75 10 Q 80 10 80 15"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
        fill="none"
      />
      <path
        d="M 20 85 Q 20 90 25 90 L 75 90 Q 80 90 80 85"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
        fill="none"
      />
      
      {/* Corner accents */}
      <circle cx="20" cy="15" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="80" cy="15" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="85" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="80" cy="85" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// 塔罗 - 神秘卡牌与星辰
export function TarotIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Card outline */}
      <rect
        x="25"
        y="15"
        width="50"
        height="70"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.6"
      />
      
      {/* Inner decorative border */}
      <rect
        x="30"
        y="20"
        width="40"
        height="60"
        rx="2"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      
      {/* Central star */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      >
        <path
          d="M 50 35 L 52 45 L 62 45 L 54 52 L 57 62 L 50 55 L 43 62 L 46 52 L 38 45 L 48 45 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          opacity="0.4"
        />
      </motion.g>
      
      {/* Mystical circles */}
      <motion.circle
        cx="50"
        cy="50"
        r="18"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: '50px', originY: '50px' }}
      />
      
      {/* Corner stars */}
      {[
        { x: 32, y: 25 },
        { x: 68, y: 25 },
        { x: 32, y: 75 },
        { x: 68, y: 75 }
      ].map((pos, i) => (
        <motion.g
          key={i}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        >
          <line x1={pos.x - 2} y1={pos.y} x2={pos.x + 2} y2={pos.y} stroke="currentColor" strokeWidth="1" />
          <line x1={pos.x} y1={pos.y - 2} x2={pos.x} y2={pos.y + 2} stroke="currentColor" strokeWidth="1" />
        </motion.g>
      ))}
      
      {/* Moon crescent */}
      <path
        d="M 50 65 Q 45 70 50 75 Q 53 70 50 65"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
        fill="none"
      />
    </svg>
  );
}

// 面相 - 脸部轮廓与五官
export function FaceIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Face outline */}
      <ellipse
        cx="50"
        cy="52"
        rx="28"
        ry="35"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.6"
      />
      
      {/* Forehead line - 天庭 */}
      <path
        d="M 30 30 Q 50 28 70 30"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      
      {/* Eyes - 双眼 */}
      <motion.g
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <ellipse cx="40" cy="45" rx="5" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="60" cy="45" rx="5" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="45" r="1.5" fill="currentColor" />
        <circle cx="60" cy="45" r="1.5" fill="currentColor" />
      </motion.g>
      
      {/* Nose - 鼻 */}
      <path
        d="M 50 45 L 50 58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 46 58 Q 50 60 54 58"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      
      {/* Mouth - 口 */}
      <path
        d="M 42 68 Q 50 72 58 68"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* Ears - 耳 */}
      <path
        d="M 22 40 Q 20 45 22 50 Q 24 48 22 45"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 78 40 Q 80 45 78 50 Q 76 48 78 45"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Face reading lines - 面相三停 */}
      <line x1="28" y1="38" x2="72" y2="38" stroke="currentColor" strokeWidth="0.5" opacity="0.2" strokeDasharray="2,2" />
      <line x1="28" y1="58" x2="72" y2="58" stroke="currentColor" strokeWidth="0.5" opacity="0.2" strokeDasharray="2,2" />
      
      {/* Mystical third eye */}
      <motion.circle
        cx="50"
        cy="35"
        r="2"
        fill="currentColor"
        opacity="0.3"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ originX: '50px', originY: '35px' }}
      />
    </svg>
  );
}

// 每日运势 - 太阳与月亮阴阳
export function DailyFortuneIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Central Yin-Yang circle */}
      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      
      {/* Yin-Yang division */}
      <path
        d="M 50 25 A 12.5 12.5 0 0 0 50 50 A 12.5 12.5 0 0 1 50 75"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
      
      {/* Yin dot */}
      <circle cx="50" cy="37.5" r="2.5" fill="currentColor" opacity="0.7" />
      {/* Yang dot */}
      <circle cx="50" cy="62.5" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      
      {/* Sun rays - rotating */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + Math.cos(rad) * 28;
          const y1 = 50 + Math.sin(rad) * 28;
          const x2 = 50 + Math.cos(rad) * 35;
          const y2 = 50 + Math.sin(rad) * 35;
          
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />
          );
        })}
      </motion.g>
      
      {/* Orbital circles */}
      <motion.circle
        cx="50"
        cy="50"
        r="38"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
        strokeDasharray="2,3"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      />
      
      {/* Stars/fortune points */}
      {[
        { angle: 0, r: 38 },
        { angle: 120, r: 38 },
        { angle: 240, r: 38 }
      ].map((star, i) => {
        const rad = (star.angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * star.r;
        const y = 50 + Math.sin(rad) * star.r;
        
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="1.5"
            fill="currentColor"
            opacity="0.6"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
          />
        );
      })}
      
      {/* Decorative corner brackets */}
      <path d="M 15 15 L 10 15 L 10 10" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M 85 15 L 90 15 L 90 10" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M 15 85 L 10 85 L 10 90" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M 85 85 L 90 85 L 90 90" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  );
}
