/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'list': 'repeat(auto-fill, minmax(300px, 1fr))'
      }
    }
  },
  plugins: []
}
