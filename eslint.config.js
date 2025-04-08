import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [
      compat.extends("@rocketseat/eslint-config/react"),
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-empty-object-type": [
        "off"
      ],
      "@typescript-eslint/no-explicit-any": [
        "off"
      ]
      ,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-refresh/only-export-components": [
        "off"
      ],
      "prettier/prettier": [
        "error",
        {
          printWidth: 100,
          endOfLine: "auto",
          singleQuote: true
        }
      ],
      // "quotes": ["error", "single", "always"]
    },
  },
)
