<template>
<div class="container">
  <global-header :user="currentUser"></global-header>

  <router-view></router-view>

  <footer class="text-center py-3 text-secondary bg-light mt-6">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-line-item">课程</li>
        <li class="list-line-item">文档</li>
        <li class="list-line-item">联系</li>
        <li class="list-line-item">更多</li>
      </ul>
    </small>
  </footer>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader, { IUserProps } from './components/GlobalHeader.vue';

const currentUser: IUserProps = {
  isLogin: false,
  name: 'Ryan'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
  },
  
  setup(props, context){

    return {
      currentUser,
    }
  }
})
</script>

<style>
</style>
