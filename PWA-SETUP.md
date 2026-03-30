# PWA Setup Guide for Mystic Arts

## ✅ What Has Been Implemented

### 1. **Manifest File** (`/public/manifest.json`)
- App name: "Mystic Arts - Ancient Chinese Divination"
- Theme colors matching Dunhuang aesthetic
- Icon specifications for all device sizes
- Display mode: standalone (full-screen app experience)
- Orientation: portrait-primary

### 2. **Service Worker** (`/public/service-worker.js`)
- Offline caching strategy
- Runtime caching for visited pages
- Automatic cache updates
- Network-first for navigation, cache-first for assets

### 3. **Install Prompt** (`/src/app/components/PWAInstallPrompt.tsx`)
- Beautiful custom install banner
- Matches app's Dunhuang design aesthetic
- Smart timing (appears after 3 seconds)
- Respects user dismissal (won't show again for 7 days)
- Automatically hides if already installed

### 4. **Service Worker Registration** (`/src/app/utils/registerServiceWorker.ts`)
- Automatic registration on app load
- Update detection and notification
- Graceful fallback if service workers not supported

### 5. **Offline Page** (`/public/offline.html`)
- Styled to match app aesthetic
- Shown when user is offline
- Retry connection button

---

## 🚀 How to Test PWA Features

### Testing Locally

1. **Build the production version:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Open in Chrome:**
   - Go to `http://localhost:4173` (or your preview URL)
   - Open DevTools (F12)
   - Go to "Application" tab
   - Check "Service Workers" section
   - Check "Manifest" section

3. **Test Installation:**
   - Look for install button in Chrome address bar
   - Or wait for custom install prompt to appear
   - Click "Install" to add to home screen

4. **Test Offline Mode:**
   - In DevTools, go to "Network" tab
   - Check "Offline" box
   - Reload the page
   - App should still work with cached content

### Testing on Mobile

#### Android (Chrome):
1. Visit your deployed site
2. Chrome will show "Add to Home Screen" banner
3. Or use Chrome menu → "Install App"
4. Icon appears on home screen
5. Opens as standalone app

#### iOS (Safari):
1. Visit your deployed site
2. Tap Share button (square with arrow)
3. Scroll and tap "Add to Home Screen"
4. Edit name if desired, tap "Add"
5. Icon appears on home screen

---

## 📋 TODO: Before Going Live

### 1. **Create App Icons**
You need to create PNG icons in these sizes and place them in `/public/icons/`:

- [ ] icon-72x72.png
- [ ] icon-96x96.png
- [ ] icon-128x128.png
- [ ] icon-144x144.png
- [ ] icon-152x152.png
- [ ] icon-192x192.png
- [ ] icon-384x384.png
- [ ] icon-512x512.png

**Design Guidelines:**
- Use the hexagon + "玄" character design
- Dark background (#0f0a08)
- Gold/bronze colors (#D4A76A)
- 10% padding for safe zone
- High contrast for visibility

**Tools to Generate:**
- https://www.pwabuilder.com/imageGenerator
- https://realfavicongenerator.net/

A template SVG is provided at `/public/icons/icon.svg` - convert this to PNG at different sizes.

### 2. **Create App Screenshots**
Take screenshots of your app for app stores:

- [ ] Home screen (1080x1920)
- [ ] Service pages (optional)
- [ ] Feature highlights (optional)

Place in `/public/screenshots/` and update manifest.json.

### 3. **Update Manifest Details**
Edit `/public/manifest.json` if needed:
- [ ] Verify app name and description
- [ ] Update start_url if deploying to subdirectory
- [ ] Add more screenshots
- [ ] Customize theme colors

### 4. **Add Meta Tags to HTML**
The HTML head needs these tags (usually in index.html):

```html
<!-- PWA Meta Tags -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#D4A76A">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Mystic Arts">

<!-- Icons -->
<link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png">
<link rel="apple-touch-icon" href="/icons/icon-192x192.png">
```

### 5. **Configure Build Process**
Ensure your build process copies public folder:
- [ ] Verify manifest.json is copied to dist/
- [ ] Verify service-worker.js is copied to dist/
- [ ] Verify icons folder is copied to dist/icons/

### 6. **Deploy with HTTPS**
PWAs require HTTPS (except localhost):
- [ ] Deploy to hosting with SSL certificate
- [ ] Test on actual HTTPS URL
- [ ] Verify service worker registers on live site

---

## 🌐 Deployment Checklist

### Required for PWA to Work:

- [x] manifest.json created
- [x] service-worker.js created
- [x] Service worker registration code added
- [x] Install prompt component created
- [ ] App icons generated (PNG files)
- [ ] HTML meta tags added
- [ ] Deployed to HTTPS URL
- [ ] Tested on mobile devices

### Optional Enhancements:

- [ ] Add splash screens for iOS
- [ ] Add more offline pages
- [ ] Implement background sync
- [ ] Add push notifications
- [ ] Create app store listing assets

---

## 📱 User Experience After Installation

When users install your PWA:

1. **Icon on Home Screen**
   - Appears like a native app
   - Custom icon with hexagon + 玄 design
   - Name "Mystic Arts" below icon

2. **Standalone Mode**
   - No browser UI (address bar, etc.)
   - Full-screen experience
   - Looks and feels like native app

3. **Offline Access**
   - Previously visited pages work offline
   - Cached resources load instantly
   - Offline page shown when appropriate

4. **Fast Loading**
   - Cached assets load instantly
   - Service worker pre-caches key pages
   - Smooth navigation between pages

5. **Automatic Updates**
   - App checks for updates automatically
   - Prompts user when new version available
   - Updates happen in background

---

## 🔧 Maintenance

### Updating the App:

1. Make your code changes
2. Deploy new version
3. Users will be prompted to update automatically
4. Service worker handles the update process

### Updating Cache:

If you need to force cache refresh:
1. Change `CACHE_NAME` in service-worker.js
2. Deploy the updated service worker
3. Old caches will be automatically cleaned up

---

## 📊 Analytics & Monitoring

Consider adding:

- **PWA install tracking**: Track when users install
- **Offline usage**: Monitor offline interactions
- **Update acceptance rate**: Track update prompt responses
- **Performance metrics**: Monitor load times

---

## ⚠️ Important Notes

### Limitations:

1. **iOS Safari Limitations:**
   - No install prompt on iOS (manual only)
   - Limited service worker capabilities
   - No push notifications support
   - Background sync not available

2. **Browser Support:**
   - Chrome/Edge: Full support ✅
   - Firefox: Good support ✅
   - Safari: Partial support ⚠️
   - IE: No support ❌

3. **Storage Limits:**
   - Service worker cache has limits
   - Varies by browser and device
   - Be selective about what to cache

### Best Practices:

1. **Cache wisely**: Don't cache everything
2. **Update regularly**: Keep service worker updated
3. **Test offline**: Ensure offline experience works
4. **Monitor performance**: Check cache hit rates
5. **User feedback**: Allow users to refresh/clear cache

---

## 🎉 Next Steps

1. Generate app icons (most important!)
2. Test on actual devices
3. Deploy to HTTPS hosting
4. Share with users
5. Monitor installation rates
6. Gather feedback
7. Iterate and improve

---

## 📚 Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [PWA Builder](https://www.pwabuilder.com/)
- [Lighthouse PWA Audit](https://developers.google.com/web/tools/lighthouse)

---

## ✅ Current Status

**Completed:**
- ✅ Manifest configuration
- ✅ Service worker implementation
- ✅ Install prompt UI
- ✅ Offline fallback page
- ✅ Service worker registration
- ✅ Auto-update mechanism

**Remaining:**
- ⏳ Generate app icons (PNG files)
- ⏳ Add HTML meta tags
- ⏳ Deploy to HTTPS
- ⏳ Test on devices

**Your PWA foundation is ready! Just add the icons and deploy to see it in action! 🚀**
