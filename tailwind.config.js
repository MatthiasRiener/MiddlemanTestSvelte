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
      "8": "8vh",
      "35h": "35vh",
      "10w": "10vw",
      "20h": "20vh",
      "60%": "60%",
      "40%": "40%",
      "3w": "3vw",
      "2w": "2vw",
      "10p": "10px"
    },
    padding: {
      "15": "15vw",
      "0.4": "0.4vw",
      "0.2w": "0.2vw",
      "0.6w": "0.6vw",
      "1": "1vw",
      "0.4r": "0.4rem",
      "6p": "6px",
      "1.5w": "1.5vw",
      "7h": "7vh"
    },
    backgroundImage: {
      "tblogo": "url('/logo_topbar.png')"
    },
    borderRadius: {
      "8": "8px",
      "auto": "9999px",
      "10": "10px",
      "15": "15px",
      "3": "3px"
    },
    width: {
      "74%": "74%",
      "24%": "24%",
      "10w": "10vw",
      "35w": "35vw",
      "33%": "33%",
      "3w": "3vw",
      "2w": "2vw",
      "1w": "1vw"
    },
    margin: {
      ".8": ".8vw",
      "2": "2vw",
      "3w": "3vw",
      "8h": "8vh",
      "3h": "3vh",
      "2h": "2vh",
      "6p": "6px",
      "1w": "1vw",
      ".5w": "0.5vw",
      "auto": "auto !important",
      "1h": "1vh",
      "15w": "15vw"
    },
    fontSize: {
      "tb": "1.05rem",
      "username": "1.6rem",
      "icon": "1.3rem",
      "section": "0.95rem",
      "sectionTitle": "1.2rem",
      "timeAgo": "0.85rem"
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
