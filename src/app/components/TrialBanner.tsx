import { motion, AnimatePresence } from 'motion/react';
import { Clock, Crown, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

export function TrialBanner() {
  const { isInTrial, getTrialDaysLeft, user } = useAuth();
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  if (!user || !isInTrial() || dismissed) return null;

  const daysLeft = getTrialDaysLeft();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 pointer-events-auto">
          <motion.div
            className="relative overflow-hidden glass-effect border border-accent/30 shadow-3d"
            animate={{
              boxShadow: [
                '0 4px 20px rgba(184, 84, 62, 0.2)',
                '0 8px 30px rgba(184, 84, 62, 0.3)',
                '0 4px 20px rgba(184, 84, 62, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative px-6 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Crown className="w-6 h-6 text-accent shrink-0" />
                </motion.div>

                {/* Message */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium tracking-wide">
                      Free Trial Active
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {daysLeft === 1 
                      ? 'Last day! Unlimited readings end tomorrow' 
                      : daysLeft === 0
                      ? 'Trial ends today!'
                      : `${daysLeft} days left of unlimited readings`
                    }
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => navigate('/subscription')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:block px-6 py-2 bg-accent text-accent-foreground text-sm tracking-wide shadow-3d hover:shadow-3d-hover transition-all duration-300"
                >
                  Subscribe for $1/mo
                </motion.button>
              </div>

              {/* Close button */}
              <motion.button
                onClick={() => setDismissed(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 hover:bg-white/10 transition-colors shrink-0"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
