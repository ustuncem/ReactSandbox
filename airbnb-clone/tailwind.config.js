module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      flex: {
        0: '0 0 auto',
      },
      maxWidth: {
        card: '11rem',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      colors: {
        neutral: {
          850: '#222222',
        },
        gray: {
          150: '#918E9B',
        },
      },
    },
  },
  plugins: [],
};
