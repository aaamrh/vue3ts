<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="formSubmit">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form> 
</template>

<script lang='ts'>
import { defineComponent, onMounted, onUnmounted, Ref } from 'vue'
import mitt from 'mitt';

type ValidateFunc = () => void;
type ClearFunc = () => void;
type Events = {
  'form-item-created': ValidateFunc,
  'form-input-clear': ClearFunc
}

export const emitter = mitt<Events>();

export default defineComponent({
  emits: ['form-submit'],
  setup(props, context){
    let funcArr: ValidateFunc[] = [];
    let clearArr: ClearFunc[] = [];

    // 触发form绑定的form-submit事件
    const formSubmit = () => {
      const result = funcArr.map(func=>func()).every(result => result)
      context.emit("form-submit", result); 
    }

    const callback = (func: ValidateFunc) => {
      funcArr.push(func);
    }
    emitter.on("form-item-created", callback);


    // GET 清空input
    const clearCallBack = (inputRef: ClearFunc) => {
      clearArr.push(inputRef);
    }
    emitter.on('form-input-clear', clearCallBack)

    const formClear = () => {
      console.log('clear')
      clearArr.map(func => func())
    }

    
    onUnmounted(()=>{
      emitter.off('form-item-created', callback);
      emitter.off('form-input-clear', clearCallBack);
      funcArr = [];
      clearArr = [];
    })

    return {
      formSubmit,
      formClear
    }
  },
})
</script>

<style>

</style>