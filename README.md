## 搭建vue开发环境 

### 说明
> "serve": "webpack ./src/main.js --config ./build/webpack.config.js",   
> "dev": "wbpack-dev-serve --config ./build/webpack.dev.js",  // 开发环境  
> "prod": "webpack --config ./build/webpack.prod.js"          // 生产环境  


#### 遇到的问题
- [x] **解析vue时找不到#app元素**  (已解决)
目前的解决方案是： 
```js
  plugins: [
    // vue解析
    new VueLoaderPlugin(),
    // 生成到模版到index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    //...
  ] 
```  
其他可能的原因： 文件为加载完已经解析了vue.  

参考资料： https://stackoverflow.com/questions/29484431/vue-warn-cannot-find-element  

- [ ] 执行上述生产开发环境命令时出错（未解决），错误为 
```js
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.optimization.splitChunks should be one of these:
   false | object { automaticNameDelimiter?, automaticNameMaxLength?, cacheGroups?, chunks?, fallbackCacheGroup?, filename?, hidePathInfo?, maxAsyncRequests?, maxInitialRequests?, maxSize?, minChunks?, minSize?, name? }
   -> Optimize duplication and caching by splitting chunks by shared modules and cache group...
   ...
   ...
```  
参考：  
> https://github.com/webpack-contrib/jshint-loader/issues/48  
> https://stackoverflow.com/questions/45273988/webpack3-jshint-loader-does-not-work/45274620#45274620  


