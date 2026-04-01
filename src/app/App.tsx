import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AuthProvider } from './context/AuthContext';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { registerServiceWorker } from './utils/registerServiceWorker';
import { useEffect } from 'react';
import { SplashScreen } from '@capacitor/splash-screen';

export default function App() {
  useEffect(() => {
    // Register service worker
    registerServiceWorker();
    
    // Hide splash screen when React app is ready
    const hideSplash = async () => {
      try {
        await SplashScreen.hide();
      } catch (error) {
        // Splash screen plugin not available (e.g., in web browser)
        console.log('Splash screen not available');
      }
    };
    
    hideSplash();
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <PWAInstallPrompt />
    </AuthProvider>
  );
}