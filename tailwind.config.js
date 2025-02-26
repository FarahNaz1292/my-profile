/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      large: { max: "1600px" },
      middle: { max: "1040px" },
      small: { max: "768px" },
    },
    extend: {
      colors: {
        "main-color": "var(--main-color)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        dm: ["var(--font-dm)"],
        oswald: ["var(--font-oswald)"],
        kaushan: ["var(--font-kaushan)"],
      },
    },
  },
  plugins: [require('daisyui')],
};
