module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#1A1B21",
          200: "#161619",
          300: "#1C1C1C",
        },
        secondary: "#5093E2",
        accent: "#F3BF99",
        neutral: {
          350: "#DCDCDC",
        },
      },
    },
  },
  plugins: [],
};
