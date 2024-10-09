import path from "path";

import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginVitest from "eslint-plugin-vitest";
import globals from "globals";
import tseslint from "typescript-eslint";

const __dirname = path.resolve();

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
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
  pluginImport.flatConfigs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettierRecommended,
  pluginVitest.configs.recommended,
  {
    rules: {
      "no-console": "error",
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
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"], "type"],
          pathGroups: [
            {
              pattern: "react*",
              group: "builtin",
              position: "before"
            }
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          },
          pathGroupsExcludedImportTypes: [],
          "newlines-between": "always-and-inside-groups"
        }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          mts: "never",
          tsx: "never"
        }
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }]
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: {}
      }
    }
  },
  { ignores: ["__mocks__/**/*"] }
];
