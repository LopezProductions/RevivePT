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
        primary: {
          light: "#CDE7FF",
          DEFAULT: "#4A90E2",
          dark: "#2A6EBB",
        },
        accent: {
          DEFAULT: "#5EC2B7",
        },
        neutral: {
          light: "#F7FAFC",
          DEFAULT: "#E2E8F0",
          dark: "#4A5568",
        },
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        "soft-glow": "0 0 45px rgba(59,130,246,0.35)",
      },
    },
  },
  plugins: [],
};
