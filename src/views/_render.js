export const TEST = {
  props: {
    num: {
      type: Number,
      default: 1
    }
  },
  render() {
    return <h1>这里有{this.num}个🍎</h1>;
  }
};
