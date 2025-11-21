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
        accent: "#3B82F6",
      },
      boxShadow: {
        "soft-glow": "0 0 45px rgba(59,130,246,0.35)",
      },
    },
  },
  plugins: [],
};
