import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], ignores: ["dist/**/*", "node_modules/**/*"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettierRecommended,
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
  }
];
