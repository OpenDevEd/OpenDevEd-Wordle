/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
    colors:{
      'yellow':'#cd8729',
      'header':'#1d1d20',
      'blue':{
        50: '#F0F7FF',
        100: '#C2E0FF',
        200: '#99CCF3',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E6',
        700: '#0059B3',
        800: '#004C99',
        900: '#003A75',
      },
      'gray':{
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
        950: '#2b2b2b',
        1000: '#3a3a3c',
      },
      'green': "#3eaa42",
      'gray-light':"#1d1d20",
      'white': "#ffff",
      'gray0':'#3a3a3c'
      
    }
  },
  plugins: [],
}

