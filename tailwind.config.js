
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { display: ['ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica','Apple Color Emoji','Segoe UI Emoji'] },
      boxShadow: { 'soft': '0 10px 25px rgba(0,0,0,0.25)' }
    },
  },
  plugins: [],
}
