import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Dunhuang-style Splash Screen
 * 敦煌美学启动页 - 展示APP图标和品牌
 */

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number; // 显示时长（毫秒）
}

export function SplashScreen({ onComplete, duration = 3500 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 600); // 等待退出动画完成
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f0a08]"
        >
          {/* 背景渐变 */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(184, 84, 62, 0.15), rgba(15, 10, 8, 0) 70%)'
            }}
          />

          {/* 顶部和底部装饰线条 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#D4A76A]/60 to-transparent"
            style={{ width: '60%' }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#D4A76A]/60 to-transparent"
            style={{ width: '60%' }}
          />

          {/* 中心内容区域 */}
          <div className="relative flex flex-col items-center">
            {/* 旋转光环 */}
            <motion.div
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ 
                rotate: 360,
                scale: 1,
                opacity: [0, 0.6, 0.6, 0]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 0.8 },
                opacity: { duration: 2, times: [0, 0.2, 0.8, 1] }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div 
                className="w-72 h-72 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(212, 167, 106, 0.3), transparent)',
                  filter: 'blur(20px)'
                }}
              />
            </motion.div>

            {/* 八卦方位光束 */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
              <motion.div
                key={angle}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 1]
                }}
                transition={{
                  duration: 2,
                  delay: 0.3 + index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className="absolute"
                style={{
                  width: '2px',
                  height: '120px',
                  background: 'linear-gradient(to bottom, rgba(212, 167, 106, 0), rgba(212, 167, 106, 0.6))',
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: 'center bottom',
                  top: 'calc(50% - 120px)',
                  left: '50%',
                  marginLeft: '-1px'
                }}
              />
            ))}

            {/* APP图标容器 */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Custom easing
              }}
              className="relative z-10"
            >
              {/* 外层八边形光晕 */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: 'scale(1.2)' }}
              >
                <div 
                  className="w-44 h-44 border border-[#D4A76A]/20"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                />
              </motion.div>

              {/* 中层六边形容器 */}
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.03, 1]
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2.5, repeat: Infinity, delay: 0.5 }
                }}
                className="relative w-40 h-40 flex items-center justify-center"
              >
                <div 
                  className="absolute inset-0 border-2 border-[#B8543E]/30"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    boxShadow: '0 0 40px rgba(184, 84, 62, 0.3)'
                  }}
                />
              </motion.div>

              {/* 太极图标主体 */}
              <motion.div
                animate={{ 
                  rotate: 360
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="relative w-32 h-32 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #D4A76A 50%, #2C1810 50%)',
                  boxShadow: '0 0 60px rgba(212, 167, 106, 0.4), inset 0 0 20px rgba(0, 0, 0, 0.5)',
                  border: '3px solid rgba(212, 167, 106, 0.6)'
                }}
              >
                {/* 阴阳鱼 */}
                <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-[#2C1810] rounded-bl-full" />
                <div className="absolute bottom-0 left-1/2 w-1/2 h-1/2 bg-[#D4A76A] rounded-tl-full" />
                
                {/* 阴阳眼 */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#2C1810] rounded-full border-2 border-[#D4A76A]/60" />
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-[#D4A76A] rounded-full border-2 border-[#2C1810]/60" />

                {/* 内层光效 */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent 60%)'
                  }}
                />
              </motion.div>
            </motion.div>

            {/* APP名称 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <h1 
                className="text-2xl tracking-[0.3em] text-[#D4A76A] mb-2"
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 300,
                  textShadow: '0 0 20px rgba(212, 167, 106, 0.5)'
                }}
              >
                MYSTIC ARTS
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#C19A6B]/50" />
                <p 
                  className="text-sm text-[#C19A6B]/70 tracking-wider"
                  style={{ fontFamily: 'Noto Serif SC, serif' }}
                >
                  玄学智慧
                </p>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#C19A6B]/50" />
              </div>
            </motion.div>

            {/* 加载指示器 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, delay: 0.8, times: [0, 0.2, 0.8, 1] }}
              className="mt-8"
            >
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-1.5 h-1.5 bg-[#D4A76A]/60"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* 底部版权信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-0 right-0 text-center"
          >
            <p className="text-xs text-[#C19A6B]/40 tracking-wider">
              © 2026 Mystic Arts · For Entertainment Only
            </p>
          </motion.div>

          {/* 四角装饰 */}
          {[
            { top: 16, left: 16 },
            { top: 16, right: 16 },
            { bottom: 16, left: 16 },
            { bottom: 16, right: 16 }
          ].map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="absolute w-6 h-6"
              style={{
                ...position,
                borderTop: index < 2 ? '2px solid rgba(212, 167, 106, 0.3)' : 'none',
                borderBottom: index >= 2 ? '2px solid rgba(212, 167, 106, 0.3)' : 'none',
                borderLeft: index % 2 === 0 ? '2px solid rgba(212, 167, 106, 0.3)' : 'none',
                borderRight: index % 2 === 1 ? '2px solid rgba(212, 167, 106, 0.3)' : 'none',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}