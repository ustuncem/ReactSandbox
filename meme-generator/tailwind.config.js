module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Karla', 'sans-serif'],
        meme: ['Impact', 'sans-serif'],
      },
      colors: {
        purple: {
          750: '#A626D3',
          850: '#672280',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
