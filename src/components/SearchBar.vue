<template>
  <input
    type="text"
    id="search-bar"
    v-model="value"
    ref="ipt"
  />
  <span class="iconfont" @click="iconClick">&#xe86e;</span>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "SearchBar",
  props: ["modelValue"],
  emits: ["update:modelValue", "search"],
  setup(props, context) {
    // 获取input的ref引用
    let ipt = ref(null);

    // 放大镜点击事件
    function iconClick() {
      // 点击icon时让input获取焦点
      let input = ipt.value;
      input.focus();
      // 向父组件抛出事件
      context.emit("search", input.value);
    }

    // 自定义组件v-model
    let value = computed({
      get: () => props.modelValue,
      set: newValue => {
        context.emit('update:modelValue', newValue)
      }
    })

    return {
      ipt,
      iconClick,
      value
    };
  },
};
</script>

<style scoped>
#search-bar {
  width: 200px;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 18px;
  padding: 0 40px 0 14px;
  box-sizing: border-box;
  transition: border-color 0.15s;
}

#search-bar:focus {
  outline: none;
}

#search-bar:hover + .iconfont {
  color: rgb(58, 139, 255);
}

#search-bar:hover {
  border-color: rgb(58, 139, 255);
}

#search-bar:focus {
  border-color: rgb(58, 139, 255);
}

#search-bar:focus + .iconfont {
  color: rgb(58, 139, 255);
}

.iconfont {
  font-size: 20px;
  display: inline-block;
  transform: translate(-32px, 2px);
  cursor: pointer;
  transition: color 0.15s;
}
</style>