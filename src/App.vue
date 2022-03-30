<template>
<div class="container">
  <column-list :list="list"></column-list>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { IColumnProps } from './components/ColumnList.vue';
const testData: IColumnProps[] = [
  {
    id: 1,
    title: "CC府夹批v额我发",
    description: "默默爱马仕的票房排位娃儿附魔，磨皮擦发萨迪克佛盆满破瓦名片v",
    avatar: ""
  },
  {
    id: 2,
    title: "撒得分waft入户肺结核",
    description: "默默爱马仕的的撒规模i热闹iv莫i的萨满v哦IP没品位",
    avatar: ""
  },
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup(){
    return {
      list: testData
    }
  }
})
</script>

<style>
</style>
