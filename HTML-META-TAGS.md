# HTML Meta Tags for PWA

## Add These to Your index.html <head> Section

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Basic Meta Tags -->
  <title>Mystic Arts - Ancient Chinese Divination</title>
  <meta name="description" content="Experience the ancient wisdom of Chinese divination through BaZi, I Ching, Tarot, Face Reading, and Daily Fortune">
  <meta name="keywords" content="Chinese divination, fortune telling, BaZi, I Ching, Tarot, face reading, mystical arts">
  <meta name="author" content="Mystic Arts">
  
  <!-- PWA Meta Tags -->
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#D4A76A">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Mystic Arts">
  
  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="/icons/icon.svg">
  <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png">
  <link rel="apple-touch-icon" href="/icons/icon-192x192.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://your-domain.com/">
  <meta property="og:title" content="Mystic Arts - Ancient Chinese Divination">
  <meta property="og:description" content="Experience the ancient wisdom of Chinese divination">
  <meta property="og:image" content="https://your-domain.com/icons/icon-512x512.png">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://your-domain.com/">
  <meta property="twitter:title" content="Mystic Arts - Ancient Chinese Divination">
  <meta property="twitter:description" content="Experience the ancient wisdom of Chinese divination">
  <meta property="twitter:image" content="https://your-domain.com/icons/icon-512x512.png">
  
  <!-- iOS Splash Screens (Optional) -->
  <!-- iPhone XS Max -->
  <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" href="/splash/iphone-xs-max.png">
  
  <!-- MS Tile -->
  <meta name="msapplication-TileColor" content="#0f0a08">
  <meta name="msapplication-TileImage" content="/icons/icon-144x144.png">
  <meta name="msapplication-config" content="/browserconfig.xml">
  
  <!-- Your CSS and other resources -->
  <!-- ... -->
</head>
<body>
  <!-- Your app content -->
  <div id="root"></div>
  
  <!-- Service Worker Registration (inline or separate file) -->
  <script>
    // This is handled by your React app, but you can also do it here
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(reg => console.log('SW registered:', reg))
          .catch(err => console.log('SW registration failed:', err));
      });
    }
  </script>
</body>
</html>
```

---

## Optional: browserconfig.xml for Windows Tiles

Create `/public/browserconfig.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/icons/icon-72x72.png"/>
      <square150x150logo src="/icons/icon-152x152.png"/>
      <square310x310logo src="/icons/icon-384x384.png"/>
      <TileColor>#0f0a08</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```

---

## Optional: robots.txt

Create `/public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

---

## For Figma Make Environment

Since Figma Make may handle the HTML differently, you should:

1. **Check if there's an index.html file** in the project root or public folder
2. **If not**, these meta tags might need to be added through:
   - Vite's HTML transformation
   - A custom plugin
   - Or they might be handled automatically

3. **Alternative**: Add meta tags via JavaScript in your App.tsx:

```typescript
// In your App.tsx or a useEffect hook
useEffect(() => {
  // Set theme color
  const meta = document.createElement('meta');
  meta.name = 'theme-color';
  meta.content = '#D4A76A';
  document.head.appendChild(meta);
  
  // Add manifest link
  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = '/manifest.json';
  document.head.appendChild(link);
  
  // Set title
  document.title = 'Mystic Arts - Ancient Chinese Divination';
}, []);
```

---

## Verification Checklist

After adding meta tags, verify:

- [ ] Check Chrome DevTools → Application → Manifest
- [ ] Check that icons load properly
- [ ] Check theme-color appears in browser UI
- [ ] Test "Add to Home Screen" functionality
- [ ] Run Lighthouse PWA audit
- [ ] Test on actual mobile device

---

## Notes

- Replace `https://your-domain.com/` with your actual domain
- Ensure all icon paths are correct
- Test both on localhost and production
- Some meta tags are optional but recommended for better PWA experience
