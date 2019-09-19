### vue-i18n 快速使用说明

#### 1.安装 
```js
npm install vue-i18n --save
```

#### 2.main.js注册并引入语言包
```js
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "zh-CN", // 默认语言标识
  messages: {
    "zh-CN": require("./lang/zh"), // 中文语言包
    "en-US": require("./lang/en")  // 英文语言包
  }
});

new Vue({
  router,
  store,
  i18n, //实例注册
  render: h => h(App)
}).$mount("#app");

```    
#### 3.编写相应语言包
- src/lang/zh.js    
- src/lang/en.js,
如果有多种语言，可以自定义编写多种语言包，以此类推。
```js
// zh.js
export const msg = {
  world: "世界",
  name: "米粒"
};
```
```js
// en.js
export const msg = {
  world: "world",
  name: "mily"
};
```  
#### 4.模板渲染  
```html

<span v-text="$t('msg.world')"></span>

<!-- 这里使用了element的下拉菜单组件 -->
<el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    语言<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="en-US">中文</el-dropdown-item>
    <el-dropdown-item command="zh-CN">英语</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```

```js
  data() {
    return {
      lang: ""
    };
  },
  methods: {
    //  切换语言
    handleCommand(command) {
      // this.$message('click on item ' + command);
      console.log('lang', this.lang);
      if (command === "zh-CN") {
        this.lang = "en-US";
        this.$i18n.locale = this.lang; //关键语句
      } else {
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang; //关键语句
      }
    }
  }
```
