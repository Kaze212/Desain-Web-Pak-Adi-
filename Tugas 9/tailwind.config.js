/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', 
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      colors: {
        primary: '#F6F7C4', // Warna biru khusus
        secondary: '#7BD3EA', // Warna kuning khusus
      },  
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },  
    },
  },
  plugins: [
    require('daisyui')
  ],
}

