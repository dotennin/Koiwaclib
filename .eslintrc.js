module.exports = {
  "env": {
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
