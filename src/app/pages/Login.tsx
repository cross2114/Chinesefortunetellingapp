import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1684871430852-3413cb17e040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwaW5rJTIwcGFpbnRpbmclMjBtb3VudGFpbiUyMG1pbmltYWx8ZW58MXx8fHwxNzc0Nzk4NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/10" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent/20 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 border border-accent/20 -rotate-12 animate-float" style={{ animationDelay: '4s' }} />

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

          {/* Card with glassmorphism */}
          <Card className="p-8 border-border backdrop-blur-xl bg-card/80 shadow-2xl">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="inline-flex items-center justify-center w-16 h-16 border border-accent/30 mb-4"
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
              <h1 className="text-2xl mb-2 tracking-wider">Welcome Back</h1>
              <p className="text-sm text-muted-foreground tracking-wide">
                Continue your mystical journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-border bg-input-background backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-[1.02]"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/signup" className="text-accent hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </Card>

          {/* Decorative text */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground/60 tracking-[0.3em]">
              天人合一
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}