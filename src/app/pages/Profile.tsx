import { useNavigate } from 'react-router';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { User, Crown, Calendar, LogOut, Settings, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const readingTypes = [
    { key: 'bazi', name: 'BaZi Readings', limit: user.subscription === 'free' ? 1 : user.subscription === 'premium' ? 10 : '∞' },
    { key: 'iching', name: 'I Ching', limit: user.subscription === 'free' ? 2 : user.subscription === 'premium' ? 20 : '∞' },
    { key: 'tarot', name: 'Tarot Spreads', limit: user.subscription === 'free' ? 2 : user.subscription === 'premium' ? 20 : '∞' },
    { key: 'face', name: 'Face Reading', limit: user.subscription === 'free' ? 1 : user.subscription === 'premium' ? 10 : '∞' },
  ];

  const joinDate = new Date(user.joinedDate).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765422793973-382a2ac5315d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwbWVkaXRhdGlvbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc3NDc5ODU3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-secondary/10" />

      <Layout showBackButton title="Profile">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="p-8 border-border backdrop-blur-sm bg-card/80">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 border-2 border-accent/30 bg-accent/5 flex items-center justify-center">
                      <User className="w-12 h-12 text-accent" />
                    </div>
                    {user.subscription !== 'free' && (
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-8 h-8 flex items-center justify-center">
                        <Crown className="w-4 h-4" />
                      </div>
                    )}
                  </motion.div>

                  {/* User Info */}
                  <div className="flex-1">
                    <h1 className="text-3xl mb-2 tracking-wider">{user.name}</h1>
                    <p className="text-sm text-muted-foreground mb-4">{user.email}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {joinDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Crown className="w-4 h-4" />
                        <span className="uppercase tracking-wider">{user.subscription}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-border">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleLogout}
                    className="border-border hover:border-destructive hover:text-destructive"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Subscription Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2"
            >
              <Card className="p-6 border-border backdrop-blur-sm bg-card/80 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl mb-2 tracking-wider">Subscription Plan</h3>
                    <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
                      {user.subscription === 'free' 
                        ? 'Explore the basics of mystical arts'
                        : user.subscription === 'premium'
                        ? 'Enhanced spiritual guidance'
                        : 'Complete mystical mastery'}
                    </p>
                  </div>
                  <div className={`p-3 border ${
                    user.subscription === 'free' 
                      ? 'border-muted' 
                      : 'border-accent/30 bg-accent/5'
                  }`}>
                    <Crown className={`w-6 h-6 ${
                      user.subscription === 'free' ? 'text-muted-foreground' : 'text-accent'
                    }`} />
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl tracking-tight">
                    ${user.subscription === 'free' ? 0 : user.subscription === 'premium' ? 19 : 49}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                {user.subscription !== 'ultimate' && (
                  <Button
                    onClick={() => navigate('/subscription')}
                    className="w-full bg-accent hover:bg-secondary transition-colors"
                  >
                    Upgrade Plan
                  </Button>
                )}
              </Card>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 border-border backdrop-blur-sm bg-card/80 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <h3 className="tracking-wider">Total Readings</h3>
                </div>
                <div className="text-4xl mb-2">
                  {Object.values(user.readingsUsed).reduce((a, b) => a + b, 0)}
                </div>
                <p className="text-xs text-muted-foreground tracking-wider">
                  LIFETIME CONSULTATIONS
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Usage Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 border-border backdrop-blur-sm bg-card/80">
              <h3 className="text-xl mb-6 tracking-wider">Monthly Usage</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {readingTypes.map((reading, index) => {
                  const used = user.readingsUsed[reading.key as keyof typeof user.readingsUsed];
                  const limit = reading.limit;
                  const percentage = typeof limit === 'number' ? (used / limit) * 100 : 0;
                  
                  return (
                    <motion.div
                      key={reading.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm tracking-wide">{reading.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {used} / {limit}
                        </span>
                      </div>
                      
                      {typeof limit === 'number' ? (
                        <div className="h-2 bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className={`h-full ${
                              percentage >= 100 ? 'bg-destructive' : 'bg-accent'
                            }`}
                          />
                        </div>
                      ) : (
                        <div className="h-2 bg-accent/20">
                          <div className="h-full w-full bg-gradient-to-r from-accent via-secondary to-accent animate-shimmer" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {user.subscription === 'free' && (
                <div className="mt-8 p-4 border border-accent/30 bg-accent/5">
                  <p className="text-sm text-center text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>
                    Upgrade to <span className="text-accent font-medium">Premium</span> or <span className="text-accent font-medium">Ultimate</span> for more readings and exclusive features
                  </p>
                </div>
              )}
            </Card>
          </motion.div>

          {/* Wisdom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="p-8 text-center border-border backdrop-blur-sm bg-muted/30">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-12 bg-border" />
                <span className="text-xs tracking-[0.3em]">每日智慧</span>
                <div className="h-px w-12 bg-border" />
              </div>
              <p className="text-base text-foreground/70 leading-relaxed mb-4" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                "When you realize nothing is lacking, the whole world belongs to you"
              </p>
              <p className="text-xs text-muted-foreground tracking-wider">
                — Lao Tzu
              </p>
            </Card>
          </motion.div>
        </div>
      </Layout>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
