<template>
  <div class="side-bar-wrapper">
    <div class="user-info clearfix">
      <div class="profile-photo">
        <img :src="userInfo.profileURL" alt="" />
      </div>
      <h3>{{ userInfo.userName }}</h3>
      <zw-button size="small" color="orange">账号管理</zw-button>
    </div>

    <side-bar-list
      :itemList="itemList"
      @itemClick="changeActive"
      :activeTitle="activeTitle"
    >
    </side-bar-list>
  </div>
</template>

<script>
import { ref } from "vue";
import SideBarList from "./SideBarList.vue";
import ZwButton from './ZwButton.vue'

export default {
  name: "SideBar",
  props: {
    userInfo: {
      type: Object,
      default(){
        return {
          userName: '用户名',
          profileURL: "https://bpic.588ku.com/element_origin_min_pic/19/04/09/cb02b26df1cd2ff6dfc97456e2cab54d.jpg"
        }
      }
    },
  },
  emit:['changeTitle'],
  components: {
    SideBarList,
    ZwButton
  },
  setup(props, context) {
    // 所有title，通过Object传递给子组件
    let itemList = {
      课程: "&#xe614;",
      收件箱: "&#xe8a1;",
      听课评课: "&#xe614;",
      小组: "&#xe764;",
      个人直播间: "&#xe614;",
      笔记: "&#xe60f;",
      云盘: "&#xe79b;",
      收藏: "&#xe625;",
      调查问卷: "&#xe67f;",
    };

    // 当前active的title
    let activeTitle = ref("收件箱");

    // 接收子组件的事件，向外发出事件
    function changeActive(title) {
      activeTitle.value = title;
      // 接着向外发出事件
      context.emit("changeTitle", title)
    }

    return {
      itemList,
      changeActive,
      activeTitle,
    };
  }
};
</script>

<style scoped>
.side-bar-wrapper {
  width: 220px;
  background-color: #f6f6f6;
  position: sticky;
  top: 2px;
}

.user-info {
  height: 180px;
  width: 220px;
  background: url(../assets/personalBg.jpg) no-repeat bottom center
    rgb(251, 247, 246);
}

.profile-photo {
  height: 80px;
  width: 80px;
  background-color: rgba(171, 178, 194, 0.829);
  border-radius: 50%;
  margin: 10px auto;
  cursor: pointer;
  overflow: hidden;
}

.user-info h3 {
  text-align: center;
  margin: 8px;
  font-size: 18px;
  font-weight: 400;
}

.user-info button {
  display: block;
  margin: 0 auto;
}

.profile-photo img {
  width: 100%;
  height: 100%;
}
</style>