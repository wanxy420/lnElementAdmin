<script lang="ts" setup>
import useStore from "@/store";

const { home } = useStore();

const handleClick = () => {
  home.leftDrawerOpen = !home.leftDrawerOpen;
};
</script>
<template>
  <el-icon @click="handleClick" :size="20">
    <Fold
      :style="{
        transform: home.leftDrawerOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'all 0.5s',
      }"
    />
  </el-icon>
</template>

<style lang="less" scoped>
.el-icon {
  margin: 0 4px;
  background-color: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.el-icon:hover {
  transition: all 0.5s;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}
</style>
