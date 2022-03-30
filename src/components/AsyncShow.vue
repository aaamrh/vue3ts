<template>
  <h1>{{result}}</h1>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  setup(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        return resolve({
          result: 100
        })
      }, 3000)
    })
  }
})
</script>

<style>

</style>