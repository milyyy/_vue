<template>
  <div>
    <div>
      <section>
        在 Vue.js 1.x 中
        <h3>$dispatch \ $broadcast</h3>
        <h3>前者用于向上级派发事件，只要是它的父级（一级或多级以上），都可以在组件内通过 $on （或 events，2.x 已废弃）监听到，后者相反，是由上级向下级广播事件的。</h3>
      </section>
    </div>用法:
    <section>
      在子组件调用 dispatch 方法，向上级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该上级组件已预先通过 $on 监听了这个事件；<br>
      相反，在父组件调用 broadcast 方法，向下级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该下级组件已预先通过 $on 监听了这个事件。
    </section>
  </div>
</template>
