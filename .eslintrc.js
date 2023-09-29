const noRestrictedImportsNativePaths = [
  {
    name: 'react-native',
    importNames: ['View', 'Text', 'TouchableOpacity'],
    message: 'Please use \'react-native-ui-lib\'',
  },
];

module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'no-relative-import-paths',
  ],
  root: true,
  rules: {
    indent: ['error', 2],
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { allowSameFolder: true, prefix: '@' },
    ],
    'no-restricted-imports': [
      'error',
      { paths: noRestrictedImportsNativePaths },
    ],
    // 'sort-keys': [
    //   'error',
    //   'asc',
    //   { allowLineSeparatedGroups: true, caseSensitive: false, natural: true },
    // ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
