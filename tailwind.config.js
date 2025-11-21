/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        revive: {
          teal: "#4AB5A6",
          green: "#2F7E79",
          aqua: "#89D6E0",
          soft: "#F4FAFB",
          peach: "#FFC98F",
          tint: "#FFEFD9",
        },
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
