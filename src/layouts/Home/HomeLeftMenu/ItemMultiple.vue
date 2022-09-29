<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  itemChildren: {
    type: Object as PropType<menuType>,
  },
});
</script>
<template>
  <el-sub-menu :index="props.itemChildren?.path">
    <template #title>
      <span>{{ props.itemChildren?.title }}</span>
    </template>
    <slot></slot>
  </el-sub-menu>
</template>
