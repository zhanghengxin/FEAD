// https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 100,
  // 开启eslint
  eslintIntegration: true,
  // 开启csslint
  stylelintIntegration: true,
  // tab 宽度 = 4 space
  tabWidth: 4,
  useTabs: true,
  // 单引号
  singleQuote: false,
  // 只能在XXX 添加分号 -- 不适用分号
  semi: false,

  trailingComma: 'none',
  bracketSpacing: true,
  // prettier-eslint doesn't currently support
  // inferring these two (Pull Requests welcome):
  parser: 'babylon',
  jsxBracketSameLine: false
}
