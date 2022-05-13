module.exports = {
  darkMode: "class",
  content: ["src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'card': '7rem 1fr auto',
        'card-ui': 'auto 1fr auto',
        'button-bottom': 'auto 2.5rem',
        'form-box-spacing': 'auto minmax(6rem, auto) auto',
      },
      gridTemplateColumns: {
        'link-access-card': '9.5rem auto'
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
        'card': 'outline, transform, box-shadow',
        'basic-colors': 'color, border-color, background-color',
      },
      scale: {
        'xs': '1.025',
        'xxs': '1.0125',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        }
      },
      animation: {
        'fadein': 'fadein 500ms ease-in-out forwards',
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
