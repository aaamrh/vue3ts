<template>
  <teleport to="#modal">
    <div id="center" v-if="isOpen">
      <h2><slot>This is a modal</slot> </h2>
      <button @click="buttonClick">close ❌</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props:{
    isOpen: Boolean,
  },  
  emits:{ // 更明确的显示组件的自定义事件有哪些
    'close-modal': null
  },
  setup(props, context){
    const buttonClick = () => {
      context.emit('close-modal');
    }
    return {
      buttonClick
    }
  }
})
</script>

<style>
  #center{
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -100px;
    margin-left: -100px;
  }
</style>