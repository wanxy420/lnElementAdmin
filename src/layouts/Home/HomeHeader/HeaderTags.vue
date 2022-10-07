<script lang="ts" setup>
import useStore from "@/store";
import { tr } from "element-plus/es/locale";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const { home } = useStore();
const route = useRoute();
const router = useRouter();

// 点击删除
const handleClose = (path: string) => {
  home.headerTabsList.splice(
    home.headerTabsList.findIndex((x) => x.path === path),
    1
  );
  if (route.path === path) {
    router.push(home.headerTabsList[home.headerTabsList.length - 1].path);
  }
};
// 点击tags
const handleClick = (path: string) => {
  router.push(path);
};
// 判断是否可删除
const isClosable = computed(() => {
  if (home.headerTabsList.length > 1) {
    return true;
  }
  return false;
});
</script>
<template>
  <el-tag
    v-for="(item, index) in home.headerTabsList"
    class="mx-1"
    size="large"
    :closable="isClosable"
    effect="dark"
    :key="index"
    :type="item.path === route.path ? '' : 'info'"
    @click="handleClick(item.path)"
    @close="handleClose(item.path)"
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
