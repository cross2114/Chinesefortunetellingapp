import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AuthProvider } from './context/AuthContext';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { registerServiceWorker } from './utils/registerServiceWorker';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Register service worker
    registerServiceWorker();
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <PWAInstallPrompt />
    </AuthProvider>
  );
}