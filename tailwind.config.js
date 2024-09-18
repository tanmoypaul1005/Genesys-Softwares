/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cBrand: "#285D43",
        cRichBlack:"#060606"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(180deg, #DE2A2F 0%, #EF5256 100%)',
        'gradient-custom': 'linear-gradient(97.11deg, #3B3B3B 3.61%, #000000 63.2%)',
        'gradient-to-b-custom': 'linear-gradient(180deg, #2C2A2A 0%, #000000 100%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
