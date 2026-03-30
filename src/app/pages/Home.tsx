import { Link } from 'react-router';
import { User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { MysticParticles, ChineseCharacter } from '../components/MysticParticles';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BaZiIcon, IChingIcon, TarotIcon, FaceIcon, DailyFortuneIcon } from '../components/DunhuangIcons';
import { useState, useEffect } from 'react';

const services = [
  {
    id: 'bazi',
    title: 'BaZi',
    subtitle: '生辰八字',
    description: 'Decode your destiny through the ancient art of Four Pillars. Discover your inherent strengths and life patterns.',
    icon: BaZiIcon,
    path: '/bazi',
    chineseChar: '命',
    bgGradient: 'from-[#B8543E]/30 via-[#8B3A2F]/20 to-[#6B2D23]/30',
    glowColor: 'rgba(184, 84, 62, 0.6)',
    borderColor: 'border-[#D4A76A]/40',
    textColor: 'text-[#F5E6D3]',
  },
  {
    id: 'iching',
    title: 'I Ching',
    subtitle: '周易卜卦',
    description: 'Seek wisdom from the Book of Changes and divine hexagrams. Ancient guidance for modern questions.',
    icon: IChingIcon,
    path: '/iching',
    chineseChar: '易',
    bgGradient: 'from-[#2C5F5D]/30 via-[#1B4A4A]/20 to-[#164040]/30',
    glowColor: 'rgba(44, 95, 93, 0.6)',
    borderColor: 'border-[#5C8E8C]/40',
    textColor: 'text-[#D4E8E7]',
  },
  {
    id: 'tarot',
    title: 'Tarot',
    subtitle: '塔羅占卜',
    description: 'Unveil hidden truths through mystical tarot card readings. Illuminate your path with ancient symbolism.',
    icon: TarotIcon,
    path: '/tarot',
    chineseChar: '占',
    bgGradient: 'from-[#4A3A5C]/30 via-[#3A2D4A]/20 to-[#2D2238]/30',
    glowColor: 'rgba(74, 58, 92, 0.6)',
    borderColor: 'border-[#8B7BA8]/40',
    textColor: 'text-[#E8DFF5]',
  },
  {
    id: 'face',
    title: 'Face Reading',
    subtitle: '面相分析',
    description: 'Discover your character and fortune through facial features. Traditional physiognomy meets modern insight.',
    icon: FaceIcon,
    path: '/face-reading',
    chineseChar: '相',
    bgGradient: 'from-[#C19A6B]/30 via-[#9A7A4E]/20 to-[#7C5E3A]/30',
    glowColor: 'rgba(193, 154, 107, 0.6)',
    borderColor: 'border-[#D4B896]/40',
    textColor: 'text-[#F5EDE0]',
  },
  {
    id: 'daily',
    title: 'Daily Fortune',
    subtitle: '每日運勢',
    description: 'Receive personalized guidance for each day of your journey. Start every morning with cosmic wisdom.',
    icon: DailyFortuneIcon,
    path: '/daily-fortune',
    chineseChar: '運',
    bgGradient: 'from-[#C1503D]/30 via-[#9B3D2E]/20 to-[#7A2F23]/30',
    glowColor: 'rgba(193, 80, 61, 0.6)',
    borderColor: 'border-[#E8A091]/40',
    textColor: 'text-[#F5E0DB]',
  },
];

export function Home() {
  const { user } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Drag tracking
  const dragX = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  const activeService = services[activeIndex];
  const Icon = activeService.icon;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
    }),
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#1a1510] via-[#0f0a08] to-[#1a0f0a] overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B8543E]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4A6FA5]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4A76A 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Chinese characters in corners */}
      <motion.div
        className="fixed top-8 left-8 text-6xl text-[#D4A76A]/10"
        animate={{ opacity: [0.1, 0.2, 0.1], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <ChineseCharacter char="陰" />
      </motion.div>
      <motion.div
        className="fixed bottom-8 right-8 text-6xl text-[#D4A76A]/10"
        animate={{ opacity: [0.1, 0.2, 0.1], y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        <ChineseCharacter char="陽" />
      </motion.div>

      {/* Navigation controls - Fixed position */}
      <button
        onClick={prevSlide}
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-[#D4A76A]/30 bg-black/40 backdrop-blur-sm hover:bg-[#D4A76A]/20 hover:border-[#D4A76A]/60 transition-all group"
        aria-label="Previous service"
      >
        <ChevronLeft className="w-6 h-6 text-[#D4A76A]/60 group-hover:text-[#D4A76A] transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-[#D4A76A]/30 bg-black/40 backdrop-blur-sm hover:bg-[#D4A76A]/20 hover:border-[#D4A76A]/60 transition-all group"
        aria-label="Next service"
      >
        <ChevronRight className="w-6 h-6 text-[#D4A76A]/60 group-hover:text-[#D4A76A] transition-colors" />
      </button>

      {/* Main content - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-8">
        
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8 md:mb-10"
        >
          {/* Logo */}
          <motion.div 
            className="relative w-12 h-12 md:w-16 md:h-16"
            animate={{ 
              rotateY: [0, 360],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ 
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(0 4px 12px rgba(212, 167, 106, 0.4))'
            }}
          >
            <div className="absolute inset-0 border-2 border-[#D4A76A] bg-gradient-to-br from-[#D4A76A]/20 to-[#C19A6B]/10 backdrop-blur-sm"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <ChineseCharacter char="玄" className="text-lg md:text-2xl text-[#D4A76A] font-bold" />
              </div>
            </div>
            {/* Logo glow */}
            <div className="absolute inset-0 bg-[#D4A76A]/20 blur-xl" />
          </motion.div>

          {/* Title */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-3xl tracking-[0.3em] text-[#D4A76A]" style={{ fontWeight: 300 }}>
              MYSTIC ARTS
            </h1>
            <p className="text-xs md:text-sm text-[#C19A6B]/70 tracking-[0.2em] -mt-1">
              <ChineseCharacter char="問天知命" className="text-xs md:text-sm" />
            </p>
          </div>
        </motion.div>

        {/* Large centered card */}
        <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center" style={{ perspective: '2000px' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                rotateY: { duration: 0.5 },
              }}
              className="w-full h-full max-h-[65vh]"
              drag="x"
              dragConstraints={{ left: -1000, right: 1000 }}
              dragElastic={0.5}
              onDragEnd={handleDragEnd}
              dragSnapToOrigin={true}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Glowing card */}
              <div
                className={`relative w-full h-full border ${activeService.borderColor} backdrop-blur-xl bg-gradient-to-br ${activeService.bgGradient} overflow-hidden group cursor-grab active:cursor-grabbing`}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: `
                    0 40px 80px -20px ${activeService.glowColor},
                    0 20px 40px -20px ${activeService.glowColor},
                    inset 0 0 60px ${activeService.glowColor.replace('0.6', '0.08')}
                  `,
                }}
              >
                {/* Corner decorations */}
                {[0, 90, 180, 270].map((angle) => (
                  <div
                    key={angle}
                    className="absolute w-8 h-8 md:w-12 md:h-12 border-[#D4A76A]/20"
                    style={{
                      top: angle < 180 ? 0 : 'auto',
                      bottom: angle >= 180 ? 0 : 'auto',
                      left: angle === 90 || angle === 180 ? 0 : 'auto',
                      right: angle === 0 || angle === 270 ? 0 : 'auto',
                      borderTopWidth: angle < 180 ? '2px' : '0',
                      borderBottomWidth: angle >= 180 ? '2px' : '0',
                      borderLeftWidth: angle === 90 || angle === 180 ? '2px' : '0',
                      borderRightWidth: angle === 0 || angle === 270 ? '2px' : '0',
                    }}
                  />
                ))}

                {/* Chinese character background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <ChineseCharacter char={activeService.chineseChar} className="text-[20rem] md:text-[30rem]" />
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      `0 0 30px ${activeService.glowColor}, inset 0 0 30px ${activeService.glowColor.replace('0.6', '0.1')}`,
                      `0 0 50px ${activeService.glowColor}, inset 0 0 50px ${activeService.glowColor.replace('0.6', '0.2')}`,
                      `0 0 30px ${activeService.glowColor}, inset 0 0 30px ${activeService.glowColor.replace('0.6', '0.1')}`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-12 text-center">
                  {/* 3D Icon with enhanced effects */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      rotateY: 0,
                    }}
                    transition={{ 
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="mb-4 md:mb-8 relative"
                    style={{ 
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Icon glow layers */}
                    <motion.div
                      className="absolute inset-0 blur-2xl opacity-60"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        background: `radial-gradient(circle, ${activeService.glowColor} 0%, transparent 70%)`
                      }}
                    />
                    
                    {/* Icon container with 3D transform */}
                    <motion.div
                      className="relative"
                      animate={{
                        rotateY: [0, 5, 0, -5, 0],
                        rotateX: [0, -3, 0, 3, 0],
                        y: [0, -8, 0, -4, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        filter: `drop-shadow(0 20px 40px ${activeService.glowColor}) drop-shadow(0 10px 20px ${activeService.glowColor})`
                      }}
                    >
                      {/* Icon background decoration */}
                      <div 
                        className={`absolute inset-0 blur-md opacity-30`}
                        style={{
                          transform: 'translateZ(-20px) scale(1.1)',
                          background: `radial-gradient(circle, ${activeService.glowColor.replace('0.6', '0.8')} 0%, transparent 70%)`
                        }}
                      />
                      
                      {/* Main Icon */}
                      <Icon 
                        className={`w-24 h-24 md:w-48 md:h-48 ${activeService.textColor} relative`}
                        style={{
                          filter: `drop-shadow(0 4px 8px ${activeService.glowColor})`,
                          transform: 'translateZ(0)',
                        }}
                      />
                      
                      {/* Icon highlight overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          transform: 'translateZ(10px)',
                          mixBlendMode: 'overlay'
                        }}
                      />
                    </motion.div>

                    {/* Floating particles around icon */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          background: activeService.glowColor,
                          left: '50%',
                          top: '50%',
                        }}
                        animate={{
                          x: [0, Math.cos(i * Math.PI / 2) * 80, 0],
                          y: [0, Math.sin(i * Math.PI / 2) * 80, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`text-2xl md:text-5xl tracking-[0.3em] ${activeService.textColor} mb-1.5 md:mb-3 drop-shadow-md`}
                    style={{ fontWeight: 300 }}
                  >
                    {activeService.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`text-xs md:text-lg ${activeService.textColor} opacity-80 mb-1.5 md:mb-2`}
                  >
                    {activeService.subtitle}
                  </motion.p>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={`text-xs md:text-base ${activeService.textColor} opacity-70 leading-relaxed mb-4 md:mb-8 max-w-lg px-2 md:px-0`}
                  >
                    {activeService.description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link to={activeService.path}>
                      <Button 
                        className={`bg-gradient-to-r ${activeService.bgGradient.replace(/\/\d+/g, '/80')} hover:opacity-90 border-2 ${activeService.borderColor} ${activeService.textColor} shadow-2xl group h-10 md:h-12 px-6 md:px-8`}
                        style={{
                          boxShadow: `0 8px 30px ${activeService.glowColor}`,
                        }}
                      >
                        <span className="text-xs md:text-sm tracking-[0.2em] font-medium">ENTER</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {services.map((service, index) => {
            const ThumbnailIcon = service.icon;
            const isActive = index === activeIndex;
            
            return (
              <motion.button
                key={service.id}
                onClick={() => goToSlide(index)}
                className={`relative w-12 h-12 md:w-16 md:h-16 border backdrop-blur-sm transition-all ${
                  isActive 
                    ? `${service.borderColor} bg-gradient-to-br ${service.bgGradient}` 
                    : 'border-[#D4A76A]/20 bg-[#0d0a08]/40 hover:border-[#D4A76A]/40'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: isActive 
                    ? `0 0 20px ${service.glowColor}` 
                    : '0 0 0px rgba(0,0,0,0)',
                }}
              >
                {/* Corner accent */}
                {isActive && (
                  <>
                    <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-l border-t border-[#D4A76A]/60" />
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-r border-t border-[#D4A76A]/60" />
                    <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l border-b border-[#D4A76A]/60" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-[#D4A76A]/60" />
                  </>
                )}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <ThumbnailIcon 
                    className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${
                      isActive ? service.textColor : 'text-[#C19A6B]/60'
                    }`} 
                  />
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${service.textColor.replace('text-', 'bg-')}`}
                    layoutId="activeIndicator"
                    style={{
                      boxShadow: `0 0 10px ${service.glowColor}`,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xs text-[#C19A6B]/40 tracking-[0.2em] mt-4 md:mt-6 text-center"
        >
          <span className="md:hidden">SWIPE OR TAP THUMBNAILS</span>
          <span className="hidden md:inline">CLICK THUMBNAILS OR USE ARROWS</span>
        </motion.p>
      </div>
    </div>
  );
}