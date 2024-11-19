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
        primary: '#1E40AF', // Warna biru khusus
        secondary: '#FBBF24', // Warna kuning khusus
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

