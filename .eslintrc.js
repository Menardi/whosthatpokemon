module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    '@stylistic/js',
    '@stylistic/ts',
  ],
  env: {
    browser: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: [
        ['builtin', 'external'],
      ],
      'newlines-between': 'always',
    }],
    'no-var': 'error',
    'prefer-const': 'error',
    '@stylistic/js/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/js/max-len': ['error', { code: 140, ignoreStrings: true }],
    '@stylistic/ts/indent': ['error', 2],
    '@stylistic/ts/no-extra-semi': 'error',
    '@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/ts/semi': ['error', 'always'],
  },
  ignorePatterns: ['node_modules'],
};
