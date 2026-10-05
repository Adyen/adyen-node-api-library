const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports", "node-security"],
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

        // Nexo cloud-device crypto: these lock the choices src/security already
        // makes, so a future edit cannot quietly weaken them.
        "node-security/no-timing-unsafe-compare": "error",
        "node-security/no-weak-hash-algorithm": "error",
        "node-security/no-weak-cipher-algorithm": "error",
        "node-security/no-deprecated-cipher-method": "error",
        "node-security/no-ecb-mode": "error",
        "node-security/no-static-iv": "error",
        "node-security/no-math-random-crypto": "error",
        "node-security/no-insecure-rsa-padding": "error",
        "node-security/require-aead-tag-verification": "error",
        "node-security/no-dynamic-algorithm-selection": "error",
      },
    },
    // Test fixtures generate throwaway identifiers with Math.random(), which is
    // fine there and is not what no-math-random-crypto is aimed at. Overrides
    // are last-wins, so this has to sit after the general *.ts block.
    {
      files: ["src/__tests__/**/*.ts"],
      rules: {
        "node-security/no-math-random-crypto": "off",
      },
    },
  ],
};
