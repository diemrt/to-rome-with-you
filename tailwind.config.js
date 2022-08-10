/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elm: '#211814',
        crete: '#C6B8AA',
        gasoline: '#023E55'
    }
    },
  },
  plugins: [],
}
