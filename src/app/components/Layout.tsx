import { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, User, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';

interface LayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
  title?: string;
}

export function Layout({ children, showBackButton = false, title }: LayoutProps) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0a08', color: '#ffffff' }}>
      {/* Header */}
      <header className="border-b border-[#D4A76A]/20 sticky top-0 z-10" style={{ backgroundColor: 'rgba(26, 21, 16, 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          {showBackButton ? (
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider">BACK</span>
            </Link>
          ) : (
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-foreground/20 flex items-center justify-center">
                  <span className="text-xs">玄</span>
                </div>
                <span className="tracking-[0.2em] text-sm">MYSTIC ARTS</span>
              </div>
            </Link>
          )}
          
          {title && (
            <h1 className="absolute left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] uppercase">
              {title}
            </h1>
          )}
          
          {/* User Menu */}
          <div className="flex items-center gap-3">
            {user ? (
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs tracking-wider">{user.name}</span>
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="sm" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs tracking-wider">SIGN IN</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs tracking-[0.3em]">道法自然</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <p className="text-xs tracking-wider opacity-60">
            Ancient wisdom for modern seekers
          </p>
        </div>
      </footer>
    </div>
  );
}