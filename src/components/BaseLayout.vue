<template>
  <div class="container">

    <header>
      <!-- 我们希望把页头放这里 -->
      <slot name="header"></slot>
    </header>

    <main>
      <!-- 我们希望把主要内容放这里 -->
      <slot></slot>
      <!-- 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。 -->
    </main>

    <footer>
      <!-- 我们希望把页脚放这里 -->
      <slot name="footer"></slot>
    </footer>

  </div>
</template>