<template>
  <button :class="classList">
    <slot>默认按钮</slot>
  </button>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'ZwButton',
  props: {
    size: {
      type: String
    },
    color: {
      type: String
    }
  },
  setup(props){
    let classList = reactive([props.size, props.color])

    return {
      classList
    }
  }
}
</script>

<style scoped>
  button{
    width: 102px;
    height: 34px;
    border: 1px solid rgb(58,139,255);
    border-radius: 17px;
    cursor: pointer;
    background-color: white;
    color: rgb(58,139,255);
  }

  button:hover{
    background-color: rgb(234,240,255);
  }

  .small{
    width: 74px;
    height: 26px;
    border-radius: 13px;
  }

  .small:hover{
    background-color: rgb(234,240,255);
  }

  .orange{
    border: 0;
    color: white;
    background-color: rgb(250,160,70);
  }

  .orange:hover{
    background-color: rgb(250,172,95);
  }
</style>