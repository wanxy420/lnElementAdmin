<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  itemChildren: {
    type: Object as PropType<menuType>,
  },
});
</script>
<template>
  <el-menu-item :index="props.itemChildren?.path">
    <component
      :is="props.itemChildren?.icon"
      style="width: 1.4em; height: 1.4em; margin-right: 8px"
    />
    <span>{{ props.itemChildren?.title }}</span>
  </el-menu-item>
</template>
