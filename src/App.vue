<script lang="ts" setup>
import { watch } from "vue";
import useStore from "./store";
import { useRoute, useRouter } from "vue-router";

const { home, config } = useStore();
const route = useRoute();

watch(
  () => route.path,
  () => {
    if (route.meta.isTabs) {
      if (!(home.headerTabsList.findIndex((x) => x.path === route.path) >= 0)) {
        home.headerTabsList.push({
          path: route.path,
          title: route.meta.title as string,
        });
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
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
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
