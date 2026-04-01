import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AuthProvider } from './context/AuthContext';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { SplashScreen as CustomSplashScreen } from './components/SplashScreen';
import { registerServiceWorker } from './utils/registerServiceWorker';
import { useEffect, useState } from 'react';
import { SplashScreen as CapacitorSplash } from '@capacitor/splash-screen';
import { Capacitor } from '@capacitor/core';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Register service worker (only in web)
    if (!Capacitor.isNativePlatform()) {
      registerServiceWorker();
    }
    
    // Hide native splash screen immediately and show our custom one
    if (Capacitor.isNativePlatform()) {
      CapacitorSplash.hide({ fadeOutDuration: 0 }).catch(err => {
        console.log('Failed to hide native splash:', err);
      });
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {/* Custom splash screen - shown immediately */}
      {showSplash && (
        <CustomSplashScreen 
          onComplete={handleSplashComplete}
          duration={3000}
        />
      )}
      
      {/* Main app */}
      <AuthProvider>
        <RouterProvider router={router} />
        <PWAInstallPrompt />
      </AuthProvider>
    </>
  );
}