import { useState, useRef } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { motion } from 'motion/react';
import { Upload, Camera, X } from 'lucide-react';
import { FloatingOrbs, DecorativeSymbol } from '../components/FloatingElements';

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
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
    setUploadedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const removeImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  return (
    <Layout showBackButton title="Face Reading">
      <div className="max-w-3xl mx-auto relative">
        {/* Floating decorative elements */}
        <div className="absolute -top-10 -left-10 pointer-events-none">
          <DecorativeSymbol symbol="面" size="md" animation="float" />
        </div>
        <div className="absolute top-20 -right-10 pointer-events-none">
          <DecorativeSymbol symbol="相" size="md" animation="rotate" />
        </div>

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
                {/* Image preview */}
                {uploadedImage ? (
                  <div className="mb-6 relative">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded face" 
                      className="w-full max-w-sm mx-auto rounded border border-border"
                    />
                    <button
                      onClick={removeImage}
                      className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/10 transition-colors"
                      aria-label="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="mb-6 flex justify-center gap-4">
                    <div className="p-4 border border-border">
                      <Camera className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="p-4 border border-border">
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl mb-3 tracking-wider text-[#2c2c2c]">
                  {uploadedImage ? 'Photo Ready' : 'Upload Your Photo'}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                  {uploadedImage 
                    ? 'Click "Analyze Face" to begin the reading' 
                    : 'Take a photo or upload from your device'}
                </p>
                
                {/* Hidden file inputs */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="user"
                  onChange={handleCameraCapture}
                  className="hidden"
                />
                
                {uploadedImage ? (
                  <Button
                    onClick={handleAnalyze}
                    disabled={analyzing}
                    className="w-full bg-primary hover:bg-accent transition-colors disabled:opacity-50"
                  >
                    {analyzing ? 'Analyzing Features...' : 'Analyze Face'}
                  </Button>
                ) : (
                  <div className="flex gap-3">
                    <Button
                      onClick={() => cameraInputRef.current?.click()}
                      variant="outline"
                      className="flex-1 border-border hover:bg-accent/5"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Take Photo
                    </Button>
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      variant="outline"
                      className="flex-1 border-border hover:bg-accent/5"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                )}
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
            <Card className="p-8 border-border">
              <h3 className="text-xl mb-6 tracking-wider text-[#2c2c2c]">The Five Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {faceFeatures.slice(0, 6).map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-sm mb-2 tracking-wide text-[#2c2c2c]">{feature.name}</div>
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
              <h3 className="text-2xl mb-4 tracking-wider text-[#2c2c2c]">Overall Assessment</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                {result.overall}
              </p>
            </Card>

            {/* Personality Traits */}
            <Card className="p-8 border-border">
              <h3 className="text-xl mb-6 tracking-wider text-[#2c2c2c]">Character Traits</h3>
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
                          <h4 className="mb-3 tracking-wide text-[#2c2c2c]">{feature.name}</h4>
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