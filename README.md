# 🔮 Mystic Arts - Ancient Chinese Divination

![Mystic Arts Banner](https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=400&fit=crop)

A modern web application bringing ancient Chinese divination wisdom to the world. Experience BaZi (生辰八字), I Ching (周易卜卦), Tarot Reading (塔罗占卜), Face Reading (面相分析), and Daily Fortune (每日运势).

## ✨ Features

### 🎴 Five Divination Systems

- **BaZi (八字)** - Four Pillars of Destiny
  - Calculate your birth chart based on year, month, day, and hour
  - Discover your elemental nature and zodiac animal
  - Understand your life path and characteristics

- **I Ching (周易)** - Book of Changes
  - Consult the ancient oracle with your questions
  - Receive hexagram readings with interpretations
  - Traditional coin-casting simulation

- **Tarot Reading (塔罗)** - Mystical Cards
  - Multiple spread options (Single, Three-Card, Celtic Cross)
  - Beautiful card illustrations
  - Detailed interpretations for each position

- **Face Reading (面相)** - Physiognomy Analysis
  - Upload your photo for AI-powered analysis
  - Traditional Chinese face reading principles
  - Personality and fortune insights

- **Daily Fortune (每日运势)** - Daily Guidance
  - Personalized daily readings
  - Lucky numbers, colors, and directions
  - Life aspect forecasts (Love, Career, Health, Wealth)

### 🎨 Design Highlights

- **Dunhuang Aesthetic** - Inspired by ancient Chinese murals
- **Dark Theme** - Rich ochre reds, stone blues, and earth yellows
- **Responsive Design** - Perfect on both mobile and desktop
- **PWA Support** - Install as a native app on any device
- **Smooth Animations** - Elegant transitions and 3D effects
- **Glassmorphism UI** - Modern glass-effect cards

### 🔐 User System

- **Free Tier** - Limited readings per month
- **Premium Plans** - Unlimited access to all features
- **Reading History** - Track your consultations
- **Profile Management** - Personalized experience

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Animations**: Motion (Framer Motion)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond, Noto Serif SC

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/mystic-arts.git
cd mystic-arts

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev

# Open browser at http://localhost:5173
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
mystic-arts/
├── public/
│   ├── icons/              # PWA icons (72x72 to 512x512)
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # UI primitives (button, input, etc.)
│   │   │   ├── Layout.tsx
│   │   │   ├── Card3D.tsx
│   │   │   └── ...
│   │   ├── pages/         # Route pages
│   │   │   ├── Home.tsx
│   │   │   ├── BaZi.tsx
│   │   │   ├── IChing.tsx
│   │   │   ├── Tarot.tsx
│   │   │   ├── FaceReading.tsx
│   │   │   └── ...
│   │   ├── context/       # React Context
│   │   │   └── AuthContext.tsx
│   │   ├── utils/         # Utility functions
│   │   ├── routes.ts      # Route configuration
│   │   └── App.tsx        # Main app component
│   ├── styles/
│   │   ├── fonts.css      # Font imports
│   │   ├── tailwind.css   # Tailwind directives
│   │   ├── theme.css      # Design tokens & utilities
│   │   └── index.css      # Entry CSS
│   └── main.tsx           # App entry point
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Color Palette (Dunhuang Inspired)

```css
/* Primary Colors */
--ochre-red: #B8543E
--stone-blue: #4A6FA5
--earth-yellow: #D4A76A
--dark-bg: #0f0a08

/* Element Colors */
--wood: emerald-500
--fire: red-500
--earth: yellow-500
--metal: gray-400
--water: blue-500
```

### Typography

- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: System fonts with Chinese fallback (Noto Serif SC)
- **Tracking**: Wide letter-spacing for mystical feel

### Animations

- **3D Card Effects**: `card-3d` class with hover transforms
- **Float Animation**: Subtle floating for decorative elements
- **Glow Effects**: Animated drop-shadows for mystical ambiance
- **Shimmer**: Loading and highlight effects

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/mystic-arts)

1. Push to GitHub
2. Import project in Vercel
3. Automatic deployments on every push

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 📱 PWA Features

- ✅ Offline support
- ✅ Install to home screen
- ✅ Push notifications ready
- ✅ App icons for all devices
- ✅ Dark theme for status bar
- ✅ Safe area support (iPhone notch)

## 🔮 Future Enhancements

- [ ] Supabase backend integration
- [ ] User authentication (email/social)
- [ ] Payment integration for premium plans
- [ ] AI-powered face reading
- [ ] Consultation history and favorites
- [ ] Social sharing features
- [ ] Multi-language support
- [ ] Dark/light theme toggle
- [ ] Zodiac compatibility checker
- [ ] Annual fortune reports

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dunhuang murals for design inspiration
- Ancient Chinese divination wisdom
- Modern web technologies
- Open source community

## 📞 Contact

- **Project Link**: https://github.com/YOUR_USERNAME/mystic-arts
- **Live Demo**: https://mystic-arts.vercel.app

---

**Made with ✨ by leveraging ancient wisdom and modern technology**

*問天知命 · 道法自然*
