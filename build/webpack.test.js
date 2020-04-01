 // webpack公用配置  [入口 + 出口 + 模块（规则）+ 插件]
const path = require("path");
// 热更新 devServer 和 HotModuleReplacementPlugin 插件来实现热更新
const webpack = require("webpack");
// 使用 html-webpack-plugin来创建html页面，并自动引入打包生成的js文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 编译vue
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // mode: "development",
  entry: {
   main: path.resolve(__dirname, "../src/main.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist/"), // 打包文件输出路径
    filename: "js/[name][hash].js",      // 生成的js文件名
    chunkFilename: "js/[name].js", // 生成的chunk名称
    publicPath: "/" // 生成的html模版 资源引用的路径
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions:['*','.js','.json','.vue']
  },
  module: {
    rules: [
      { // 解析.vue
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
            }
          }
        ]
      },
      { // 解析jsx为js
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader',
            options:{
              presets:['@babel/preset-env']
            }
          }
        ]
      },
      { // 解析css
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader:'postcss-loader',
            // options:{
            //   plugins:[require('autoprefixer')]
            // }
          }
        ]
      },
      { // 解析scss,sass文件为css
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      { // 打包图片资源
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 3,  // 默认使用url-loader, 大于限制则使用file-loader复制到输出目录中
              fallback: {
                loader: "file-loader",
                options: {
                  name: 'img/[name].[ext]'
                }
              }
            }
          }
        ]
      },
      { // 打包媒体文件
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 3,  // 默认使用url-loader, 大于限制则使用file-loader复制到输出目录中
              fallback: {
                loader: "file-loader",
                options: {
                  name: 'img/[name].[ext]'
                }
              }
            }
          }
        ]
      },
      { // 打包font字体文件
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 3,  // 默认使用url-loader, 大于限制则使用file-loader复制到输出目录中
              fallback: {
                loader: "file-loader",
                options: {
                  name: 'img/[name].[ext]'
                }
              }
            }
          }
        ]
      },
    ]
  },
  devServer:{
    port: 3001,
    open: true,
    hot: true,
    contentBase:'../dist'
  },
  plugins: [
    // vue解析
    new VueLoaderPlugin(),
    // 生成到模版到index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new CleanWebpackPlugin(), // 清除上次打包缓存
    // webpck热更新
    new webpack.NamedModulesPlugin(),     
    new webpack.HotModuleReplacementPlugin(),
    // 定义环境变量
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     VUE_APP_BASE_URL: JSON.stringify('http://localhost:3000')
    //   }
    // }),
  ]
}