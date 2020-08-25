module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    camelcase: 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'react/style-prop-object': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unused-prop-types': 'off',
    'no-unused-vars': 'off',
    'linebreak-style': 'off',
    'default-case': 'off',
    'react/prop-types': 'off',
  },
};
