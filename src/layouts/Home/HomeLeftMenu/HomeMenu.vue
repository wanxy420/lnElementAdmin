<script lang="ts" setup>
import useStore from "@/store";
import MenuItem from "./MenuItem.vue";
import { useRoute } from "vue-router";

const { home } = useStore();
const route = useRoute();
</script>
<template>
  <el-menu
    :collapse="home.leftDrawerOpen"
    router
    class="el-menu-vertical-demo"
    :default-active="route.path"
  >
    <template v-for="(item, index) in home.leftMenuList" :key="index">
      <MenuItem :itemChildren="item" />
    </template>
  </el-menu>
</template>

<style lang="less">
.el-menu-vertical-demo {
  width: 100%;
  height: 100%;
  overflow: auto;
  border: none;
}
.is-active {
  background-color: rgba(64, 158, 255, 0.2);
}
</style>
