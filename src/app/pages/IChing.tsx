import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Textarea } from '../components/ui/textarea';
import { motion } from 'motion/react';

const hexagrams = [
  { number: 1, name: 'The Creative', chinese: '乾', meaning: 'Heaven', guidance: 'Great success through perseverance. The Creative power is at work.' },
  { number: 2, name: 'The Receptive', chinese: '坤', meaning: 'Earth', guidance: 'Supreme success through devotion and yielding to the greater flow.' },
  { number: 11, name: 'Peace', chinese: '泰', meaning: 'Harmony', guidance: 'Heaven and Earth are in communion. A time of prosperity and peace.' },
  { number: 29, name: 'The Abysmal', chinese: '坎', meaning: 'Water', guidance: 'Danger surrounds you. Maintain sincerity and you will succeed.' },
  { number: 30, name: 'The Clinging', chinese: '離', meaning: 'Fire', guidance: 'Clarity and awareness illuminate the path. Hold to what is right.' },
  { number: 63, name: 'After Completion', chinese: '既濟', meaning: 'Fulfillment', guidance: 'Success achieved, but stay vigilant. The cycle continues.' },
];

export function IChing() {
  const [question, setQuestion] = useState('');
  const [casting, setCasting] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCast = () => {
    if (!question.trim()) return;
    
    setCasting(true);
    
    // Simulate casting coins
    setTimeout(() => {
      const hexagram = hexagrams[Math.floor(Math.random() * hexagrams.length)];
      const lines = Array.from({ length: 6 }, () => Math.random() > 0.5);
      
      setResult({
        hexagram,
        lines,
        interpretation: 'The oracle speaks of transformation and patience. What appears as obstacles are opportunities for growth. Trust in the natural order of things.',
      });
      setCasting(false);
    }, 2000);
  };

  const handleReset = () => {
    setQuestion('');
    setResult(null);
  };

  return (
    <Layout showBackButton title="I Ching Oracle">
      <div className="max-w-2xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block border border-border p-3 mb-6">
            <span className="text-2xl">易經</span>
          </div>
          <h2 className="text-3xl mb-4 tracking-wider" style={{ fontWeight: 300 }}>
            The Book of Changes
          </h2>
          <p className="text-muted-foreground tracking-wide leading-relaxed" style={{ fontWeight: 300 }}>
            Ancient wisdom revealed through the interplay of yin and yang
          </p>
        </motion.div>

        {!result ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-8 border-border">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-3 tracking-wider">
                    ASK YOUR QUESTION
                  </label>
                  <Textarea
                    placeholder="What guidance do you seek from the oracle?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={4}
                    className="border-border bg-input-background resize-none"
                  />
                </div>

                <Button
                  onClick={handleCast}
                  disabled={!question.trim() || casting}
                  className="w-full bg-primary hover:bg-accent transition-colors disabled:opacity-50"
                >
                  {casting ? 'Casting the Hexagram...' : 'Consult the Oracle'}
                </Button>
              </div>
            </Card>

            {casting && (
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
                  The coins are falling...
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Hexagram */}
            <Card className="p-8 text-center border-border">
              <div className="mb-6">
                <div className="inline-block border border-border p-4 mb-4">
                  <span className="text-5xl">{result.hexagram.chinese}</span>
                </div>
                <h3 className="text-2xl mb-2 tracking-wider">
                  Hexagram {result.hexagram.number}
                </h3>
                <p className="text-xl mb-1" style={{ fontWeight: 300 }}>
                  {result.hexagram.name}
                </p>
                <p className="text-sm text-muted-foreground tracking-wider">
                  {result.hexagram.meaning.toUpperCase()}
                </p>
              </div>

              {/* Lines */}
              <div className="flex flex-col items-center gap-2 mb-6">
                {result.lines.map((solid: boolean, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    {solid ? (
                      <div className="w-24 h-1 bg-foreground" />
                    ) : (
                      <div className="flex gap-2">
                        <div className="w-11 h-1 bg-foreground" />
                        <div className="w-11 h-1 bg-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Judgment */}
            <Card className="p-8 border-border">
              <h3 className="text-xl mb-4 tracking-wider">The Judgment</h3>
              <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                {result.hexagram.guidance}
              </p>
              
              <div className="border-t border-border pt-6">
                <h4 className="text-sm mb-3 tracking-wider">INTERPRETATION</h4>
                <p className="text-muted-foreground leading-relaxed" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                  {result.interpretation}
                </p>
              </div>
            </Card>

            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full border-border hover:bg-accent/5"
            >
              Ask Another Question
            </Button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
