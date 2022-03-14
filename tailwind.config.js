module.exports = {
  darkMode: "class",
  content: ["src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'logo': [ 'MuseoModerno', 'cursive' ],
        'heading': ['Varela Round', 'sans-serif'],
        'normal': ['Cabin', 'sans-serif']
      },
      colors: {
        primary: "#FFF",
        secondary: { 600: "#33BD67", 400: "#BBF19A" },
        accent: "#5CE1C9",
        dark: "#4C4451",
      }
    },
  },
  plugins: [],
}
