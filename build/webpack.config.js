const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, "../src/assets"),
      'jiaoyi': path.resolve(__dirname, "../src/jiaoyi")
    },
    extensions: ['*', '.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [
          'css-loader', 'less-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
              publicPath: "../dist/css/"
            }
          }]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            limit: 10240,
            name: 'img/[name]_[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 102400,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html",
      chunks: ['main']
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "../public/other.html"),
    //   filename: "other.html",
    //   chunks: ['other']
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}