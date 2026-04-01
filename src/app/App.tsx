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
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Register service worker (only in web)
    if (!Capacitor.isNativePlatform()) {
      registerServiceWorker();
    }
    
    // Mark app as ready after a short delay
    const timer = setTimeout(() => {
      setAppReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = async () => {
    setShowSplash(false);
    
    // Hide Capacitor splash screen (iOS/Android)
    if (Capacitor.isNativePlatform()) {
      try {
        await CapacitorSplash.hide({ fadeOutDuration: 300 });
      } catch (error) {
        console.log('Native splash screen not available');
      }
    }
  };

  return (
    <>
      {/* Custom splash screen for web and native */}
      {showSplash && appReady && (
        <CustomSplashScreen 
          onComplete={handleSplashComplete}
          duration={2000}
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