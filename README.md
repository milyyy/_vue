## .vue单文件打包

### 入口文件
src/index.html  
src/test.vue  
index.js  

### 安装包
```json
// package.json
  "devDependencies": {
    "html-webpack-plugin": "^4.0.1",
    "vue-loader": "^15.9.1",
    "vue-template-compiler": "^2.6.11",
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
  },
```  

### 命令
```json
// package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"   // 此处添加
  },
```  

### 运行
```
npm install  
npm build
```  

### 打包目录
dist/  

dist/index.html  浏览器查看效果

