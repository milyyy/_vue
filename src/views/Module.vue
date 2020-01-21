<template>
  <div>
    模块化
    <div>
      从a模块获得数据：{{ $store.state.a.number}}
    </div>
    <div>
      <button @click="asynAdd"> + </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions([
      'asynAdd'
    ])
  }
}
</script>

