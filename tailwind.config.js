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
    },
    colors: {
      primary: "#fff",
      bg: "#282d35",
      orange: "#faac75",
      logo: "#61dafb",
      blue: "rgb(59 130 246)",
      pink: "rgb(244 114 182)",
    },
  },
  plugins: [],
};
