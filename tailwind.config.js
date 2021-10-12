module.exports = {
  purge: {
    content: ['./src/**/*.svelte', './public/*.html'],
    options: {
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      "8": "8vh"
    },
    padding: {
      "15": "15vw",
      "0.4": "0.4vw",
      "1": "1vw"
    },
    backgroundImage: {
      "tblogo": "url('/logo_topbar.png')"
    },
    borderRadius: {
      "8": "8px",
      "auto": "9999px",
      "10": "10px"
    },
    margin: {
      ".8": ".8vw",
      "2": "2vw"
    },
    fontSize: {
      "tb": "1.05rem"
    },
    fontFamily: {
      'display': ['Poppins'],
      'body': ['Poppins'],
    }

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
