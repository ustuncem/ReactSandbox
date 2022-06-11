/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Karla', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#D6DBF5',
          200: '#4D5B9E',
          300: '#293264',
        },
        secondary: '#F5F7FB',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};
