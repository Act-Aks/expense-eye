module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  trailingComma: 'all',
  singleQuote: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^[@]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};
