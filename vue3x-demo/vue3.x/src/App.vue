<template>
  <div>
    <HelloWorld />
    <modal-button></modal-button>
  </div>
</template>

<script>
import HelloWorld from './components/basic-usage.vue'
import modalButton from './components/modal-button.vue'
export default {
  components:{
    HelloWorld,
    modalButton
  }
}
</script>