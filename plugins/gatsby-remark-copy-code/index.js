"use strict";

var _unistUtilVisit = _interopRequireDefault(require("unist-util-visit"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var COPY_BUTTON_ADDED = "copy-button-added-";
module.exports = function gatsbyRemarkPrismCopyButton(_ref, _ref2) {
  var markdownAST = _ref.markdownAST;
  var customButtonContainerClass = _ref2.buttonContainerClass,
    customButtonClass = _ref2.buttonClass;
  (0, _unistUtilVisit["default"])(markdownAST, "code", function (node, index, parent) {
    var lang = node.lang || "";
    if (lang.startsWith(COPY_BUTTON_ADDED)) {
      node.lang = lang.substring(COPY_BUTTON_ADDED.length);
      return;
    }
    var buttonClass = ["gatsby-remark-prismjs-copy-button", customButtonClass].filter(Boolean).join(" ");
    var buttonContainerClass = ["gatsby-remark-prismjs-copy-button-container", customButtonContainerClass].filter(Boolean).join(" ");
    var buttonNode = {
      type: "html",
      value: "\n          <div class=\"".concat(buttonContainerClass, "\">\n            <div class=\"").concat(buttonClass, "\" tabindex=\"0\" role=\"button\" aria-pressed=\"false\" onclick=\"gatsbyRemarkCopyToClipboard(this, this.parentNode.nextElementSibling)\">\n              Copy\n            </div>\n          </div>\n          ")
    };
    parent.children.splice(index, 0, buttonNode);
    node.lang = "".concat(COPY_BUTTON_ADDED).concat(lang);
  });
  return markdownAST;
};