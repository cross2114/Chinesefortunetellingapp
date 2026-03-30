import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { Check, Crown, Zap, Star, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card3D } from '../components/Card3D';
import { FloatingOrbs } from '../components/FloatingElements';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    icon: Star,
    description: 'Begin your mystical journey',
    features: [
      '1 BaZi Reading per month',
      '2 I Ching Consultations',
      '2 Tarot Spreads',
      '1 Face Reading',
      'Daily Fortune Access',
      'Basic interpretations',
    ],
    color: 'muted-foreground',
    gradient: 'from-muted to-muted/50',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 1,
    period: 'month',
    trial: '7 days free',
    icon: Crown,
    description: 'Unlimited mystical wisdom',
    features: [
      '🎉 First 7 days completely FREE',
      'Unlimited BaZi Readings',
      'Unlimited I Ching Consultations',
      'Unlimited Tarot Spreads',
      'Unlimited Face Reading',
      'Unlimited Daily Fortune',
      'Detailed interpretations',
      'Reading history & favorites',
      'Priority support',
      'Cancel anytime',
    ],
    color: 'accent',
    gradient: 'from-accent/20 to-secondary/20',
    popular: true,
  },
];

export function Subscription() {
  const { user, updateSubscription } = useAuth();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState<string | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      navigate('/login');
      return;
    }

    setProcessing(planId);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    updateSubscription(planId as any);
    setProcessing(null);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <FloatingOrbs />
      
      <div className="absolute inset-0 opacity-[0.02]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1774226905294-9970c0098129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwY2FsbGlncmFwaHklMjBhYnN0cmFjdCUyMGFydHxlbnwxfHx8fDE3NzQ3OTg1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <Layout showBackButton={!!user} title="Subscription Plans">
        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-block gradient-border p-4 mb-8"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-3xl">會員</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl mb-6 tracking-wider text-gradient" style={{ fontWeight: 300 }}>
              Choose Your Path
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-5 h-5 text-accent" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <Sparkles className="w-6 h-6 text-accent" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-accent/50 to-transparent" />
              <Star className="w-5 h-5 text-accent" />
            </div>
            
            <p className="text-xl text-muted-foreground tracking-wide max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
              Select the plan that resonates with your spiritual journey
            </p>

            {user && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="mt-8 inline-flex items-center gap-3 px-6 py-3 glass-effect shadow-3d"
              >
                <Crown className="w-5 h-5 text-accent" />
                <span className="text-base">Current Plan:</span>
                <span className="text-base font-medium uppercase tracking-wider text-accent">{user.subscription}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Plans Grid with 3D cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isCurrentPlan = user?.subscription === plan.id;
              const isHovered = hoveredPlan === plan.id;
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                  className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {plan.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-accent text-accent-foreground px-6 py-2 text-xs tracking-[0.3em] shadow-3d">
                        MOST POPULAR
                      </div>
                    </motion.div>
                  )}

                  <Card3D intensity={plan.popular ? 8 : 5}>
                    <motion.div
                      animate={{
                        boxShadow: isHovered 
                          ? '0 20px 60px rgba(139, 69, 19, 0.15)'
                          : '0 4px 20px rgba(139, 69, 19, 0.08)'
                      }}
                      className={`glass-effect p-8 h-full relative overflow-hidden border-2 transition-all duration-500 ${
                        plan.popular 
                          ? 'border-accent/50' 
                          : isCurrentPlan
                          ? 'border-accent/50'
                          : 'border-border hover:border-accent/30'
                      }`}
                    >
                      {/* Gradient background on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} -z-10`}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Background pattern */}
                      <motion.div 
                        className="absolute top-0 right-0 w-40 h-40 opacity-5"
                        animate={{ 
                          rotate: isHovered ? 360 : 0,
                          scale: isHovered ? 1.2 : 1
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <Icon className="w-full h-full" />
                      </motion.div>

                      <div className="relative">
                        {/* Icon */}
                        <motion.div
                          className={`inline-flex items-center justify-center w-16 h-16 gradient-border mb-8 ${
                            plan.popular ? 'animate-glow' : ''
                          }`}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Icon className={`w-8 h-8 text-${plan.color}`} />
                        </motion.div>

                        {/* Plan name */}
                        <h3 className="text-3xl mb-3 tracking-wider">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground mb-8 leading-relaxed" style={{ fontWeight: 300 }}>
                          {plan.description}
                        </p>

                        {/* Price */}
                        <div className="mb-10">
                          <div className="flex items-baseline gap-2">
                            <motion.span 
                              className="text-5xl tracking-tight"
                              animate={{ scale: isHovered ? 1.05 : 1 }}
                            >
                              ${plan.price}
                            </motion.span>
                            <span className="text-muted-foreground text-lg">/{plan.period}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 mb-10">
                          {plan.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <Check className={`w-5 h-5 mt-0.5 shrink-0 text-${plan.color}`} />
                              <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                          <Button
                            onClick={() => handleSubscribe(plan.id)}
                            disabled={isCurrentPlan || processing === plan.id}
                            className={`w-full py-6 text-base tracking-wide shadow-3d hover:shadow-3d-hover transition-all duration-300 ${
                              plan.popular
                                ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                                : 'bg-primary hover:bg-accent text-primary-foreground'
                            }`}
                          >
                            {processing === plan.id
                              ? 'Processing...'
                              : isCurrentPlan
                              ? 'Current Plan'
                              : plan.id === 'free'
                              ? 'Get Started'
                              : 'Upgrade Now'}
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Card3D>
              <div className="glass-effect p-10 shadow-3d">
                <h3 className="text-3xl mb-10 text-center tracking-wider">
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-8">
                  {[
                    {
                      q: 'Can I change my plan anytime?',
                      a: 'Yes, you can upgrade or downgrade your subscription at any time. Changes take effect immediately.'
                    },
                    {
                      q: 'What payment methods do you accept?',
                      a: 'We accept all major credit cards, PayPal, and various international payment methods.'
                    },
                    {
                      q: 'Is there a free trial?',
                      a: 'Yes! Premium plan includes a 7-day free trial. No credit card required. Cancel anytime during the trial and you won\'t be charged.'
                    },
                    {
                      q: 'How does billing work?',
                      a: 'After your 7-day free trial, you\'ll be charged $1/month. You can cancel anytime from your profile page with no commitment.'
                    },
                    {
                      q: 'What happens when my trial ends?',
                      a: 'Your trial automatically converts to a paid subscription at $1/month. You\'ll receive email reminders before you\'re charged.'
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={index > 0 ? 'border-t border-border pt-8' : ''}
                    >
                      <h4 className="mb-3 text-lg tracking-wide">{faq.q}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
              <span className="text-xs text-muted-foreground tracking-[0.4em]">TRUSTED WORLDWIDE</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
            </div>
          </motion.div>
        </div>
      </Layout>
    </div>
  );
}