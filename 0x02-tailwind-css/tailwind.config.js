/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // ✅ matches 1-index.html and 2-index.html
    "./src/**/*.{html,js}" // ✅ matches any future html/js in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
