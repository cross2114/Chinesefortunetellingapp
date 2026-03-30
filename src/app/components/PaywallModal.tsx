import { motion, AnimatePresence } from 'motion/react';
import { Crown, X, Check, Sparkles, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: string;
  readingsUsed?: number;
  readingsLimit?: number;
}

export function PaywallModal({ 
  isOpen, 
  onClose, 
  feature,
  readingsUsed = 0,
  readingsLimit = 0,
}: PaywallModalProps) {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate('/subscription');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="w-full max-w-lg pointer-events-auto"
            >
              <div className="relative glass-effect border border-accent/30 p-8 shadow-3d overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl -z-10" />
                
                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ 
                    scale: { delay: 0.2, type: 'spring', stiffness: 200 },
                    rotate: { delay: 0.4, duration: 0.5 }
                  }}
                  className="w-20 h-20 mx-auto mb-6 gradient-border flex items-center justify-center"
                >
                  <Crown className="w-10 h-10 text-accent" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl text-center mb-4 tracking-wider"
                >
                  Upgrade to Premium
                </motion.h2>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-center mb-6"
                >
                  <p className="text-muted-foreground mb-2">
                    You've used <span className="text-accent font-medium">{readingsUsed}/{readingsLimit}</span> free {feature} readings this month
                  </p>
                  <div className="h-2 bg-white/5 max-w-xs mx-auto overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(readingsUsed / readingsLimit) * 100}%` }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-accent to-accent/50"
                    />
                  </div>
                </motion.div>

                {/* Special offer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-accent/10 border border-accent/30 p-6 mb-6"
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="text-lg tracking-wide">Special Offer</span>
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>

                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Zap className="w-6 h-6 text-accent" />
                      </motion.div>
                      <div>
                        <span className="text-4xl tracking-tight">$1</span>
                        <span className="text-muted-foreground text-lg">/month</span>
                      </div>
                    </div>
                    <p className="text-sm text-accent">
                      First 7 days free, then just $1/month
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Unlimited readings for all services',
                      'Detailed interpretations & insights',
                      'Reading history & favorites',
                      'Priority support',
                      'Cancel anytime, no commitment',
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="space-y-3"
                >
                  <Button
                    onClick={handleUpgrade}
                    className="w-full py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-3d hover:shadow-3d-hover transition-all duration-300"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Start 7-Day Free Trial
                  </Button>
                  
                  <button
                    onClick={onClose}
                    className="w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Maybe later
                  </button>
                </motion.div>

                {/* Fine print */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-xs text-center text-muted-foreground mt-6"
                >
                  No credit card required for trial. Cancel anytime during the trial period and you won't be charged.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
