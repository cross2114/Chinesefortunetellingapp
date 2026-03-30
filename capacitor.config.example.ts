import { CapacitorConfig } from '@capacitor/cli';

/**
 * Capacitor Configuration for Mystic Arts
 * 
 * Before using:
 * 1. Rename this file to capacitor.config.ts
 * 2. Replace 'com.yourcompany.mysticarts' with your actual Bundle ID
 * 3. Run: npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
 * 4. Run: npm run build
 * 5. Run: npx cap add ios (or android)
 * 6. Run: npx cap sync
 * 7. Run: npx cap open ios (or android)
 */

const config: CapacitorConfig = {
  appId: 'com.yourcompany.mysticarts', // IMPORTANT: Change this to your actual Bundle ID
  appName: 'Mystic Arts',
  webDir: 'dist',
  
  // Server configuration (optional - for development)
  server: {
    // Uncomment to use your Vercel URL during development
    // url: 'https://mystic-arts.vercel.app',
    // cleartext: true
  },

  // iOS-specific configuration
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0f0a08', // Dark background matching app theme
    scrollEnabled: true,
    
    // Status bar configuration
    // This ensures the status bar looks good on iOS
    limitsNavigationsToAppBoundDomains: true,
  },

  // Android-specific configuration
  android: {
    backgroundColor: '#0f0a08',
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false, // Set to true for debugging
  },

  // Plugins configuration
  plugins: {
    // Splash screen configuration
    SplashScreen: {
      launchShowDuration: 2000, // Show splash for 2 seconds
      launchAutoHide: true,
      backgroundColor: '#0f0a08',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#B8543E', // Ochre red color
      splashFullScreen: true,
      splashImmersive: true,
    },

    // Status bar configuration
    StatusBar: {
      style: 'dark', // Dark text/icons on status bar
      backgroundColor: '#0f0a08',
    },

    // Keyboard configuration
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true,
    },

    // Push notifications (if you implement them later)
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
