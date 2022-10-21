"use strict";

require("./styles.css");
module.exports.onClientEntry = function () {
  function createFakeElement(value) {
    var isRTL = document.documentElement.getAttribute("dir") === "rtl";
    var fakeElement = document.createElement("textarea");
    // Prevent zooming on iOS
    fakeElement.style.fontSize = "12pt";
    // Reset box model
    fakeElement.style.border = "0";
    fakeElement.style.padding = "0";
    fakeElement.style.margin = "0";
    // Move element out of screen horizontally
    fakeElement.style.position = "absolute";
    fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
    // Move element to the same position vertically
    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
    fakeElement.style.top = "".concat(yPosition, "px");
    fakeElement.setAttribute("readonly", "");
    fakeElement.value = value;
    return fakeElement;
  }
  function select(element) {
    var isReadOnly = element.hasAttribute("readonly");
    if (!isReadOnly) {
      element.setAttribute("readonly", "");
    }
    element.select();
    element.setSelectionRange(0, element.value.length);
    if (!isReadOnly) {
      element.removeAttribute("readonly");
    }
    return element.value;
  }
  var copy = function copy(content) {
    var toCopy = createFakeElement(content);
    document.documentElement.appendChild(toCopy);
    select(toCopy);
    document.execCommand("copy");
    toCopy.remove();
  };
  window.gatsbyRemarkCopyToClipboard = function (copyButtonDom, codeBlockDom) {
    if (copyButtonDom.textContent === "Copied") {
      return;
    }
    if (navigator.clipboard) {
      var _navigator$clipboard;
      (_navigator$clipboard = navigator.clipboard) === null || _navigator$clipboard === void 0 ? void 0 : _navigator$clipboard.writeText(codeBlockDom.textContent || "");
    } else {
      copy(codeBlockDom.textContent);
    }
    copyButtonDom.classList.add("copied");
    copyButtonDom.textContent = "Copied!";
    new Promise(function (resolve) {
      setTimeout(function () {
        copyButtonDom.classList.remove("copied");
        copyButtonDom.textContent = "Copy";
        resolve("done");
      }, 1500);
    });
  };
};