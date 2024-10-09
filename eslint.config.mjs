import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVitest from "eslint-plugin-vitest";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";
const __dirname = path.resolve();

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["dist/**/*", "node_modules/**/*"]
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettierRecommended,
  pluginVitest.configs.recommended,
  {
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
      import: pluginImport
    },
    rules: {
      "no-console": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"]
            }
          ]
        }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never"
        }
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }]
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".mjs", ".jsx", ".ts", ".mts", ".tsx"]
        }
      },
      react: {
        version: "detect"
      }
    }
  },
  { ignores: ["__mocks__/**/*"] }
];
