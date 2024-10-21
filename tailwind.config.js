/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        customBold: ["FontBold", "sans-serif"],
        customLight: ["FontLight", "sans-serif"],
        customMedium: ["FontMedium", "sans-serif"],
        customRegular: ["FontRegular", "sans-serif"],
        customBlack: ["FontBlack", "sans-serif"],
        ExtraBold: ["ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
