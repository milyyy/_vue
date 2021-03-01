// render条件渲染
export const Render1 = {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  render(createElement) {
    if (this.items.length) {
      return createElement(
        "ul",
        this.items.map(item => {
          return createElement("li", item.name);
        })
      );
    } else {
      return createElement("p", "everthing is nothing");
    }
  }
};
