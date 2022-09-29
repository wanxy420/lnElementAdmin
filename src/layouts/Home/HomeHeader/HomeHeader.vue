<script lang="ts" setup>
import HeaderLeft from "./HeaderLeft.vue";
import HeaderRight from "./HeaderRight.vue";
import HeaderTags from "./HeaderTags.vue";
</script>
<template>
  <div class="header-content">
    <HeaderLeft />
    <div class="header-center">
      <HeaderTags />
    </div>
    <HeaderRight />
  </div>
</template>

<style lang="less" scoped>
.header-content {
  width: calc(100% - 6px);
  height: 100%;
  display: flex;
  align-items: center;
  .header-center {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 4px;
    overflow: auto;
  }
}
</style>
