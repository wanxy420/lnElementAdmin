<script lang="ts" setup>
import useStore from "@/store";
import MenuItem from "./MenuItem.vue";
import { useRoute } from "vue-router";

const { home } = useStore();
const route = useRoute();
</script>
<template>
  <div class="menu-content">
    <el-menu
      :collapse="home.leftDrawerOpen"
      router
      unique-opened
      class="el-menu-vertical-demo"
      :default-active="route.path"
    >
      <template v-for="(item, index) in home.leftMenuList" :key="index">
        <MenuItem :itemChildren="item" />
      </template>
    </el-menu>
  </div>
</template>

<style lang="less">
.menu-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-menu-vertical-demo {
  width: 100%;
  flex: 1;
  overflow: auto;
  border: none;
}
.is-active {
  background-color: rgba(64, 158, 255, 0.2);
}
.el-menu--popup {
  padding: 0;
}
</style>
