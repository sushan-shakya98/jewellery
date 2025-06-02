export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F5E7A9',
          DEFAULT: '#D4AF37',
          dark: '#9C7A3C',
        },
        cream: {
          light: '#FFFEF7',
          DEFAULT: '#FFFDD0',
          dark: '#E8E6C0',
        },
        burgundy: {
          light: '#B33046',
          DEFAULT: '#800020',
          dark: '#5C0018',
        },
        charcoal: {
          light: '#4A4A4A',
          DEFAULT: '#333333',
          dark: '#1A1A1A',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
      boxShadow: {
        'elegant': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'elegant-hover': '0 8px 20px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}