<template>
  <div class="row">
    <!-- <div class="col-3" v-for="column in list" :key="column.id">
      <img :src="column.avatar" :alt="column.title" />
      <h5>{{ column.title }}</h5>
      <p>{{ column.description }}</p>
      <a href="#">进入专栏</a>
    </div> -->
    <div class="col-4 mb-4" v-for="column in columnList" :key="column.id">
      <div class="card h-100 shadow-sm" style="width: 18rem;" >
        <div class="card-body text-center overflow-hidden">
          <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light my-3 w-50">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

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
    const columnList = computed(()=>{
      return props.list.map( column => {
        if(!column.avatar){
          column.avatar = require('@/assets/1.png');
        }
        return column
      } )
    })

    return {
      columnList
    }
  }
})
</script>

<style>

</style>