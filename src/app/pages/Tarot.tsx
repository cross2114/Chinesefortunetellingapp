import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { motion } from 'motion/react';

const tarotCards = [
  { name: 'The Fool', number: 0, meaning: 'New beginnings, innocence, spontaneity', guidance: 'Embrace the unknown with an open heart. A journey is beginning.' },
  { name: 'The Magician', number: 1, meaning: 'Manifestation, resourcefulness, power', guidance: 'You have all the tools needed. Channel your will and create.' },
  { name: 'The High Priestess', number: 2, meaning: 'Intuition, sacred knowledge, divine feminine', guidance: 'Listen to your inner voice. Trust your intuition.' },
  { name: 'The Empress', number: 3, meaning: 'Femininity, beauty, nature, abundance', guidance: 'Nurture what you wish to grow. Abundance flows naturally.' },
  { name: 'The Emperor', number: 4, meaning: 'Authority, structure, control, fatherhood', guidance: 'Establish order and take command of your domain.' },
  { name: 'The Lovers', number: 6, meaning: 'Love, harmony, relationships, values alignment', guidance: 'Important choices regarding relationships await you.' },
  { name: 'The Chariot', number: 7, meaning: 'Control, willpower, success, determination', guidance: 'Victory comes through focused determination and will.' },
  { name: 'Strength', number: 8, meaning: 'Courage, persuasion, influence, compassion', guidance: 'True strength lies in gentle patience and self-control.' },
  { name: 'The Hermit', number: 9, meaning: 'Soul-searching, introspection, inner guidance', guidance: 'Withdraw and seek wisdom within. Enlightenment awaits.' },
  { name: 'Wheel of Fortune', number: 10, meaning: 'Change, cycles, inevitable fate', guidance: 'The wheel turns. Embrace change and flow with destiny.' },
  { name: 'Justice', number: 11, meaning: 'Justice, fairness, truth, cause and effect', guidance: 'Truth will prevail. Balance is being restored.' },
  { name: 'The Hanged Man', number: 12, meaning: 'Pause, surrender, letting go', guidance: 'Release control and see from a new perspective.' },
];

const spreads = [
  { id: 'single', name: 'Single Card', description: 'Quick insight into your situation', cards: 1 },
  { id: 'three', name: 'Three Card Spread', description: 'Past, Present, Future', cards: 3 },
  { id: 'celtic', name: 'Celtic Cross', description: 'Comprehensive life reading', cards: 10 },
];

export function Tarot() {
  const [selectedSpread, setSelectedSpread] = useState<string | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [drawnCards, setDrawnCards] = useState<any[]>([]);

  const handleDrawCards = () => {
    const spread = spreads.find(s => s.id === selectedSpread);
    if (!spread) return;

    setDrawing(true);

    setTimeout(() => {
      const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
      const cards = shuffled.slice(0, spread.cards).map(card => ({
        ...card,
        reversed: Math.random() > 0.5,
      }));
      
      setDrawnCards(cards);
      setDrawing(false);
    }, 2000);
  };

  const handleReset = () => {
    setSelectedSpread(null);
    setDrawnCards([]);
  };

  const getPositionName = (index: number) => {
    if (selectedSpread === 'three') {
      return ['Past', 'Present', 'Future'][index];
    }
    return `Card ${index + 1}`;
  };

  return (
    <Layout showBackButton title="Tarot Reading">
      <div className="max-w-3xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block border border-border p-3 mb-6">
            <span className="text-2xl">塔羅</span>
          </div>
          <h2 className="text-3xl mb-4 tracking-wider" style={{ fontWeight: 300 }}>
            Tarot Divination
          </h2>
          <p className="text-muted-foreground tracking-wide leading-relaxed" style={{ fontWeight: 300 }}>
            Draw from the mystical deck to reveal hidden truths
          </p>
        </motion.div>

        {drawnCards.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Spread Selection */}
            <div>
              <h3 className="text-xl mb-6 text-center tracking-wider">Choose Your Spread</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {spreads.map((spread, index) => (
                  <motion.div
                    key={spread.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setSelectedSpread(spread.id)}
                      className={`w-full text-left border p-6 transition-all ${
                        selectedSpread === spread.id
                          ? 'border-accent bg-accent/5'
                          : 'border-border hover:border-accent/30 bg-card'
                      }`}
                    >
                      <h4 className="mb-2 tracking-wide">{spread.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3" style={{ fontWeight: 300 }}>
                        {spread.description}
                      </p>
                      <p className="text-xs text-muted-foreground tracking-wider">
                        {spread.cards} {spread.cards === 1 ? 'CARD' : 'CARDS'}
                      </p>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleDrawCards}
              disabled={!selectedSpread || drawing}
              className="w-full bg-primary hover:bg-accent transition-colors disabled:opacity-50"
            >
              {drawing ? 'Drawing Cards...' : 'Draw Cards'}
            </Button>

            {drawing && (
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
                  Shuffling the deck...
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
            {/* Cards Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {drawnCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="p-6 border-border h-full">
                    <div className="text-center mb-4">
                      <div className="text-xs text-muted-foreground mb-3 tracking-wider">
                        {getPositionName(index).toUpperCase()}
                      </div>
                      
                      <div className="inline-block border border-border p-6 mb-4 w-32 h-40 flex items-center justify-center">
                        <motion.div
                          animate={{ rotateZ: card.reversed ? 180 : 0 }}
                          className="text-center"
                        >
                          <div className="text-3xl mb-2">{card.number}</div>
                          <div className="text-xs tracking-wider">{card.name.toUpperCase()}</div>
                        </motion.div>
                      </div>
                      
                      <h4 className="mb-2 tracking-wide">
                        {card.name}
                        {card.reversed && <span className="text-xs text-muted-foreground ml-2">(Reversed)</span>}
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1 tracking-wider">MEANING</p>
                        <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
                          {card.meaning}
                        </p>
                      </div>
                      
                      <div className="border-t border-border pt-3">
                        <p className="text-xs text-muted-foreground mb-1 tracking-wider">GUIDANCE</p>
                        <p className="text-sm text-muted-foreground" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                          {card.guidance}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full border-border hover:bg-accent/5"
            >
              Draw Again
            </Button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
