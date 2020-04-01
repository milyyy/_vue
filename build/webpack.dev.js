/**
 * -- 开发环境 --
 * 不需要压缩代码
 * 需要热更新
 * css不需要提取到css文件
 * sourceMap
 * ...
 * */

 const webpack = require("webpack");
 const webpackConfig = require("./webpack.config");
 const merge = require("webpack-merge");

 module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    port: 3001,
    open: true,
    hot: true,
    contentBase:'./dist'
  },
  plugins: [
    // 定义开发环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
 })



