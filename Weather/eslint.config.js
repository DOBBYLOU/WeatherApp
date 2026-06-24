import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      react: react,
      'react-hooks': reactHooks,
    },

    rules: {
      // JS
      'no-unused-vars': 'warn',
      'no-console': 'warn',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // отключаем отступы (Prettier)
      indent: 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
    },
  },
];
