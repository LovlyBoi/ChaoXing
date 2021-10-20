<template>
  <div class="tap-bar">
    <a href="javascript:;" class="school">
      <h4>哈尔滨理工大学</h4>
    </a>
    <div class="right-tap">
      <div>
        <a href="javascript:;" class="info">
          <img 
          :src="userInfo.profileURL" 
          :alt="userName" 
          />
          <span>{{ userInfo.userName }}</span>
          <i class="iconfont i">&#xe62e; </i>
        </a>
      </div>
      <div class="hidden">
        <li>
          <i class="iconfont">&#xe601;</i>
          <a href="javascript:;" class="in">进入空间</a>
        </li>
        <li>
          <i class="iconfont">&#xf017c;</i>
          <a href="javascript:;" class="in">退出登录</a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";

export default {
  name: "TopBar",
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
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.tap-bar {
  height: 44px;
  background-color: rgb(76,76,76);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
}
.school {
  font-size: 16px;
  margin-left: 20px;
  text-decoration: none;
}
.tap-bar h4 {
  line-height: 44px;
  /* vertical-align: middle; */
  color: white;
}
.info {
  margin-right: 20px;
  text-decoration: none;
  color: white;
}
img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline;
  align-items: center;
  margin-right: 5px;
}
span {
  line-height: 44px;
  margin: 0 5px;
  font-size: 14px;
}
li {
  list-style-type: none;
}
.iconfont {
  color: rgb(204, 204, 204);
}
.i {
  font-size: 10px;
}
.hidden {
  width: 100px;
  height: 80px;
  background-color: rgb(102, 102, 102, 0.9);
  display: none;
}
li {
  text-align: center;
  padding-top: 10px;
}
.hidden a {
  color: rgb(204, 204, 204);
  text-decoration: none;
  margin-left: 3px;
}
.right-tap:hover .hidden {
  display: block;
}
.in:hover {
  text-decoration: underline;
}
</style>