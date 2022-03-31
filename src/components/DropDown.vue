<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <!-- <li class="dropdown-item"> <a href="#">新建文章</a> </li>
      <li class="dropdown-item"> <a href="#">编辑资料</a> </li> -->
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, watch, ref } from "vue";
import useClickOutside from '../hooks/useClickOutside';

export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(){
    const dropdownRef = ref<null | HTMLElement>(null);
    const isOpen = ref(false);

    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
      console.log(isOpen.value, 1)
    }

    // GET 使用hooks
    const isClickOutside = useClickOutside(dropdownRef);
    watch( isClickOutside, ()=>{
      console.log(isOpen, isOpen.value, isClickOutside.value)
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false;
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropdownRef,
      isClickOutside
    }
  }
})
</script>

<style>

</style>