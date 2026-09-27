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
    files: ["core/**/*.js", "scripts/**/*.mjs"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: browserGlobals,
    },
  },
];
