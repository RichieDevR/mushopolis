const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      monospace: ["var(--font-martian)", ...fontFamily.mono],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require(`@tailwindcss/aspect-ratio`),
    require("flowbite/plugin"),
  ],
};
