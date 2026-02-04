/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E1E1E",
        stone: "#F6F3EE",
        cloud: "#F0ECE6",
        blush: "#E7D9D1",
        mint: "#8FA89A",
        sun: "#F3E7D3"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 30px -20px rgba(30, 30, 30, 0.35)"
      }
    }
  },
  plugins: []
};
