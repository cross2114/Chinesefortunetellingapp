import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  subscription: 'free' | 'premium';
  avatar?: string;
  joinedDate: string;
  trialEndsAt?: string; // 试用结束时间
  subscriptionStartedAt?: string; // 订阅开始时间
  readingsUsed: {
    bazi: number;
    iching: number;
    tarot: number;
    face: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateSubscription: (plan: 'free' | 'premium') => void;
  incrementReading: (type: keyof User['readingsUsed']) => void;
  canUseReading: (type: keyof User['readingsUsed']) => boolean;
  isInTrial: () => boolean;
  getTrialDaysLeft: () => number;
  isPremiumActive: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const READING_LIMITS = {
  free: { bazi: 1, iching: 2, tarot: 2, face: 1 },
  premium: { bazi: Infinity, iching: Infinity, tarot: Infinity, face: Infinity },
};

const TRIAL_DAYS = 7;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage for existing user
    const savedUser = localStorage.getItem('mysticArtsUser');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      
      // Auto-upgrade to free if trial expired
      if (parsedUser.subscription === 'premium' && parsedUser.trialEndsAt) {
        const trialEnd = new Date(parsedUser.trialEndsAt);
        const now = new Date();
        if (now > trialEnd && !parsedUser.subscriptionStartedAt) {
          // Trial expired and no paid subscription
          const downgradedUser = { ...parsedUser, subscription: 'free' as const };
          setUser(downgradedUser);
          localStorage.setItem('mysticArtsUser', JSON.stringify(downgradedUser));
        }
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const now = new Date();
    const trialEnd = new Date(now.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      subscription: 'premium', // Start with trial
      joinedDate: now.toISOString(),
      trialEndsAt: trialEnd.toISOString(),
      readingsUsed: { bazi: 0, iching: 0, tarot: 0, face: 0 },
    };
    
    setUser(mockUser);
    localStorage.setItem('mysticArtsUser', JSON.stringify(mockUser));
  };

  const signup = async (email: string, password: string, name: string) => {
    // Mock signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const now = new Date();
    const trialEnd = new Date(now.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      subscription: 'premium', // Start with trial
      joinedDate: now.toISOString(),
      trialEndsAt: trialEnd.toISOString(),
      readingsUsed: { bazi: 0, iching: 0, tarot: 0, face: 0 },
    };
    
    setUser(mockUser);
    localStorage.setItem('mysticArtsUser', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mysticArtsUser');
  };

  const updateSubscription = (plan: 'free' | 'premium') => {
    if (user) {
      const now = new Date();
      const updatedUser = { 
        ...user, 
        subscription: plan,
        subscriptionStartedAt: plan === 'premium' ? now.toISOString() : undefined,
        trialEndsAt: undefined, // Clear trial when subscribing
      };
      setUser(updatedUser);
      localStorage.setItem('mysticArtsUser', JSON.stringify(updatedUser));
    }
  };

  const incrementReading = (type: keyof User['readingsUsed']) => {
    if (user) {
      const updatedUser = {
        ...user,
        readingsUsed: {
          ...user.readingsUsed,
          [type]: user.readingsUsed[type] + 1,
        },
      };
      setUser(updatedUser);
      localStorage.setItem('mysticArtsUser', JSON.stringify(updatedUser));
    }
  };

  const canUseReading = (type: keyof User['readingsUsed']) => {
    if (!user) return false;
    
    // Check if premium is active (trial or paid)
    if (isPremiumActive()) {
      return true;
    }
    
    // Free tier limits
    const limit = READING_LIMITS.free[type];
    return user.readingsUsed[type] < limit;
  };

  const isInTrial = () => {
    if (!user || !user.trialEndsAt || user.subscriptionStartedAt) return false;
    const trialEnd = new Date(user.trialEndsAt);
    const now = new Date();
    return now < trialEnd;
  };

  const getTrialDaysLeft = () => {
    if (!user || !user.trialEndsAt) return 0;
    const trialEnd = new Date(user.trialEndsAt);
    const now = new Date();
    const diffTime = trialEnd.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const isPremiumActive = () => {
    if (!user) return false;
    if (user.subscription === 'free') return false;
    
    // If has paid subscription
    if (user.subscriptionStartedAt) return true;
    
    // If in trial period
    if (user.trialEndsAt) {
      const trialEnd = new Date(user.trialEndsAt);
      const now = new Date();
      return now < trialEnd;
    }
    
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        login, 
        signup, 
        logout, 
        updateSubscription, 
        incrementReading, 
        canUseReading,
        isInTrial,
        getTrialDaysLeft,
        isPremiumActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}