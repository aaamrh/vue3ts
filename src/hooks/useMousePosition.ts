import {ref, reactive, onMounted, onUnmounted, toRefs} from 'vue';

function useMousePosition(){
  // const x = ref(0)
  // const y = ref(0)
  const data = reactive({x: 0, y: 0})
  const refData = toRefs(data)

  const updateMouse = (e: MouseEvent) => {
    data.x = e.pageX;
    data.y = e.pageY;
  }

  onMounted(()=>{
    document.addEventListener('click', updateMouse)
  })

  onUnmounted(()=>{
    document.removeEventListener('click', updateMouse)
  })

  return refData
}

export default useMousePosition