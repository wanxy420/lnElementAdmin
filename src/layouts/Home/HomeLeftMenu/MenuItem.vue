<script lang="ts" setup>
import { PropType, computed } from "vue";
import ItemSingle from "./ItemSingle.vue";
import ItemMultiple from "./ItemMultiple.vue";

const props = defineProps({
  itemChildren: {
    type: Object as PropType<menuType>,
  },
});

const componentId = computed(() => {
  if (props.itemChildren?.children) {
    return ItemMultiple;
  } else {
    return ItemSingle;
  }
});
</script>
<template>
  <component :is="componentId" :itemChildren="props.itemChildren">
    <MenuItem
      v-for="(item, index) in props.itemChildren?.children"
      :key="index"
      :itemChildren="item"
    />
  </component>
</template>
