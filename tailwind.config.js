/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        list: 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      transitionProperty: {
        width: 'width'
      },
      colors: {
        'cus-unactivated': 'rgba(0, 0, 0, 0.5)',
        'cus-normal': 'rgba(0, 0, 0, 0.7)',
        'cus-activated': 'rgba(0, 0, 0, 0.9)'
      }
    }
  },
  plugins: []
}
