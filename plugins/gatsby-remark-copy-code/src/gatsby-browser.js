require("./styles.css")

module.exports.onClientEntry = () => {
  function createFakeElement(value) {
    const isRTL = document.documentElement.getAttribute("dir") === "rtl"
    const fakeElement = document.createElement("textarea")
    // Prevent zooming on iOS
    fakeElement.style.fontSize = "12pt"
    // Reset box model
    fakeElement.style.border = "0"
    fakeElement.style.padding = "0"
    fakeElement.style.margin = "0"
    // Move element out of screen horizontally
    fakeElement.style.position = "absolute"
    fakeElement.style[isRTL ? "right" : "left"] = "-9999px"
    // Move element to the same position vertically
    const yPosition = window.pageYOffset || document.documentElement.scrollTop
    fakeElement.style.top = `${yPosition}px`

    fakeElement.setAttribute("readonly", "")
    fakeElement.value = value

    return fakeElement
  }

  function select(element) {
    const isReadOnly = element.hasAttribute("readonly")
    if (!isReadOnly) {
      element.setAttribute("readonly", "")
    }
    element.select()
    element.setSelectionRange(0, element.value.length)
    if (!isReadOnly) {
      element.removeAttribute("readonly")
    }

    return element.value
  }

  const copy = content => {
    const toCopy = createFakeElement(content)
    document.documentElement.appendChild(toCopy)
    select(toCopy)

    document.execCommand("copy")
    toCopy.remove()
  }

  window.gatsbyRemarkCopyToClipboard = (copyButtonDom, codeBlockDom) => {
    if (copyButtonDom.textContent === "Copied") {
      return
    }

    if (navigator.clipboard) {
      navigator.clipboard?.writeText(codeBlockDom.textContent || "")
    } else {
      copy(codeBlockDom.textContent)
    }

    copyButtonDom.classList.add("copied")
    copyButtonDom.textContent = "Copied!"

    new Promise(resolve => {
      setTimeout(() => {
        copyButtonDom.classList.remove("copied")
        copyButtonDom.textContent = "Copy"
        resolve("done")
      }, 1500)
    })
  }
}
