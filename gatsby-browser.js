// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

import "./src/global.css"

import "katex/dist/katex.min.css"
// Highlighting for code blocks
// import "prismjs/themes/prism-twilight.css"

;(function () {
  window.__onThemeChange = function () {}
  function setTheme(newTheme) {
    window.__theme = newTheme
    preferredTheme = newTheme
    document.body.className = newTheme
    window.__onThemeChange(newTheme)
  }

  var preferredTheme
  try {
    preferredTheme = localStorage.getItem("theme")
  } catch (err) {}

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme)
    try {
      localStorage.setItem("theme", newTheme)
    } catch (err) {}
  }

  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  darkQuery.addListener(function (e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light")
  })

  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"))
})()
