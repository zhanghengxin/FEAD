## 配置文件

### .prettierrc

```js
{
    "eslintIntegration": true,
    "stylelintIntegration": true,
    "tabWidth": 4,
    "singleQuote": true,
    "semi": false
}
```
### package.json

```json
{
    devDependencies:{
        // 2019-06-14 为兼容 perttier&&eslint，遵循eslint 添加 prettier-eslint
        "prettier": "^1.17.0",
        "prettier-eslint-cli": "^4.7.1",
    }
}
```
