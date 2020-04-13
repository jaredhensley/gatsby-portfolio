import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.75,
  headerFontFamily: ["Roboto mono", "monospace"],
  bodyFontFamily: ["Rubik", "monospace"],
  googleFonts: [
    {
      name: "Roboto Mono",
      styles: ["400", "500", "600"],
    },
    {
      name: "Rubik",
      styles: ["400", "500", "600"],
    },
  ],
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
