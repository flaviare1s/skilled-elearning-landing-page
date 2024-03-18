/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        azul_cinzento: '#666CA3',
        dark: '#13183F',
        cinza: '#83869A',
        pink: '#F74780',
        rosa: '#FFA7C3',
        bot_bg1: '#F02AA6',
        top_bg1: '#FF6F48',
        top_bg2: '#4851FF',
        bot_bg2: '#F02AA6',
      },
    },
  },
  plugins: [],
}

