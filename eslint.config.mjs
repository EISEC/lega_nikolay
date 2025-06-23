import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Правила TypeScript
      "@typescript-eslint/no-explicit-any": "error", // Запрет any типов
      "@typescript-eslint/no-unused-vars": "error",  // Неиспользуемые переменные
      "@typescript-eslint/prefer-const": "error",    // Предпочтение const
      
      // Правила React
      "react/jsx-key": "error",                      // Обязательные keys
      "react/no-unescaped-entities": "warn",        // Экранирование символов
      "react/display-name": "off",                  // Не требуем displayName
      
      // Правила Next.js
      "@next/next/no-img-element": "error",         // Использовать next/image
      "@next/next/no-html-link-for-pages": "error", // Использовать next/link
      
      // Общие правила
      "prefer-const": "error",                       // Предпочтение const
      "no-var": "error",                            // Запрет var
      "no-console": "warn",                         // Предупреждение о console
      "no-debugger": "error",                       // Запрет debugger
      
      // Правила именования
      "camelcase": ["error", { 
        "properties": "never",
        "ignoreImports": true 
      }],
      
      // Правила для импортов
      "import/order": ["error", {
        "groups": [
          "builtin",
          "external", 
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "never"
      }]
    }
  },
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      // Специальные правила для TypeScript файлов
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  },
  {
    files: ["**/app/**/*.tsx"],
    rules: {
      // Правила для App Router компонентов
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];

export default eslintConfig;
