/**
 * -- 生产环境 --
 * 压缩代码
 * 不需要热更新
 * 提取css，压缩css文件
 * sourceMap
 * 构建前清除上一次构建的内容
 * ...
 * 
*/

/**
  * 生产环境所需依赖：
  * 
  * @intervolga/optimize-cssnano-plugin 用于压缩css代码
  * mini-css-extract-plugin 用于提取css到文件中
  * clean-webpack-plugin 用于删除上次构建的文件
  * webpack-merge 合并 webpack配置
  * copy-webpack-plugin 用户拷贝静态资源
  * 
  * 
*/

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');

/*  clean-webpack-plugin 3.0 以上的版本需要使用对象结构  */
// const CleanWebpackPlugin = require('clean-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: '#source-map',
  optimization: { // 压缩css代码
    splitChunks: {
      vendors: {
        name: 'chunk-vendors',
        test: /[\\\/]node_modules[\\\/]/,
        priority: -10,
        chunks: 'initial'
      },
      common: {
        name: 'chunk-common',
        minChunks: 2,
        priority: -20,
        chunks: 'initial',
        reuseExistingChunk: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    // 定义生产环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    // 用于提取css到打包模版文件中
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // 压缩css代码
    new OptimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false
          }
        ]
      }
    }),
    // 用户拷贝静态资源
    new CopyWebpackPlugin()
  ]
  
})

