const { rules } = require('eslint-config-prettier')

module.exports = {
  root: true,
  extends: [
    'plugin:@next/next/recommended',
    '@payloadcms',
    'plugin:simple-import-sort/recommended'
  ],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'off',  // Desabilita o Prettier temporariamente
    'no-console': 'off',
    'eol-last': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
