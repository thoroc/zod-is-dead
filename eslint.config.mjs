import eslint from '@eslint/js';

import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.ts'],
    extends: [eslintPluginPrettierRecommended],
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
);
