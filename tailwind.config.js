/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'vh90': '93vh',
        'vh35': '35vh',
      },
      width: {
        'vh47': '47vh',
      },
      borderColor: {
        'cinzaVisor': '#242222',
      },
      borderRadius: {
        'px18': '18px'
      },
      borderWidth:{
        'px1': '1px'
      },
      fontSize: {
        'px40': '40px',
      },
      fontFamily: {
        'roboto1': '[Roboto, sans-serif]'
      }
    },
  },
  plugins: [],
}

