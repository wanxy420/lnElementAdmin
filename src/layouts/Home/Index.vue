<script lang="ts" setup>
import HomeMenu from "./HomeLeftMenu/HomeMenu.vue";
import HomeHeader from "./HomeHeader/HomeHeader.vue";
import useStore from "@/store";
import { KeepAlive } from "vue";

const { home } = useStore();
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        class="layout-item"
        :width="home.leftDrawerOpen ? '0' : '230px'"
      >
        <HomeMenu />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <HomeHeader />
        </el-header>
        <el-main class="layout-item main">
          <router-view v-slot="{ Component }">
            <transition name="slide-fade">
              <KeepAlive :include="home.includeList">
                <component :is="Component" :key="$route.name" />
              </KeepAlive>
            </transition>
          </router-view>
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
  transition: all 0.5s;
  margin: 4px;
  border-radius: 4px;
  border: none;
  background-color: white;
}

.el-main,
.el-header {
  padding: 0px;
}

.main {
  padding: 8px;
  overflow: hidden;
}

.el-main:hover,
.el-aside:hover {
  transition: all 0.5s;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}
</style>
