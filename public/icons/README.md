# App Icons for PWA

## Required Icon Sizes

Place PNG icons in this folder with the following sizes:

- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## Design Guidelines

### Icon Design
- **Background**: Dark color (#0f0a08 or similar)
- **Main Element**: Hexagon shape with Chinese character "玄" in gold (#D4A76A)
- **Style**: Dunhuang aesthetic with mystical feeling
- **Padding**: Include 10% safe zone padding on all sides

### Generation Tools

You can use these online tools to generate icons:

1. **PWA Asset Generator**: https://www.pwabuilder.com/imageGenerator
   - Upload a 512x512 master icon
   - Automatically generates all sizes
   - Creates iOS splash screens too

2. **RealFaviconGenerator**: https://realfavicongenerator.net/
   - Comprehensive favicon and app icon generator
   - Preview on different devices

3. **Figma/Photoshop/Illustrator**
   - Create master 512x512 design
   - Export at different sizes
   - Ensure proper padding and safe zones

## Master Icon Design

Create a 512x512px icon with:
```
- Canvas: 512x512px
- Safe zone: 461x461px (10% padding)
- Background: Solid dark color or gradient
- Main element: Centered, well-defined
- No text: Icons work best without text
- Contrast: High contrast for visibility
```

## iOS Considerations

For iOS, icons should:
- Be opaque (no transparency)
- Fill the entire canvas
- Have rounded corners (iOS adds them automatically)
- Look good with iOS's automatic treatments

## Testing

After adding icons, test on:
- Chrome (Android): chrome://flags/#enable-pwa-install-ui
- Safari (iOS): Add to Home Screen
- Edge: Install app from address bar
