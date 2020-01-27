module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['emotion', '@typescript-eslint', 'react', 'prettier', 'jest', 'react-hooks'],
  globals: {
    $Keys: true,
    $Values: true,
  },
  extends: [
    'plugin:import/typescript', // import statements in TS
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // eslint-plugin-prettier: prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'import/extensions': [0, 'never', { ts: 'never' }], // make ESLint import resolver happy
    'prettier/prettier': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
  },
  env: {
    browser: true,
  },
  settings: {
    'import/parser': {
      '@typescript-eslint/parser': ['*.tsx', '*.ts'],
    },
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
};
