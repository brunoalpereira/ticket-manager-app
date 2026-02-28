import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      "prettier/prettier": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
