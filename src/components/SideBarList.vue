<template>
  <ul class="items-list">
    <li class="item-wrapper" 
        v-for="(icon, title) in itemList" :key="title" 
        :class="{'active': title == activeTitle ? true : false}"
        @click="itemClick(title)"
    >
      <span class="iconfont">{{iconHandle(icon)}}</span>
      <span class="title">{{title}}</span>
    </li>
  </ul>
</template>

<script>
// import {computed} from 'vue'

import he from 'he'

export default {
  name: "SideBarList",
  props: {
    itemList: {
      type: Object
    },
    activeTitle: {
      type: String
    }
  },
  emit: ['itemClick'],
  setup(_, context){
    function iconHandle(icon){
      return he.decode(icon)
    }

    // 点击列表项
    function itemClick(title){
      // 发出自定义事件给父元素
      context.emit("itemClick", title)
    }

    return {
      iconHandle,
      itemClick
    }
  }
};
</script>

<style scoped>
ul{
  padding: 10px 0;
}

li.item-wrapper{
  height: 40px;
  width: 200px;
  margin: 0 10px;
  padding-left: 25px;
  cursor: pointer;
  line-height: 40px;
  box-sizing: border-box;
  color: #555;
}

ul.item-list{
  display: flex;
  flex-flow: column;
}

.iconfont{
  color: #999;
  font-size: 22px;
  margin-right: 15px;
}

.item-wrapper .title{
  display: inline-block;
  
  transform: translateY(-3px);
}

.item-wrapper:hover span{
  color: rgb(8,156,255);
}

.active span{
  color: rgb(8,156,255);
}

</style>