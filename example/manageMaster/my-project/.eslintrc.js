// https://eslint.org/docs/user-guide/configuring
// https://cloud.tencent.com/developer/section/1135626

module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/essential",
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard",
        'plugin:vue/recommended',
        "plugin:prettier/recommended"
    ],
    // required to lint *.vue files
    plugins: ["vue"],
    // add your custom rules here
    rules: {
        // allow async-await
        "generator-star-spacing": "off",
        // 缩进4个空格
        indent: ["error", 4],
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
        // 保持eslint 与 prettier 规则一致
        // 'prettier/prettier': [
        //   'error',
        //   {},
        //   {
        //     usePrettierrc: false
        //   }
        // ]
    }
}
