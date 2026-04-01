import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './styles/index.css'
import { Capacitor } from '@capacitor/core';

// Register Service Worker for PWA functionality (only in web browser, not native app)
if ('serviceWorker' in navigator && !Capacitor.isNativePlatform()) {
  window.addEventListener('load', () => {
    import('./app/utils/registerServiceWorker').then(({ registerServiceWorker }) => {
      registerServiceWorker();
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)