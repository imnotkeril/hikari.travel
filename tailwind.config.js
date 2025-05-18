// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#ff507a', // Сакура розовый (из вашей цветовой схемы)
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
          'indigo': '#1A3B5C', // Глубокий индиго (из вашей цветовой схемы)
          'fuji': '#2B6D9F', // Фудзи синий (из вашей цветовой схемы)
          'sky': '#6DCFF6', // Небесно-голубой (из вашей цветовой схемы)
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif'],
        script: ['Kaushan Script', 'cursive'],
      },
    },
  },
  plugins: [],
}