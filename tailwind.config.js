/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elm: '#211814',      
        gasoline: '#023E55',
        crete: '#C6B8AA'
      }
    },
  },
  plugins: [],
}
