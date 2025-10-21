# 🌏 One World One Family - Meditation Website

A beautiful, modern meditation website built with React, TypeScript, and Tailwind CSS. This single-page application promotes peace, love, and healing through daily meditation sessions.

## ✨ Features

- 🎨 **Modern & Beautiful UI**: Gradient designs, glass-morphism effects, and smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Optimized**: Built with Vite for lightning-fast development and production builds
- 🎯 **TypeScript**: Type-safe code for better development experience
- 🌈 **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- 📝 **Contact Form**: Easy-to-use form for joining the meditation family
- 🔗 **Navigation**: Smooth scroll navigation between sections
- 🎭 **Icon Library**: Beautiful icons from React Icons

## 🏗️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Icons** - Popular icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd med-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Development

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

The page will automatically reload when you make changes.

## 🏭 Building for Production

To create a production build:

```bash
npm run build
```
or
```bash
yarn build
```

The build files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```
or
```bash
yarn preview
```

## 📁 Project Structure

```
med-website/
├── public/              # Static assets
│   └── logo.svg        # Your logo (add your logo here)
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Schedule.tsx
│   │   ├── Experience.tsx
│   │   ├── GuidingThought.tsx
│   │   ├── JoinFamily.tsx
│   │   └── Footer.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Customization

### Adding Your Logo

1. Add your logo file to the `/public` directory (e.g., `logo.svg`, `logo.png`)
2. Update the logo reference in:
   - `index.html` (line 5)
   - `src/components/Navbar.tsx` (replace the emoji with an image)

### Updating Meditation Links

1. Open `src/components/Schedule.tsx`
2. Update the meeting link in the "Join Session" button
3. Open `src/components/JoinFamily.tsx`
4. Update the "Quick Join" link with your Google Meet/Zoom URL

### Changing Colors

The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Purple and Pink gradients
- Peace colors: Blue tones
- Modify the `colors` section to match your brand

### Updating Content

All content is in the respective component files:
- Welcome message: `src/components/Hero.tsx`
- Schedule times: `src/components/Schedule.tsx`
- Mission statement: `src/components/Experience.tsx`
- Contact info: `src/components/Footer.tsx`

## 📧 Form Integration

The contact form in `JoinFamily.tsx` currently logs submissions to the console. To integrate with a backend:

1. Replace the `handleSubmit` function with your API call
2. Add backend endpoints for form submission
3. Consider services like:
   - Formspree
   - EmailJS
   - Your own backend API
   - Google Forms integration

## 🌐 Deployment

This site can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Copy contents of dist/ to your gh-pages branch
```

## 🔧 Development Tips

- Use the React Developer Tools browser extension
- Check console for any errors or warnings
- Test responsive design using browser dev tools
- Use `npm run lint` to check for code issues

## 🎯 Future Enhancements

The codebase is structured to easily add:
- Blog section for meditation articles
- Video library for guided meditations
- Member dashboard and authentication
- Event calendar for special sessions
- Multi-language support
- Dark mode toggle
- Analytics integration
- SEO optimization

## 📝 License

This project is created for One World One Family meditation group.

## 💖 Support

For questions or support, please contact:
- Email: contact@example.com
- Website: [Add your website URL]

---

**Made with 💜 for global peace and unity**

*"When I change, the world around me changes. When we meditate together, the world heals together."*

