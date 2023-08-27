/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: '-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial!important;',
    },
    extend: {
      colors: {
        logo: '#52BE82',
        divider: '#D8D8D8',
      },
      textColor: {
        default: '#9499a0',
        active: '#3d3d3d',
        'section-title': '#18191c',
        'section-default': '#61666D',
      },
      fill: {
        default: '#9499a0',
        active: '#3d3d3d',
      },
      backgroundColor: {
        box: '#f6f7f8',
        'box-active': '#e3e5e7',
      },
      backgroundImage: {
        'banner-shadow':
          'linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.24) 46%, rgba(0,0,0,0.08) 76%, rgba(0,0,0,0.00) 100%);',
      },
      borderRadius: {
        'box-small': '4px',
        'box-normal': '8px',
      },
    },
  },
  plugins: [],
};
