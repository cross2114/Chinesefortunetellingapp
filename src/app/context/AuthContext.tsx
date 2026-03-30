import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  subscription: 'free' | 'premium' | 'ultimate';
  avatar?: string;
  joinedDate: string;
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
  updateSubscription: (plan: 'free' | 'premium' | 'ultimate') => void;
  incrementReading: (type: keyof User['readingsUsed']) => void;
  canUseReading: (type: keyof User['readingsUsed']) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const READING_LIMITS = {
  free: { bazi: 1, iching: 2, tarot: 2, face: 1 },
  premium: { bazi: 10, iching: 20, tarot: 20, face: 10 },
  ultimate: { bazi: Infinity, iching: Infinity, tarot: Infinity, face: Infinity },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage for existing user
    const savedUser = localStorage.getItem('mysticArtsUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      subscription: 'free',
      joinedDate: new Date().toISOString(),
      readingsUsed: { bazi: 0, iching: 0, tarot: 0, face: 0 },
    };
    
    setUser(mockUser);
    localStorage.setItem('mysticArtsUser', JSON.stringify(mockUser));
  };

  const signup = async (email: string, password: string, name: string) => {
    // Mock signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      subscription: 'free',
      joinedDate: new Date().toISOString(),
      readingsUsed: { bazi: 0, iching: 0, tarot: 0, face: 0 },
    };
    
    setUser(mockUser);
    localStorage.setItem('mysticArtsUser', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mysticArtsUser');
  };

  const updateSubscription = (plan: 'free' | 'premium' | 'ultimate') => {
    if (user) {
      const updatedUser = { ...user, subscription: plan };
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
    const limit = READING_LIMITS[user.subscription][type];
    return user.readingsUsed[type] < limit;
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, updateSubscription, incrementReading, canUseReading }}
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
