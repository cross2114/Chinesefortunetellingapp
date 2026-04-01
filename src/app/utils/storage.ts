/**
 * Safe storage utilities for web and native environments
 * Handles localStorage/sessionStorage with proper error handling
 */

import { Capacitor } from '@capacitor/core';

/**
 * Check if storage is available
 */
function isStorageAvailable(type: 'localStorage' | 'sessionStorage'): boolean {
  try {
    const storage = window[type];
    const test = '__storage_test__';
    storage.setItem(test, test);
    storage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Safe localStorage wrapper
 */
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && isStorageAvailable('localStorage')) {
        return localStorage.getItem(key);
      }
    } catch (error) {
      console.warn('localStorage.getItem failed:', error);
    }
    return null;
  },

  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window !== 'undefined' && isStorageAvailable('localStorage')) {
        localStorage.setItem(key, value);
        return true;
      }
    } catch (error) {
      console.warn('localStorage.setItem failed:', error);
    }
    return false;
  },

  removeItem: (key: string): boolean => {
    try {
      if (typeof window !== 'undefined' && isStorageAvailable('localStorage')) {
        localStorage.removeItem(key);
        return true;
      }
    } catch (error) {
      console.warn('localStorage.removeItem failed:', error);
    }
    return false;
  },
};

/**
 * Safe sessionStorage wrapper
 */
export const safeSessionStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && isStorageAvailable('sessionStorage')) {
        return sessionStorage.getItem(key);
      }
    } catch (error) {
      console.warn('sessionStorage.getItem failed:', error);
    }
    return null;
  },

  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window !== 'undefined' && isStorageAvailable('sessionStorage')) {
        sessionStorage.setItem(key, value);
        return true;
      }
    } catch (error) {
      console.warn('sessionStorage.setItem failed:', error);
    }
    return false;
  },

  removeItem: (key: string): boolean => {
    try {
      if (typeof window !== 'undefined' && isStorageAvailable('sessionStorage')) {
        sessionStorage.removeItem(key);
        return true;
      }
    } catch (error) {
      console.warn('sessionStorage.removeItem failed:', error);
    }
    return false;
  },
};

/**
 * Check if running in native app environment
 */
export function isNativeApp(): boolean {
  return Capacitor.isNativePlatform();
}

/**
 * Check if running in web browser
 */
export function isWebBrowser(): boolean {
  return !Capacitor.isNativePlatform();
}

/**
 * Get platform name
 */
export function getPlatform(): 'ios' | 'android' | 'web' {
  return Capacitor.getPlatform() as 'ios' | 'android' | 'web';
}
