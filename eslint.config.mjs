import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  { ignores: ['dist/**', 'dist-ssr/**', 'node_modules/**', 'playwright-report/**', 'test-results/**'] },
  js.configs.recommended,
  { files: ['**/*.{ts,tsx}'], extends: [tseslint.configs.recommended] },
  { files: ['src/**/*.{ts,tsx}'], languageOptions: { globals: globals.browser },
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: { ...reactHooks.configs.recommended.rules, ...reactRefresh.configs.vite.rules } },
  { files: ['scripts/measure-performance.mjs'], languageOptions: { globals: globals.browser } },
  { files: ['*.{ts,mjs}', 'scripts/**/*.mjs', 'tests/**/*.ts'], languageOptions: { globals: globals.node } },
);
