<template>
  <div class="class-table-wrapper">
    <div class="show-class">
      <class-table-nav></class-table-nav>
    </div>
  </div>
</template>

<script>
import ClassTableNav from "./ClassTableNav.vue";

export default {
  name: "ClassTable",
  components: {
    ClassTableNav,
  },
  setup() {},
};
</script>

<style>
.class-table-wrapper {
  width: 980px;
  height: 1200px;
}

.show-class{
  width: 100%;
  height: 1000px;
  border-radius: 12px;
  background-color: #ddd;
}
</style>