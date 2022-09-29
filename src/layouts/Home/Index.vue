<script lang="ts" setup>
import HomeMenu from "./HomeLeftMenu/HomeMenu.vue";
import HomeHeader from "./HomeHeader/HomeHeader.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="layout-item" width="230px">
        <el-card shadow="hover">
          <HomeMenu />
        </el-card>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <HomeHeader />
        </el-header>
        <el-main class="layout-item">
          <el-card
            style="
              padding: 8px;
              width: calc(100% - 18px);
              height: calc(100% - 18px);
            "
            shadow="hover"
          >
            <router-view v-slot="{ Component }">
              <keep-alive>
                <transition name="slide-fade">
                  <component :is="Component" :key="$route.name" />
                </transition>
              </keep-alive>
            </router-view>
          </el-card>
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
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: none;
}

.el-main,
.el-header {
  padding: 0px;
}

.el-card {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
}

.el-main:hover,
.el-aside:hover {
  transition: all 0.5s;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}

::v-deep(.el-card__body) {
  padding: 0;
}
</style>
