/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2.5rem",
      },
      colors: {
        darkBlue: "#0F378F",
        "darkBlue-100": "#0C0047",
        "darkBlue-200": "#00218F",
        "darkBlue-300": "#152C5B",
        lightBlue: "#37E2D5",
        purple: "#6A4BFF",
        grey: "#969696",
        "grey-100": "#F2F2FF",
        "grey-200": "#ECECEC",
        "grey-300": "#F9F9F9",
        darkBlack: "#343434,",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
      fontSize: {
        base100: "1.0625",
        xl: "1.25rem",
        "1xl": "1.375rem",
        "4.5xl": "2.5rem",
        "5.5xl": "3.25rem",
        "5.8xl": "3.5rem",
        "6.5xl": "4rem",
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
