<template>
  <div>
    <h1>Render渲染函数</h1>
    <TEST>这是用slot的</TEST>
    <TEST>
      这是默认的部分
      <template v-slot:header>
        这是头部
      </template>
      <template v-slot:footer>
        这是底部
      </template>
    </TEST>

    <helloWorld :level="2">
      点击（带属性的）标签
    </helloWorld>

    <mutiTemplate>
      hello
    </mutiTemplate>
  </div>
</template>

<script>
import { TEST } from "./_render";
import { helloWorld } from "./TestRender";
import { mutiTemplate } from "./TestRender2";
export default {
  components: {
    TEST,
    helloWorld,
    mutiTemplate
  }
};
</script>
