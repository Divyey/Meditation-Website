# 📦 Component Documentation

## Component Structure Overview

Your website is built with modular, reusable React components. Here's what each component does:

---

## 🧭 Navbar Component
**File:** `src/components/Navbar.tsx`

**Features:**
- Sticky navigation that becomes glass-effect on scroll
- Logo with gradient background (🌏 emoji - replace with your actual logo)
- Desktop & mobile responsive menu
- Smooth scroll navigation to sections
- "Join Now" CTA button

**Customization:**
- Update logo in the `<a href="#home">` section
- Modify nav links in the `navLinks` array
- Change colors using Tailwind classes

---

## 🎨 Hero Component
**File:** `src/components/Hero.tsx`

**Features:**
- Full-screen welcome section with animated background
- Main heading "One World One Family"
- Welcome message with vision statement
- Two CTA buttons (View Schedule, Join Family)
- Animated scroll indicator
- Framer Motion animations for smooth entrance

**Customization:**
- Update welcome text
- Modify vision statement
- Change animation timings in `motion.div` components
- Update gradient colors

---

## ⏰ Schedule Component
**File:** `src/components/Schedule.tsx`

**Features:**
- Morning meditation timing (5:50 AM – 6:20 AM IST)
- Evening meditation timing (9:50 PM – 10:20 PM IST)
- Beautiful gradient cards with icons
- Join session CTA with link placeholder

**Customization:**
- Update meditation times
- Add your Google Meet/Zoom link
- Modify card descriptions
- Change gradient colors in `scheduleItems` array

---

## ✨ Experience Component
**File:** `src/components/Experience.tsx`

**Features:**
- Grid layout of 5 key benefits
- Animated cards with gradient icons
- Mission statement section
- Hover effects on each card

**Customization:**
- Add/remove experience items from `experiences` array
- Update mission statement text
- Modify icon colors and gradients

---

## 💭 GuidingThought Component
**File:** `src/components/GuidingThought.tsx`

**Features:**
- Centered quote section with gradient background
- Two inspiring quotes
- Decorative emoji elements
- Glass-morphism effect card

**Customization:**
- Update the guiding quotes
- Change background gradient
- Add more quotes or remove one
- Modify decorative emoji

---

## 📝 JoinFamily Component
**File:** `src/components/JoinFamily.tsx`

**Features:**
- Contact form with 4 fields (Name, Email, Country, WhatsApp)
- Form validation
- Success message animation
- Quick join link section
- Responsive layout

**Form Fields:**
- Name (required)
- Email (required)
- Country (required)
- WhatsApp (optional)

**Customization:**
- Update meeting link
- Connect form to backend/email service
- Add more form fields
- Modify success message

**Integration Options:**
```typescript
// EmailJS Integration
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
}

// Formspree Integration
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

// Custom API
fetch('/api/join', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

---

## 🦶 Footer Component
**File:** `src/components/Footer.tsx`

**Features:**
- Three-column layout (Brand, Quick Links, Contact)
- Social media icons (Instagram, YouTube)
- Copyright notice
- Glass-morphism effect

**Customization:**
- Update email address
- Add/modify social media links
- Update quick links
- Change footer text

---

## 🎯 App Component
**File:** `src/App.tsx`

**Features:**
- Main container component
- Renders all components in order
- Fade-in animation on load
- Responsive layout

**Component Order:**
1. Navbar (fixed at top)
2. Hero (home section)
3. Schedule (meditation times)
4. Experience (benefits)
5. GuidingThought (quotes)
6. JoinFamily (form)
7. Footer (bottom)

---

## 🎨 Styling System

### Custom CSS Classes (in `src/index.css`)

**Utility Classes:**
- `.gradient-text` - Purple to pink gradient text
- `.glass-effect` - Glassmorphism background
- `.btn-primary` - Purple gradient button
- `.btn-secondary` - White/transparent button
- `.section-container` - Max-width container with padding
- `.card` - Glass effect card with hover animation

### Tailwind Colors

**Primary Palette:**
- Purple: `purple-50` to `purple-900`
- Pink: `pink-50` to `pink-900`
- Blue: `blue-50` to `blue-900`

**Gradients:**
- `from-purple-600 to-pink-600` - Main brand gradient
- `from-orange-400 to-yellow-500` - Morning meditation
- `from-purple-600 to-blue-600` - Evening meditation

---

## 📱 Responsive Breakpoints

- **Mobile:** Default (< 640px)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)
- **Large Desktop:** `xl:` (1280px+)

---

## 🎭 Animation System

### Framer Motion Animations

**Entrance Animations:**
```typescript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
```

**Hover Animations:**
```typescript
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}
```

**Custom Animations (in tailwind.config.js):**
- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up effect
- `animate-float` - Floating effect

---

## 🔧 Adding New Sections

To add a new section:

1. **Create new component:**
   ```typescript
   // src/components/NewSection.tsx
   import { motion } from 'framer-motion'
   
   const NewSection = () => {
     return (
       <section id="new-section" className="section-container">
         {/* Your content */}
       </section>
     )
   }
   
   export default NewSection
   ```

2. **Import in App.tsx:**
   ```typescript
   import NewSection from './components/NewSection'
   ```

3. **Add to render:**
   ```typescript
   <NewSection />
   ```

4. **Add to navigation (Navbar.tsx):**
   ```typescript
   { name: 'New Section', href: '#new-section' }
   ```

---

## 💡 Pro Tips

1. **Keep It Simple:** Each component does one thing well
2. **Reuse Styles:** Use the custom CSS classes for consistency
3. **Test Responsive:** Always check mobile view
4. **Animations:** Don't overdo it - smooth and subtle is better
5. **Accessibility:** Use semantic HTML and ARIA labels
6. **Performance:** Lazy load images and components if needed

---

## 🆘 Common Tasks

### Change a Color Globally
Edit `tailwind.config.js` → `extend.colors`

### Add a New Icon
Import from 'react-icons/fi' and use like: `<FiIconName />`

### Modify Form Fields
Edit `src/components/JoinFamily.tsx` → Add field to form and `FormData` interface

### Update Logo
Replace `public/logo.svg` and update references in `Navbar.tsx`

### Add Animation
Use Framer Motion: `<motion.div>` with initial, animate, transition props

---

**Happy Coding! 🚀**

*For detailed React, TypeScript, and Tailwind documentation, check the main README.md*

