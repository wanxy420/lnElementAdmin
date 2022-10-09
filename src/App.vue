<script lang="ts" setup>
import { watch } from "vue";
import useStore from "./store";
import { useRoute } from "vue-router";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const { home, config } = useStore();
const route = useRoute();

watch(
  () => route.path,
  () => {
    if (route.meta.isTabs) {
      if (!(home.headerTabsList.findIndex((x) => x.path === route.path) >= 0)) {
        home.headerTabsList.push({
          name: route.name as string,
          path: route.path,
          title: route.meta.title as string,
        });
        home.includeList.push(route.name as string);
      }
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

window.addEventListener("resize", () => {
  if (document.body.clientWidth > 750) {
    config.isMobile = false;
  } else {
    config.isMobile = true;
  }
});
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
