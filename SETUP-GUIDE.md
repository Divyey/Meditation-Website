# 🚀 Quick Setup Guide

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including React, TypeScript, Tailwind CSS, and Framer Motion.

## Step 2: Start Development Server

```bash
npm run dev
```

Your website will be available at: `http://localhost:5173`

## Step 3: Customize Your Logo

1. Replace `/public/logo.svg` with your actual logo file
2. Supported formats: SVG, PNG, JPG
3. Recommended size: 512x512px or larger

## Step 4: Update Meeting Links

### In `src/components/Schedule.tsx`:
Find line with meeting link and update:
```typescript
href="#join"  // Change to your Google Meet/Zoom link
```

### In `src/components/JoinFamily.tsx`:
Find the "Quick Join" section and update:
```typescript
href="https://meet.google.com/your-meeting-link"
```

## Step 5: Configure Email Contact

### Option A: Using EmailJS (Recommended for beginners)
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Get your Service ID, Template ID, and Public Key
4. Update `src/components/JoinFamily.tsx` `handleSubmit` function

### Option B: Using Your Own Backend
1. Create an API endpoint to receive form data
2. Update the `handleSubmit` function to POST to your endpoint

### Option C: Using Formspree (Easiest)
1. Sign up at [Formspree.io](https://formspree.io/)
2. Get your form endpoint
3. Update form action attribute

## Step 6: Update Contact Information

In `src/components/Footer.tsx`, update:
- Email address
- Social media links (Instagram, YouTube)
- Any other contact details

## Step 7: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

## Step 8: Deploy Your Website

### Option A: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder
3. Done!

### Option C: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🎨 Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom purple shades
  },
  peace: {
    // Your custom blue shades
  }
}
```

## 📱 Testing Responsive Design

1. Open browser Developer Tools (F12)
2. Click the device icon (Toggle device toolbar)
3. Test on different screen sizes

## 🐛 Troubleshooting

### Port 5173 is already in use
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

### Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force
npm install
```

### TypeScript errors
```bash
# Check TypeScript configuration
npm run build
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 💡 Tips

1. **Use Hot Reload**: The dev server automatically reloads when you save files
2. **Check Console**: Open browser console (F12) to see any errors
3. **Mobile First**: Always test on mobile devices or responsive mode
4. **Optimize Images**: Compress your logo and images before adding them
5. **SEO**: Update meta tags in `index.html` for better search engine visibility

## 🎯 Next Steps

- [ ] Add your actual logo
- [ ] Update meeting links
- [ ] Configure form submission
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Deploy to production
- [ ] Share with your meditation community!

---

Need help? Check the main README.md for detailed documentation.

**Om Shanti 🕉️ Peace be with you 🌸**

