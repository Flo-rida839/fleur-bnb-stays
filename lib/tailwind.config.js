/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fcfd',
          100: '#d1f5f7',
          200: '#a3e8eb',
          300: '#66d1d6',
          400: '#00b4bd',
          500: '#009fa6',
          600: '#008992',
          700: '#006f75',
          800: '#005258',
          900: '#003c40',
        },
        gold: {
          light: '#e8c96a',
          DEFAULT: '#d4af37',
          dark: '#b8941a',
        },
        ivory: '#fffff0',
        charcoal: '#333333',
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'marquee': 'marquee 25s linear infinite',
        'pulse-gentle': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'floating': '0 20px 60px rgba(0, 111, 117, 0.2)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #009fa6, #d4af37)',
        'gradient-teal': 'linear-gradient(135deg, #006f75, #003c40)',
      },
    },
  },
  plugins: [],
}