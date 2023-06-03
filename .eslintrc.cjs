module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'import', 'unused-imports', '@typescript-eslint'],
  ignorePatterns: ['.eslintrc.cjs', 'dist/', 'node_modules/', '**.config.*', 'build/', 'public/'],
  rules: {
    'react/require-default-props': 'off', //デフォルト引数の有効化
    'no-shadow': 'off', //eslintのenumsバグを修正する為に追加
    '@typescript-eslint/no-shadow': ['error'], //eslintのenumsバグを修正する為に追加
    'react/jsx-props-no-spreading': 'off', //propsのspreadを許可,propsにオブジェクトを渡す為に追加
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./', '../'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off', //eslint-plugin-unused-importsと競合するため、offにする
    'unused-imports/no-unused-imports': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: 'src/types/**', group: 'internal', position: 'before' },
          { pattern: 'src/repositories/**', group: 'internal', position: 'before' },
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: [],
    },
  },
}
