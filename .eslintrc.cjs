module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  ignorePatterns: [
    "node_modules/*",
  ],
  extends: ['eslint:recommended', 'next/core-web-vitals'],
  plugins: ['check-file'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {}
        }
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
      rules: {
        "import/no-restricted-paths": [
          'error',
          {
            zones: [
              // Enforce unidirectional codebase:
              // e. g: src/app can import from src/contexts but not the other way around
              {
                target: './src/contexts',
                from: './src/app'
              },
              {
                target: './src/shared',
                from: ['./src/features', './src/app']
              }
            ]
          }
        ],
        'import/no-cycle': 'error',
        'linebreak-style': ['error', 'unix'],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object'
            ],
            alphabetize: { order: 'asc', caseInsensitive: true },
          }
        ],
        'import/default': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'prettier/prettier': ['off', {}, { usePrettierrc: true }],
      }
    },
    {
      plugins: ['check-file'],
      files: ['src/**/*'],
      excludedFiles: [
        'src/app/**/route.ts',
        'src/app/**/layout.tsx',
        'src/app/**/layout.module.scss',
        'src/app/**/page.tsx',
        'src/app/**/page.module.scss',
      ],
      rules: {
        'check-file/filename-naming-convention': [
          'error',
          {
            '**/*.{ts,tsx,css}': 'PASCAL_CASE',
          },
        ],
        'check-file/folder-naming-convention': [
          'error',
          {
            '!(src/app)/**/*': 'CAMEL_CASE',
            '!(**/__tests__)/**/*': 'CAMEL_CASE',
          },
        ],
      },
    },
    {
      plugins: ['check-file'],
      files: ['src/**/!(__tests__)/*'],
      rules: {
      }
    }
  ]
}
