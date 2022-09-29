<script lang="ts" setup>
import useStore from "@/store";
import MenuItem from "./MenuItem.vue";

const { home } = useStore();
</script>
<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <template v-for="(item, index) in home.leftMenuList" :key="index">
      <MenuItem :itemChildren="item" />
    </template>
  </el-menu>
</template>
