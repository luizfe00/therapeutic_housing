/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary-blue": "#42a5f5"
      },
      "boxShadow": {
        "aside-left": "-5px 0 10px rgba(0, 0, 0, 0.2)"
      }
    },
  },
  plugins: [],
}