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
        // 工业上最严格的代码规范 vscode 不支持
        "airbnb-base",
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/essential",
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard",
        "plugin:vue/recommended",
        "plugin:prettier/recommended",
        // "plugin:prettier/recommended",
        // "prettier/standard"
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
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "vue/html-indent": ["error", 4],
        "vue/html-self-closing": "off",

        // "vue/max-attributes-per-line": [
        //     0,
        //     {
        //         singleline: 3,
        //         multiline: {
        //             max: 3,
        //             allowFirstLine: false
        //         }
        //     }
        // ]
        // 保持eslint 与 prettier 规则一致
        // TODOList 暂时禁用
        "prettier/prettier": [
            "off",
            {},
            {
                usePrettierrc: false
            }
        ],
        // airbnb
        // 这个校验存在问题
        "import/no-unresolved": "off",
        "global-require": "off"
    }
}
