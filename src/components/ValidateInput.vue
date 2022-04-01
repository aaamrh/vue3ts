<template>
  <div class="validate-input-container pb-3">
    <input 
      v-bind="$attrs"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      @blur="validateInput"
      :value="inputRef.val"
      @input="updateValue"
    >
      <!-- v-model="inputRef.val" -->
  </div>
  <div v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';

interface IRuleProp {
  type: 'required' | 'email',
  message: string
}

export type RulesProp = IRuleProp[];

export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup(props, context){
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit('update:modelValue', targetValue);
    }

    const validateInput = () => {
      if ( props.rules ) {
        const allPassed = props.rules.every(rule => {
          let passed = true;
          inputRef.message = rule.message
          
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break;

            case 'email':
              break;
              
            default:
              break;
          }
          return passed;
        })
        inputRef.error = !allPassed;
      }
    }

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style>
.invalid-feedback{
  display: block;
}
</style>