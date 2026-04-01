import { CapacitorConfig } from '@capacitor/cli';

/**
 * Capacitor Configuration for Mystic Arts (Fatum)
 * Bundle ID: com.mininxt.fatum
 */

const config: CapacitorConfig = {
  appId: 'com.mininxt.fatum',
  appName: 'Mystic Arts',
  webDir: 'dist',
  
  // Server configuration (optional - for development)
  server: {
    // Uncomment to use your Vercel URL during development
    // url: 'https://your-app.vercel.app',
    // cleartext: true
  },

  // iOS-specific configuration
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0f0a08', // Dark background matching app theme
    scrollEnabled: true,
    
    // Status bar configuration
    limitsNavigationsToAppBoundDomains: true,
    
    // Privacy permissions
    preferences: {
      'NSCameraUsageDescription': 'We need camera access to analyze your facial features for fortune reading',
      'NSPhotoLibraryUsageDescription': 'We need photo library access to let you upload photos for face reading',
      'NSPhotoLibraryAddUsageDescription': 'We need access to save photos for your face reading records',
    },
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
      launchShowDuration: 0, // 立即隐藏原生闪屏
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