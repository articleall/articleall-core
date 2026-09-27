import js from "@eslint/js";

const browserGlobals = {
  chrome: "readonly",
  document: "readonly",
  navigator: "readonly",
  URL: "readonly",
  window: "readonly",
};

export default [
  {
    ignores: ["**/node_modules/**"],
  },
  {
    files: [
      "core/**/*.js",
      "scripts/**/*.mjs",
      "articleall-chrome/src/**/*.js",
      "articleall-firefox/src/**/*.js",
      "articleall-safari/src/**/*.js",
    ],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: browserGlobals,
    },
  },
];
