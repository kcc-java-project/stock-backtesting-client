import jsEslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importOrder from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  { ignores: ["dist"] },
  {
    extends: [jsEslint.configs.recommended, tsEslint.configs.recommended],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "import": importOrder,
      "@stylistic": stylistic,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": "error",
      "semi-spacing": "error",
      "@stylistic/quotes": [
        "error",
        "double",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ],
      "@stylistic/jsx-quotes": [
        "error",
        "prefer-double"
      ],
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/member-delimiter-style": [
        "warn",
        {
          "singleline": {
            "delimiter": "semi",
            "requireLast": true
          }
        }
      ],
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          "max": 1
        }
      ],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/space-before-blocks": "error",
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/spaced-comment": ["error", "always"],
      "space-before-function-paren": "error",
      "space-unary-ops": "error",
      "keyword-spacing": "error",
      "import/order": [
        "error",
        {
          "groups": [
            ["builtin","external"],
            ["internal","index","parent","sibling"],
            ["type","unknown"]
          ],
          "pathGroups": [],
          "pathGroupsExcludedImportTypes": [],
          "alphabetize": {"order": "asc"}
        }
      ]
    }
  }
);
