/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-color': 'rotateColor 1s ease-in-out',
      },
      keyframes: {
        rotateColor: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }, // No color change here
        },
      },
        
      colors: {
        darkBg: 'rgb(15, 23, 42)',     
        borderLight: 'rgb(71, 85, 105)',
        correct: '#31ad23',   // Green for correct
        close: '#e0c02b',     // Yellow for close
        incorrect: '#405069', // Gray for incorrect
      },
    },
  },
  plugins: [],
};
