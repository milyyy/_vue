// div嵌套 a标签， 嵌套元素以数组形式，
// 一般为 createElement('标签名', {属性,事件等}, 元素内容)

export const helloWorld = {
  render: function(createElement) {
    const myId = "box";
    return createElement("div", [
      createElement(
        "a", // 标签名
        {
          // 深入数据对象，标签上的属性、事件等等... 见 https://cn.vuejs.org/v2/guide/render-function.html
          attrs: {
            name: myId,
            href: "#" + myId
          },
          on: {
            click: this.myClick
          }
        },
        this.$slots.default // 文本内容
      )
    ]);
  },
  methods: {
    myClick() {
      alert("click it ~");
    }
  },
  props: {
    level: {
      type: Number,
      retuqired: true
    }
  }
};
