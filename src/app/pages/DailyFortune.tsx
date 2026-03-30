import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { Sun, Moon, Star, Heart, Briefcase, Coins, Users } from 'lucide-react';

const fortunes = {
  overall: [
    'Today brings harmony between action and rest. Follow your intuition.',
    'The stars align favorably for new beginnings. Trust the process.',
    'Balance is key today. Neither force nor yield completely.',
    'A day of quiet contemplation brings unexpected insights.',
    'Energy flows strongly today. Channel it into creative pursuits.',
  ],
  love: [
    'Open your heart to unexpected connections.',
    'Communication strengthens existing bonds.',
    'Patience in matters of the heart brings rewards.',
    'Romance blooms in familiar places.',
    'Honesty creates deeper intimacy.',
  ],
  career: [
    'Leadership opportunities present themselves today.',
    'Collaboration yields better results than solo efforts.',
    'A creative solution solves a persistent problem.',
    'Recognition for past efforts is coming.',
    'Stay focused on long-term goals.',
  ],
  wealth: [
    'Conservative approach to finances is wise today.',
    'Unexpected opportunities for gain may appear.',
    'Generosity creates positive energy flow.',
    'Review investments with a careful eye.',
    'Value experiences over material possessions.',
  ],
  health: [
    'Balance activity with adequate rest.',
    'Mind-body connection is especially strong today.',
    'Fresh air and nature restore vitality.',
    'Listen to your body\'s subtle signals.',
    'Moderate approach to all things brings wellness.',
  ],
};

const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
const colors = ['Jade Green', 'Cinnabar Red', 'Earth Brown', 'Silver White', 'Ink Black'];

export function DailyFortune() {
  const [fortune, setFortune] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate fortune
    setTimeout(() => {
      const today = new Date();
      const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
      
      const luckyNumber = (dayOfYear % 9) + 1;
      const elementIndex = dayOfYear % 5;
      
      setFortune({
        date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        overall: fortunes.overall[dayOfYear % fortunes.overall.length],
        love: fortunes.love[dayOfYear % fortunes.love.length],
        career: fortunes.career[dayOfYear % fortunes.career.length],
        wealth: fortunes.wealth[dayOfYear % fortunes.wealth.length],
        health: fortunes.health[dayOfYear % fortunes.health.length],
        luckyNumber,
        element: elements[elementIndex],
        color: colors[elementIndex],
        rating: 3 + (dayOfYear % 3), // 3-5 stars
      });
      setLoading(false);
    }, 1000);
  }, []);

  const aspects = [
    { id: 'love', name: 'Love', icon: Heart, value: fortune?.love },
    { id: 'career', name: 'Career', icon: Briefcase, value: fortune?.career },
    { id: 'wealth', name: 'Wealth', icon: Coins, value: fortune?.wealth },
    { id: 'health', name: 'Health', icon: Users, value: fortune?.health },
  ];

  return (
    <Layout showBackButton title="Daily Fortune">
      <div className="max-w-3xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block border border-border p-3 mb-6">
            <span className="text-2xl">運勢</span>
          </div>
          <h2 className="text-3xl mb-4 tracking-wider" style={{ fontWeight: 300 }}>
            Daily Cosmic Guidance
          </h2>
          <p className="text-muted-foreground tracking-wide leading-relaxed" style={{ fontWeight: 300 }}>
            Your fortune for today as the universe aligns
          </p>
        </motion.div>

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 border border-accent border-t-transparent rounded-full" />
            </motion.div>
            <p className="text-sm text-muted-foreground tracking-wider">
              Consulting the stars...
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Date & Overall */}
            <Card className="p-8 text-center border-border">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sun className="w-5 h-5 text-accent" />
                <Moon className="w-4 h-4 text-muted-foreground" />
                <Star className="w-5 h-5 text-accent" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-6 tracking-wider">
                {fortune.date.toUpperCase()}
              </p>
              
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < fortune.rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                "{fortune.overall}"
              </p>
            </Card>

            {/* Lucky Elements */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 text-center border-border">
                <p className="text-xs text-muted-foreground mb-2 tracking-wider">LUCKY NUMBER</p>
                <p className="text-3xl mb-1">{fortune.luckyNumber}</p>
              </Card>
              
              <Card className="p-6 text-center border-border">
                <p className="text-xs text-muted-foreground mb-2 tracking-wider">ELEMENT</p>
                <p className="text-xl mb-1" style={{ fontWeight: 300 }}>{fortune.element}</p>
              </Card>
              
              <Card className="p-6 text-center border-border">
                <p className="text-xs text-muted-foreground mb-2 tracking-wider">LUCKY COLOR</p>
                <p className="text-xl mb-1" style={{ fontWeight: 300 }}>{fortune.color}</p>
              </Card>
            </div>

            {/* Life Aspects */}
            <div>
              <h3 className="text-xl mb-6 text-center tracking-wider">Life Aspects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aspects.map((aspect, index) => {
                  const Icon = aspect.icon;
                  return (
                    <motion.div
                      key={aspect.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Card className="p-6 border-border h-full">
                        <div className="flex items-start gap-4">
                          <div className="p-3 border border-border shrink-0">
                            <Icon className="w-5 h-5 text-foreground/60" />
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="mb-3 tracking-wide">{aspect.name}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>
                              {aspect.value}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Wisdom Quote */}
            <Card className="p-8 text-center border-border bg-muted/30">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-12 bg-border" />
                <span className="text-xs tracking-[0.3em]">古語</span>
                <div className="h-px w-12 bg-border" />
              </div>
              <p className="text-base text-foreground/70 leading-relaxed" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                "Heaven's way is to benefit without harm.<br />The sage's way is to act without contention."
              </p>
              <p className="text-xs text-muted-foreground mt-4 tracking-wider">
                — Dao De Jing
              </p>
            </Card>

            <div className="text-center pt-4">
              <p className="text-xs text-muted-foreground tracking-wider">
                Return tomorrow for new guidance
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
