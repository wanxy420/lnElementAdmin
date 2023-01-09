<script lang="ts" setup>
import useStore from "@/store";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const { home } = useStore();
const route = useRoute();
const router = useRouter();

// 点击删除
const handleClose = (path: string, name: string) => {
  home.headerTabsList.splice(
    home.headerTabsList.findIndex((x) => x.path === path),
    1
  );
  home.includeList.splice(home.includeList.indexOf(name), 1);
  if (route.path === path) {
    router.push(home.headerTabsList[home.headerTabsList.length - 1].path);
  }
};
// 点击tags
const handleClick = (path: string) => {
  if (path !== route.path) router.push(path);
};
// 判断是否可删除
const isClosable = computed(() => {
  if (home.headerTabsList.length > 1) {
    return true;
  }
  return false;
});

const showEffect = (item: any) => {
  if (item.path === route.path) {
    return "dark";
  }
  return "light";
};
</script>
<template>
  <el-tag
    v-for="(item, index) in home.headerTabsList"
    class="mx-1"
    size="large"
    :closable="isClosable"
    :effect="showEffect(item)"
    :key="index"
    @click="handleClick(item.path)"
    @close="handleClose(item.path, item.name)"
    :id="item.name"
  >
    {{ item.title }}
  </el-tag>
</template>

<style lang="less" scoped>
.mx-1 {
  cursor: pointer;
  margin-right: 8px;
}
</style>
