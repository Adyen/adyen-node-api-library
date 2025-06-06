const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
  },
  overrides: [
    // Override for src/typings/**/*.ts — only unused-imports
    {
      files: ["src/typings/**/*.ts"],
      rules: {
        "unused-imports/no-unused-imports": "warn",
      },
    },
    // Default rule set for everything else
    {
      files: ["*.ts", "**/*.ts"],
      excludedFiles: ["src/typings/**/*.ts"],
      rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/ban-types": [
          "error",
          {
            extendDefaults: true,
            types: {
              "{}": false,
            },
          },
        ],
        "unused-imports/no-unused-imports": "warn",
        "no-dupe-class-members": "off",
      },
    },
  ],
};
