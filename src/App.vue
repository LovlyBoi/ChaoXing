<template>
  <top-bar :user-info="userInfo"></top-bar>

  <main class="main-table clearfix">
    <side-bar
      :user-info="userInfo"
      @changeTitle="changeTitle"
      class="side-bar"
    ></side-bar>

    <class-table class="class-table"></class-table>
  </main>

  <!-- <main class="main-table clearfix">
    <div class="left-wrapper">
      <side-bar
        :user-info="userInfo"
        @changeTitle="changeTitle"
        class="side-bar"
        :style="fixedObj"
      ></side-bar>
    </div>

    <class-table class="class-table"></class-table>
  </main> -->
</template>

<script>
import { reactive, ref } from "vue";
import SideBar from "./components/SideBar.vue";
// import SearchBar from './components/SearchBar.vue'
import TopBar from "./components/TopBar.vue";
import ClassTable from "./components/ClassTable.vue";

// import useFixed from "./hooks/useFixed";

export default {
  name: "App",
  components: {
    SideBar,
    TopBar,
    ClassTable,
  },
  setup() {
    // 给sideBar传递userInfo，实际开发应该从vuex拿数据，或是网络请求
    let userInfo = reactive({
      userName: "柳智文",
      profileURL:
        "https://bpic.588ku.com/element_origin_min_pic/19/04/09/d441e8e9f2dab2f25499fce13d797d14.jpg",
    });

    // sideBar组件触发changeTitle事件，可以在这里进行路由跳转
    function changeTitle(title) {
      console.log(title);
    }

    let searchKey = ref("");

    function search(keyWord) {
      console.log(keyWord);
    }

    // let fixedObj = useFixed(44);

    return {
      userInfo,
      changeTitle,
      searchKey,
      search,
      // fixedObj,
    };
  },
};
</script>

<style>
@font-face {
  font-family: "iconfont";
  src: url("./assets/icon/iconfont.ttf") format("truetype");
}

.clearfix::before,
.clearfix::after {
  display: table;
  content: "";
  clear: both;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-table {
  width: 1200px;
  margin: 0 115px;
  display: flow-root;
}

.main-table .side-bar {
  float: left;
  /* position: sticky;
  top: 0px; */
}

.main-table .class-table {
  float: left;
  padding: 25px;
  box-sizing: border-box;
}
</style>
