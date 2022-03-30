<template>
  <teleport to="#modal">
    <div id="center">
      <h2>this is a modal</h2>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

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