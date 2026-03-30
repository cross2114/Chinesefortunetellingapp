import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router';
import { AlertCircle, Crown, Sparkles, Star } from 'lucide-react';
import { Card3D } from '../components/Card3D';
import { FloatingOrbs, DecorativeSymbol } from '../components/FloatingElements';

const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

const elementColors = {
  Wood: 'from-green-500/20 to-emerald-500/10',
  Fire: 'from-red-500/20 to-orange-500/10',
  Earth: 'from-yellow-500/20 to-amber-500/10',
  Metal: 'from-gray-400/20 to-slate-400/10',
  Water: 'from-blue-500/20 to-cyan-500/10',
};

const animalEmojis: Record<string, string> = {
  Rat: '鼠', Ox: '牛', Tiger: '虎', Rabbit: '兔',
  Dragon: '龍', Snake: '蛇', Horse: '馬', Goat: '羊',
  Monkey: '猴', Rooster: '雞', Dog: '狗', Pig: '豬',
};

export function BaZi() {
  const { user, canUseReading, incrementReading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    year: '',
    month: '',
    day: '',
    hour: '',
  });
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/login');
      return;
    }

    if (!canUseReading('bazi')) {
      return;
    }
    
    // Mock calculation
    const yearIndex = parseInt(formData.year) % 12;
    const element1 = elements[Math.floor(Math.random() * elements.length)];
    const element2 = elements[Math.floor(Math.random() * elements.length)];
    
    setResult({
      animal: animals[yearIndex],
      element: element1,
      pillars: [
        { name: 'Year Pillar', heavenly: `${element1} Yang`, earthly: animals[yearIndex] },
        { name: 'Month Pillar', heavenly: `${element2} Yin`, earthly: animals[(yearIndex + 3) % 12] },
        { name: 'Day Pillar', heavenly: `${elements[(yearIndex + 2) % 5]} Yang`, earthly: animals[(yearIndex + 7) % 12] },
        { name: 'Hour Pillar', heavenly: `${elements[(yearIndex + 4) % 5]} Yin`, earthly: animals[(yearIndex + 9) % 12] },
      ],
      characteristics: [
        'Strong leadership qualities and natural charisma',
        'Deep affinity with creative and artistic pursuits',
        'Favorable energy for relationships in the coming season',
        'Career advancement strongly indicated in Metal years',
        'Health and vitality peak during spring months',
      ],
    });

    incrementReading('bazi');
  };

  const canAccess = user ? canUseReading('bazi') : true;

  return (
    <div className="relative min-h-screen">
      <FloatingOrbs />
      
      <Layout showBackButton title="BaZi Reading">
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Floating decorative elements */}
          <div className="absolute -top-10 -left-10 pointer-events-none">
            <DecorativeSymbol symbol="八" size="md" animation="float" />
          </div>
          <div className="absolute top-20 -right-10 pointer-events-none">
            <DecorativeSymbol symbol="字" size="md" animation="rotate" />
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block gradient-border p-4 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-4xl">八字</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl mb-6 tracking-wider text-gradient" style={{ fontWeight: 300 }}>
              Four Pillars of Destiny
            </h2>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <Sparkles className="w-5 h-5 text-accent" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-accent/50 to-transparent" />
              <Star className="w-4 h-4 text-accent" />
            </div>
            
            <p className="text-lg text-muted-foreground tracking-wide leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              Enter your birth details to reveal the cosmic forces that shape your life path
            </p>
          </motion.div>

          {/* Usage warning */}
          {user && !canAccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <div className="glass-effect p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: 3 }}
                  >
                    <AlertCircle className="w-6 h-6 text-accent shrink-0" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-xl mb-3 tracking-wide">Reading Limit Reached</h4>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                      You've used all your BaZi readings for this month. Upgrade to <span className="text-accent font-medium">Premium</span> or <span className="text-accent font-medium">Ultimate</span> for more readings.
                    </p>
                    <Link to="/subscription">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-3d">
                          <Crown className="w-4 h-4" />
                          Upgrade Now
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Input Form */}
          {!result ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Card3D>
                <div className="glass-effect p-10 shadow-3d">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { label: 'Year of Birth', key: 'year', placeholder: 'e.g., 1990', type: 'number' },
                        { label: 'Month', key: 'month', placeholder: 'Enter 1-12', type: 'number', min: 1, max: 12 },
                        { label: 'Day', key: 'day', placeholder: 'Enter 1-31', type: 'number', min: 1, max: 31 },
                        { label: 'Hour (0-23)', key: 'hour', placeholder: 'Enter 0-23', type: 'number', min: 0, max: 23 },
                      ].map((field, index) => (
                        <motion.div
                          key={field.key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="space-y-3"
                        >
                          <Label className="text-base tracking-wide">{field.label}</Label>
                          <Input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.key as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                            required
                            disabled={!canAccess}
                            min={field.min}
                            max={field.max}
                            className="glass-effect border-accent/20 focus:border-accent transition-all h-12 text-base"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={!canAccess}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg tracking-wide shadow-3d hover:shadow-3d-hover transition-all duration-300 disabled:opacity-50"
                      >
                        Calculate Destiny
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </Card3D>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              {/* Main Result with 3D effect */}
              <Card3D intensity={8}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className={`glass-effect p-12 text-center shadow-3d bg-gradient-to-br ${elementColors[result.element as keyof typeof elementColors]}`}
                >
                  <motion.div 
                    className="inline-block gradient-border p-6 mb-6"
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  >
                    <span className="text-6xl">{animalEmojis[result.animal]}</span>
                  </motion.div>
                  
                  <h3 className="text-4xl mb-3 tracking-wider">
                    {result.element} {result.animal}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground tracking-[0.3em]">
                    <div className="h-px w-8 bg-accent/30" />
                    <span>YOUR DESTINY ANIMAL</span>
                    <div className="h-px w-8 bg-accent/30" />
                  </div>
                </motion.div>
              </Card3D>

              {/* Four Pillars */}
              <div>
                <motion.h3 
                  className="text-3xl mb-8 text-center tracking-wider"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  The Four Pillars
                </motion.h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {result.pillars.map((pillar: any, index: number) => (
                    <motion.div
                      key={pillar.name}
                      initial={{ opacity: 0, y: 30, rotateX: -30 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        delay: index * 0.15,
                        type: 'spring',
                        stiffness: 200
                      }}
                    >
                      <Card3D intensity={10}>
                        <div className="glass-effect p-6 text-center h-full shadow-3d hover:shadow-3d-hover transition-all duration-300">
                          <div className="text-xs text-accent mb-4 tracking-[0.3em] uppercase">
                            {pillar.name}
                          </div>
                          <div className="space-y-3">
                            <div className="text-base font-medium">{pillar.heavenly}</div>
                            <div className="flex items-center justify-center">
                              <motion.div 
                                className="h-px w-10 bg-gradient-to-r from-transparent via-accent to-transparent"
                                animate={{ scaleX: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </div>
                            <div className="text-base">{pillar.earthly}</div>
                          </div>
                        </div>
                      </Card3D>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <Card3D>
                <div className="glass-effect p-10 shadow-3d">
                  <h3 className="text-3xl mb-8 tracking-wider flex items-center justify-center gap-3">
                    <Sparkles className="w-6 h-6 text-accent" />
                    Life Path Insights
                    <Sparkles className="w-6 h-6 text-accent" />
                  </h3>
                  
                  <div className="space-y-6">
                    {result.characteristics.map((char: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <motion.div 
                          className="w-2 h-2 bg-accent mt-2.5 shrink-0"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors" style={{ fontWeight: 300 }}>
                          {char}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card3D>

              {/* Action Button */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => setResult(null)}
                  variant="outline"
                  className="w-full glass-effect border-2 border-accent/30 hover:border-accent hover:bg-accent/5 py-6 text-lg tracking-wide transition-all duration-300"
                >
                  Calculate Another Reading
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </Layout>
    </div>
  );
}