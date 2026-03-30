import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { motion } from 'motion/react';
import { Upload, Camera } from 'lucide-react';

const faceFeatures = [
  {
    name: 'Forehead',
    chinese: '額頭',
    traits: ['Intelligence', 'Early fortune', 'Wisdom'],
    reading: 'A broad and high forehead indicates intelligence and good fortune in youth.',
  },
  {
    name: 'Eyes',
    chinese: '眼睛',
    traits: ['Vitality', 'Wisdom', 'Character'],
    reading: 'Clear, bright eyes suggest honesty and strong life force energy.',
  },
  {
    name: 'Nose',
    chinese: '鼻子',
    traits: ['Wealth', 'Health', 'Determination'],
    reading: 'A well-proportioned nose indicates balanced fortune and good health.',
  },
  {
    name: 'Mouth',
    chinese: '嘴巴',
    traits: ['Communication', 'Relationships', 'Late fortune'],
    reading: 'The mouth reveals communication abilities and fortune in later years.',
  },
  {
    name: 'Ears',
    chinese: '耳朵',
    traits: ['Longevity', 'Wisdom', 'Family fortune'],
    reading: 'Well-formed ears suggest longevity and inherited wisdom.',
  },
  {
    name: 'Cheekbones',
    chinese: '顴骨',
    traits: ['Authority', 'Power', 'Social status'],
    reading: 'Prominent cheekbones indicate leadership qualities and social standing.',
  },
];

const personalityTraits = [
  'Natural leadership abilities',
  'Strong intuitive powers',
  'Excellent communication skills',
  'Balanced emotional nature',
  'Persistent and determined',
  'Compassionate and understanding',
];

export function FaceReading() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);

    // Simulate analysis
    setTimeout(() => {
      const selectedTraits = personalityTraits
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

      setResult({
        traits: selectedTraits,
        features: faceFeatures,
        overall: 'Your facial features reveal a harmonious balance of yin and yang energies. Strong character with a compassionate nature.',
      });
      setAnalyzing(false);
    }, 2500);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <Layout showBackButton title="Face Reading">
      <div className="max-w-3xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block border border-border p-3 mb-6">
            <span className="text-2xl">面相</span>
          </div>
          <h2 className="text-3xl mb-4 tracking-wider" style={{ fontWeight: 300 }}>
            Mian Xiang Analysis
          </h2>
          <p className="text-muted-foreground tracking-wide leading-relaxed" style={{ fontWeight: 300 }}>
            Ancient art of reading character through facial features
          </p>
        </motion.div>

        {!result ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-12 text-center border-border border-dashed">
              <div className="max-w-md mx-auto">
                <div className="mb-6 flex justify-center gap-4">
                  <div className="p-4 border border-border">
                    <Camera className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="p-4 border border-border">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl mb-3 tracking-wider">Upload Your Photo</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                  For demonstration purposes, we'll provide a general reading based on classical face reading principles
                </p>
                
                <Button
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  className="bg-primary hover:bg-accent transition-colors disabled:opacity-50"
                >
                  {analyzing ? 'Analyzing Features...' : 'Begin Analysis'}
                </Button>
              </div>
            </Card>

            {analyzing && (
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
                  Reading facial features...
                </p>
              </motion.div>
            )}

            {/* Educational Info */}
            <Card className="p-8 border-border bg-muted/30">
              <h3 className="text-xl mb-6 tracking-wider">The Five Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {faceFeatures.slice(0, 6).map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-sm mb-2 tracking-wide">{feature.name}</div>
                    <div className="text-xs text-muted-foreground mb-2">{feature.chinese}</div>
                    <div className="h-px w-12 bg-border mx-auto" />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Overall Reading */}
            <Card className="p-8 text-center border-border">
              <div className="inline-block border border-border p-4 mb-6">
                <span className="text-4xl">相</span>
              </div>
              <h3 className="text-2xl mb-4 tracking-wider">Overall Assessment</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                {result.overall}
              </p>
            </Card>

            {/* Personality Traits */}
            <Card className="p-8 border-border">
              <h3 className="text-xl mb-6 tracking-wider">Character Traits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.traits.map((trait: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 border border-border"
                  >
                    <div className="w-2 h-2 bg-accent shrink-0" />
                    <span className="text-muted-foreground">{trait}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Feature Details */}
            <div>
              <h3 className="text-xl mb-6 text-center tracking-wider">Feature Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.features.map((feature: any, index: number) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="p-6 border-border h-full">
                      <div className="flex items-start gap-4">
                        <div className="border border-border p-3 shrink-0">
                          <span className="text-sm">{feature.chinese}</span>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="mb-3 tracking-wide">{feature.name}</h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {feature.traits.map((trait: string) => (
                              <span
                                key={trait}
                                className="text-xs px-2 py-1 bg-muted text-muted-foreground tracking-wider"
                              >
                                {trait}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>
                            {feature.reading}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full border-border hover:bg-accent/5"
            >
              New Analysis
            </Button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
