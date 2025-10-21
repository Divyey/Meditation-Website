/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        divine: {
          50: '#fff9f0',
          100: '#fff4e6',
          200: '#ffe4cc',
          300: '#ffd4b3',
          400: '#ffb380',
          500: '#ff9966',
          600: '#ff7733',
          700: '#e65c00',
          800: '#cc5200',
          900: '#994d00',
        },
        light: {
          50: '#ffffff',
          100: '#fffef8',
          200: '#fffdf0',
          300: '#fffbe8',
          400: '#fff9e0',
          500: '#fff7d8',
          600: '#ffe4b3',
          700: '#ffd199',
          800: '#ffbe80',
          900: '#ffab66',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'radiate': 'radiate 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        radiate: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.4), 0 0 60px rgba(251, 146, 60, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(251, 146, 60, 0.8), 0 0 60px rgba(251, 146, 60, 0.6), 0 0 90px rgba(251, 146, 60, 0.4)',
            transform: 'scale(1.05)'
          },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(251, 146, 60, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.8))' },
        },
      },
    },
  },
  plugins: [],
}

