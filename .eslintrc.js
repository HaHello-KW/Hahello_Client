module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'prettier/prettier': ['error', {endOfLine: 'auto'}],
      },
    },
  ],
};
