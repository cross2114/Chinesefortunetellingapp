import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(email, password, name);
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1774417676189-b6235e7d50ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBtZWRpdGF0aW9uJTIwYmFtYm9vJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzQ3OTg1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-background via-background/95 to-secondary/10" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-20 h-20 border border-secondary/30 animate-spin-slow" />
      <div className="absolute bottom-32 left-20 w-28 h-28 border border-secondary/20 -rotate-45 animate-pulse-slow" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 border-2 border-foreground/20 flex items-center justify-center backdrop-blur-sm bg-card/50">
              <span className="text-sm">玄</span>
            </div>
            <span className="tracking-[0.2em] text-sm">MYSTIC ARTS</span>
          </Link>

          {/* Card */}
          <Card className="p-8 border-border backdrop-blur-xl bg-card/80 shadow-2xl">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 0.3, type: 'spring', duration: 1 }}
                className="inline-flex items-center justify-center w-16 h-16 border border-secondary/30 mb-4"
              >
                <Star className="w-8 h-8 text-secondary" />
              </motion.div>
              <h1 className="text-2xl mb-2 tracking-wider">Begin Your Journey</h1>
              <p className="text-sm text-muted-foreground tracking-wide">
                Unlock ancient wisdom and guidance
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#2c2c2c]">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-border bg-input-background backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#2c2c2c]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-border bg-input-background backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#2c2c2c]">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password (min. 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="border-border bg-input-background backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-secondary transition-all duration-300 transform hover:scale-[1.02]"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-accent hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3 tracking-wider text-center">
                FREE ACCOUNT INCLUDES
              </p>
              <div className="space-y-2">
                {[
                  '1 BaZi Reading',
                  '2 I Ching Consultations',
                  '2 Tarot Spreads',
                  '1 Face Reading Analysis',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1 h-1 bg-accent" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Decorative text */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground/60 tracking-[0.3em]">
              問天知命
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(-45deg); }
          50% { opacity: 0.4; transform: scale(1.05) rotate(-45deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}