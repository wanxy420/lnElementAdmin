<script lang="ts" setup>
import HomeMenu from "./HomeLeftMenu/HomeMenu.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="layout-item" width="230px">
        <HomeMenu />
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main class="layout-item">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  background-color: rgb(245, 245, 245);
}

.el-container {
  height: 100%;
}

.layout-item {
  margin: 4px;
  background-color: white;
  border-radius: 4px;
}

.el-main,
.el-header {
  padding: 8px;
}
</style>
