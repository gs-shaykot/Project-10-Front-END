/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors:{
        primary: '#29af8a',
        secondary:'#fed957'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

