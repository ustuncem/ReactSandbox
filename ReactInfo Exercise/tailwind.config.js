module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#33373E",
          200: "#282D35",
          300: "#21222A",
        },
        secondary: {
          100: "#DEEBF8",
          200: "#61DAFB",
        },
      },
    },
  },
  plugins: [],
};
