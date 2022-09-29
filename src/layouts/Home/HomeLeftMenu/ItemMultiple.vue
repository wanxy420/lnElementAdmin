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
      <component
        :is="props.itemChildren?.icon"
        style="width: 1.2em; height: 1.2em; margin-right: 8px"
      />
      <span>{{ props.itemChildren?.title }}</span>
    </template>
    <slot></slot>
  </el-sub-menu>
</template>
