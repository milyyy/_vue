// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
      //生成的html页面的模板 将打包的入口文件自动引入到index.html 中
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true, //自动打开浏览器
    port: 8888, //端口号设置
    hot: true //开启了webpack的热更新，只会更新修改的部分，插件里需要引入 HtmlWebpackPlugin
  }
}