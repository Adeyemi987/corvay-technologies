/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Teal
        primary: {
          50: '#e6f2f4',
          100: '#cce5e9',
          200: '#99cbd3',
          300: '#66b1bd',
          400: '#3397a7',
          500: '#0F4C5C',
          600: '#0c3d4a',
          700: '#092e37',
          800: '#061f25',
          900: '#030f12',
        },
        // Secondary: Steel Blue (for buttons, CTAs)
        secondary: {
          50: '#e8f4f8',
          100: '#d1e9f1',
          200: '#a3d3e3',
          300: '#75bdd5',
          400: '#47a7c7',
          500: '#1C7C9C',
          600: '#16637d',
          700: '#114a5e',
          800: '#0b313e',
          900: '#06191f',
        },
        // Accent: Muted Green (sustainability)
        accent: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4CAF50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        // Neutrals
        charcoal: '#1F2933',
        'light-gray': '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
