import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X } from 'lucide-react';
import { ChineseCharacter } from './MysticParticles';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after a delay (don't be too aggressive)
      setTimeout(() => {
        const hasSeenPrompt = localStorage.getItem('pwa-prompt-seen');
        const lastDismissed = localStorage.getItem('pwa-prompt-dismissed');
        
        // Don't show if dismissed within last 7 days
        if (lastDismissed) {
          const daysSinceDismissed = (Date.now() - parseInt(lastDismissed)) / (1000 * 60 * 60 * 24);
          if (daysSinceDismissed < 7) {
            return;
          }
        }
        
        // Show if never seen or after 7 days
        if (!hasSeenPrompt) {
          setShowPrompt(true);
          localStorage.setItem('pwa-prompt-seen', 'true');
        }
      }, 3000); // Wait 3 seconds before showing
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Detect if app was installed
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
      console.log('PWA was installed successfully');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`User response to install prompt: ${outcome}`);
    
    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-50"
        >
          <div className="relative border border-[#D4A76A]/30 bg-gradient-to-br from-[#1a1510]/95 to-[#0f0a08]/95 backdrop-blur-xl p-6 shadow-2xl">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#D4A76A]/60" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#D4A76A]/60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#D4A76A]/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#D4A76A]/60" />

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-[#C19A6B]/60 hover:text-[#D4A76A] transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 border border-[#D4A76A]/40 bg-gradient-to-br from-[#D4A76A]/20 to-[#C19A6B]/10 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              >
                <ChineseCharacter char="玄" className="text-lg text-[#D4A76A]" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-base text-[#D4A76A] mb-1" style={{ fontWeight: 300 }}>
                  Install Mystic Arts
                </h3>
                <p className="text-sm text-[#C19A6B]/70 mb-4">
                  Add to your home screen for quick access and offline use
                </p>

                {/* Install button */}
                <button
                  onClick={handleInstall}
                  className="w-full border border-[#D4A76A]/50 bg-gradient-to-r from-[#D4A76A]/20 to-[#C19A6B]/10 px-4 py-2.5 hover:bg-[#D4A76A]/30 transition-all group flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#D4A76A] group-hover:animate-bounce" />
                  <span className="text-sm text-[#D4A76A] tracking-wider">INSTALL APP</span>
                </button>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none blur-2xl"
              style={{
                background: 'radial-gradient(circle at center, rgba(212, 167, 106, 0.3), transparent 70%)'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
