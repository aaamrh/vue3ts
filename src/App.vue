<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <!-- <h1>{{ count }}</h1>
  <h1>{{ double }}</h1> -->
  <h1>{{ count }}</h1>
  <h1>{{ double }}</h1>
  <ul>
    <li v-for="number in numbers" :key="number"><h1>{{number}}</h1></li>
  </ul>
  <h1>{{person.name}}</h1>


  <p> x: {{pos.x}}, y: {{pos.y}}</p>
  <button @click="increase">👍 + 1</button>

  <h1 v-if="loading">loading ...</h1>
  <img v-if='loaded' :src="result.message" />

  <div>
    <IModal :isOpen="modalIsOpen" @close-modal="onModalClose"></IModal>
    <button @click="openModal">👍 打开Modal</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed, reactive, toRefs, onMounted, onUpdated, onRenderTracked, onRenderTriggered, watch, onUnmounted} from 'vue';
import IModal from './components/IModal.vue';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';


interface IDataProps {
  count: number;
  double: number;
  increase: ()=>void;
  numbers: number[];
  person: { name ?: string }
}

interface IDogRes {
  message: string;
  status: string;
}
// Vue2写法
export default defineComponent({
  components: { IModal },
  name: 'App',
  setup(){
    // 无法访问THIS,
    // const count = ref(0); // 响应式对象： 监测到改变后做出响应
    // const increase = () => {
    //   count.value ++
    // }
    // const double = computed(()=>{return count.value * 2})
    const data:IDataProps = reactive({
      count:0, 
      increase: ()=>{ data.count++ },
      double: computed(()=>data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    data.numbers[0] = 10;
    data.person.name = 'Ryan';

    const refData = toRefs(data) // 使用toRefs解决丧失响应性的问题

    onMounted(()=>{
      console.log('mounted')
    })

    onUpdated(()=>{
      console.log('updated')
    })

    // 新增 用来调试
    // onRenderTracked()
    onRenderTriggered((event)=>{
      console.log(event)
    })


    // watch
    const watchCount = ref(0);
    watch([watchCount, ()=>{data.count}], (newValue, oldValue)=>{
      document.title = watchCount.value + ' ' + data.count;
    })
    setTimeout(()=>{ watchCount.value ++ }, 2000)


    // 
    const pos = useMousePosition();

    //
    const {loading, loaded, error, result} = useURLLoader<IDogRes>('https://dog.ceo/api/breeds/image/random');


    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    }
    const onModalClose = () => {
      modalIsOpen.value = false
    }
    
    return {
      // count,
      // increase,
      // double
      ...refData,
      pos,
      loading, loaded, error, result,
      modalIsOpen, openModal, onModalClose
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
