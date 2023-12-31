/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gradientSky: ['#8876FE', '#73D0EE'],
        fundoMenu: '#FFF3B0',
        fundoGeral: '#335C67',
        fundoContainerInicial: '#FFFFFF',
        bordaFoto: '#F8E45E',
        textoPrincipal: '#F8E45E',
        textoComplementar: '#C1121F',
      },
      fontFamily: {
        merriRegular: ['Merriweather-Regular'],
        merriLight: ['Merriweather-Light'],
        merriLighItalic: ['Merriweather-LightItalic'],
        merriItalic: ['Merriweather-Italic'],
        merriBold: ['Merriweather-Bold'],
        merriBoldItalic: ['Merriweather-BoldItalic'],
        merriBlack: ['Merriweather-Black'],
        merriBlackItalic: ['Merriweather-BlackItalic'],
      }
    },
  },
  plugins: [],
}

