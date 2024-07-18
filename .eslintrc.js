module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    react: {
      pragma: 'h',
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'react/prop-types': 'off'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', '@typescript-eslint']
};
