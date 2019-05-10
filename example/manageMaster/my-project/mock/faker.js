/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars
const apiMock = require("webpack-api-mocker") // webpack-mocker service
const fs = require("fs")
// const webpack = require('webpack')

module.exports = function faker(app, proxyTable) {
    // TODO 获取配置 每一个产品服务对应的文件夹

    // TODO 获取api服务对应的文件
    // apiMock()
    // if(1) {

    // }
    return function(req, res, next) {
        next()
    }
}
