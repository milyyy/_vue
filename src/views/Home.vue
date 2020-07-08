<template>
  <div>
    home
    <hr />

    <section>
      <h3>测试mixin</h3>
      <button @click="print">myMixin</button>
    </section>

    <section>
      <p>print来自myMix,可以直接使用，mixin没有生命周期</p>
      <p>当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。</p>
      <p>比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。</p>
			<hr>
			message在mymxin和组件中都有, 有冲突以组件数据优先.
      <h3>message: {{message}}</h3>
      <br />
			这里的foo存在于mymix,而组件中没有
      <h3>foo: {{foo}}</h3> 
    </section>


  </div>
</template>

<script>
import myMixin from "@/mixins/myMixin";
export default {
  mixins: [myMixin],
  data: function() {
    return {
      message: "world"
    };
  }
};
</script>