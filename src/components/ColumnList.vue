<template>
  <h1>
    <li v-for="column in list" :key="column.id">
      <img :src="column.avatar" :alt="column.title" />
      <h5>{{ column.title }}</h5>
      <p>{{ column.description }}</p>
      <a href="#">进入专栏</a>
    </li>
  </h1>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface IColumnProps {
  id: number,
  title: string,
  avatar: string,
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props:{
    list: {
      type: Array as PropType<IColumnProps[]>,
      required: true
    }, 
  },
  setup(props){
    props.list[0]
  }
})
</script>

<style>

</style>