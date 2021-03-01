// 每个vnode具有唯一性，可以使用工厂函数实现相同段落
// 这里实现了10个带插槽的相同div标签，
export const mutiTemplate = {
  render(createElement) {
    return createElement(
      "div",
      Array.apply(null, { length: 10 }).map(() => {
        return createElement("p", this.$slots.default);
      })
    );
  }
};
