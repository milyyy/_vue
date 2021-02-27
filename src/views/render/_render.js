export const TEST = {
  props: {
    num: {
      type: Number,
      default: 1
    }
  },
  // 1.直接写法
  //   render() {
  //     return <h1>这里有{this.num}个🍎</h1>;
  //   }

  // 2.简单写法
  // return createElement(
  //   "h" + this.num, // 标签名称
  //   this.$slots.default // 子节点数组
  // );
  // }

  // 3.复杂写法
  render(createElement) {
    const header = this.$slots.header;
    const footer = this.$slots.footer;
    const _default = this.$slots.default;
    return createElement("div", [
      createElement("header", header),
      createElement("body", _default),
      createElement("footer", footer)
    ]);
  }
};
