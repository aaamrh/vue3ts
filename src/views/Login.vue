<template>
<div class="container">
  <!-- <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <input type="email" 
        class="form-control" 
        id="exampleInputEmail1" 
        v-model="emailRef.val"
        @blur="validateEmail"
      >
      <div class="form-text" v-if="emailRef.error" >{{emailRef.message}}</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>  -->

  <validate-form @form-submit="onFormSubmit" ref="formRef">
    <div class="mb-3">
      <label class="form-label">邮箱</label>
      <validate-input 
        :rules="emailRules"
        v-model="emailVal"
        type="text" 
        placeholder = "请输入邮箱"
      ></validate-input>  
    </div>

    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input 
        :rules="emailRules"
        v-model="passwordVal"
        type="password"
        placeholder = "请输入密码"
      ></validate-input>  
    </div>
    
    <!-- v-slot 缩写# -->
    <template #submit>  
      <button type="submit" class="btn btn-success">提交</button>
      <button type="button" class="btn btn-danger" @click.stop="clearInputs">清空</button>
    </template>
  </validate-form>


  <column-list :list="list"></column-list>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { IColumnProps } from '../components/ColumnList.vue';
import ValidateInput from '../components/ValidateInput.vue';
import ValidateForm from '../components/ValidateForm.vue';


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
  {
    id: 3,
    title: "撒得分waft入户肺结核",
    description: "默默爱马仕的的撒规模i热闹iv莫i的萨满v哦IP没品位",
    avatar: ""
  },
  {
    id: 4,
    title: "撒得分waft入户肺结核",
    description: "默默爱马仕的的撒规模i热闹iv莫i的萨满v哦IP没品位",
    avatar: ""
  },
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    ValidateInput,
    ValidateForm
  },
  setup(props, context){
    const inputRef = ref<any>();
    const formRef = ref<any>(null); // ?? 如何去写TS
    const emailVal = ref('Ryan');   // GET 获取到input组件的值
    const emailRules = [
      { type: 'required', message: "不能为空" }
    ]
    const passwordVal = ref('');

    const onFormSubmit = (result: boolean) => {
      console.log("form submit", result)
    };

    const clearInputs = () => {
      formRef.value.formClear()
    }

    return {
      list: testData,
      emailVal,
      // emailRef,
      // validateEmail,
      emailRules,
      passwordVal,
      onFormSubmit,
      clearInputs,
      formRef
    }
  }
})
</script>

<style>
</style>
