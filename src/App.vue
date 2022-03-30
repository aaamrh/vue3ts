<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <h1>{{ count }}</h1>
  <h1>{{ double }}</h1>
  <button @click="increase">👍 + 1</button>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
// Vue2写法
export default defineComponent({
  name: 'App',
  setup(){
    // 无法访问THIS,
    const count = ref(0); // 响应式对象： 监测到改变后做出响应
    const increase = () => {
      count.value ++
    }
    const double = computed(()=>{return count.value * 2})
    return {
      count,
      increase,
      double
    }
  },  
  data(){
    // return {
    //   count: 0
    // }
  },
  methods:{
    // increase(){
    //   this.count ++
    // }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
