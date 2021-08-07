module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}
