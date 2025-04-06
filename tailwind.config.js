/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#555555',
        green: '#01754F',
        lightgreen: '#579560',
        blue: '#4834D4',
        orange: "#BD5302",
        sandal: '#E9C16B',
        customBorder: '#272727',
        lightBlack: '#080808',
        dropdown: '#1d1d1d'
      },
    },
  },
  plugins: [],
}

