{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["standard"],
  "parser": "@typescript-eslint/parser",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react-hooks",
    "prettier",
    "import-helpers",
    "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "space-before-function-paren": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/react-in-jsx-scope": "off",
    "no-shadow": "off",
    "no-extend-native": "off",
    "no-eval": "off",
    "no-nested-ternary": "off",
    "no-useless-return": "off",
    "multiline-ternary": "off",
    "no-unused-vars": "warn",
    "indent": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^react/",
          "/^redux/",
          "module",
          "/^\\.\\./",
          "/^\\./",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ]
  }
}
