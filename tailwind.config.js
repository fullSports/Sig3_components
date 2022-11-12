/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx, css, ts, js}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        txt_size_xl: '1.375rem',
        txt_size_lg: '1.25rem',
        txt_size_md: '1.125rem',
        txt_size_nr: '1rem',
        txt_size_sm: '0.875re',
        txt_size_xsm: '0.75rem'
      },
      fontFamily: {
        Lato: "Lato, Verdana, 'Sans-serif'",
        Merriweather: 'Merriweather, serif'
      },
      colors: {
        def_white: '#ffffff',
        def_black: '#090809',
        def_blue: '#0081A7',
        def_soft_yellow: '#FDFCDC',
        def_yellow: '#27FB6B',
        def_green: '#16C172',
        def_dark_blue: '#1A181B',
        def_dark_green: '#297373',
        def_orange: '#EA580C',
        def_grey: '#F5F5F5',
      }
    },
  },
  plugins: [],
}
