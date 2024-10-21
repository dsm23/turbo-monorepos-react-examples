// module.exports = {
//   env: {
//     node: true,
//   },
//   parser: "@typescript-eslint/parser",
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier",
//   ],
//   plugins: ["@typescript-eslint"],
//   parserOptions: {
//     sourceType: "module",
//     ecmaVersion: 2020,
//   },
//   rules: {
//     "@typescript-eslint/no-non-null-assertion": "off",
//   },
// };

import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

// import tailwind from "eslint-plugin-tailwindcss";

/** @type {import("eslint").Linter.Config} */
export default tseslint.config(
  {
    ignores: [
      "node_modules",
      ".next",
      ".swc",
      ".turbo",
      "build",
      "coverage",
      "dist",
      "global.d.ts",
      "junit.xml",
      "storybook-static/**",
      "test-results",
      "playwright-report",
      "blob-report",
      "playwright",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  react.configs.flat["jsx-runtime"],
  // ...tailwind.configs["flat/recommended"],
  {
    files: ["**/*.{js,md,mdx,mjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // parserOptions: {
      //   project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      //   tsconfigRootDir: import.meta.dirname,
      // },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
  },
  {
    files: ["!**/src/**", "**/src/stories/**"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ["**/src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
          allowBoolean: true,
        },
      ],
    },
  },
);
