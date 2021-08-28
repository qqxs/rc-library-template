// See https://eslint.org/docs/user-guide/configuring/ for more about eslint config.

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-anonymous-default-export': 'off'
  },
  env: {
    node: true,
    mocha: true
  }
};
