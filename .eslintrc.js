const { rules } = require('eslint-config-prettier')

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'off',  // Desabilita o Prettier temporariamente
    'no-console': 'off',
    'eol-last': 'off',
  },
}

