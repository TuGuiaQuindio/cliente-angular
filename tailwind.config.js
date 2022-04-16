module.exports = {
  darkMode: "class",
  content: ["src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'card': '7rem 1fr auto',
      },
      boxShadow: {
        'drop-around': ['0 2px 12px 2px rgba(0 0 0 / 0.125)', '0 4px 8px -4px rgba(0 0 0 / 0.15)'],
      },
      fontFamily: {
        'logo': ['MuseoModerno', 'cursive'],
        'heading': ['Varela Round', 'sans-serif'],
        'normal': ['Cabin', 'sans-serif']
      },
      outlineWidth: {
        'card': "6px"
      },
      transitionProperty: {
        'outline': 'outline',
        'card': 'outline, transform',
      },
      scale: {
        'xs': '1.025',
      },
      colors: {
        primary: "#FFF",
        secondary: { 600: "#33BD67", 500: "#6FCE67", 400: "#BBF19A", },
        accent: "#5CE1C9",
        dark: { 600: "#4C4451", 500: "#838383", 400: "#9F9F9F", },
      }
    },
  },
  plugins: [],
}
