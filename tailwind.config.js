/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg.png')",
        "hero-mirror": "url('/images/mirrorbg.png')",
      },
      colors: {
        bg: "#282d35",
        primary: "#61dafb",
        secondary: "#faac75",
      },
    },
  },
  plugins: [],
};
