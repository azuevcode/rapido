module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'operator-linebreak': ['error', 'after'],
    'react/jsx-wrap-multilines': ['error', {'declaration': false, 'assignment': false}],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['js', '.jsx'] }],
    'no-confusing-arrow': 'off',
    'arrow-body-style': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
  },
};
