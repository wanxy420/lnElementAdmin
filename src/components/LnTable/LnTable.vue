<script lang="ts" setup>
import { PropType } from "vue";
import LnPagination from "../LnPagination/LnPagination.vue";

const props = defineProps({
  config: {
    type: Object as PropType<lnTableConfig>,
  },
  tableData: {
    type: Array<any>,
    default: () => [],
  },
  tableColumn: {
    type: Array<lnTableColumnType>,
    default: () => [],
  },
});
</script>
<template>
  <el-table :data="props.tableData" stripe style="width: 100%">
    <template v-for="(item, index) in props.tableColumn" :key="index">
      <el-table-column
        v-if="item?.type === 'slot'"
        :prop="item.prop"
        :label="item?.label"
        :width="item?.width"
      >
        <template #default="scope">
          <slot :name="item?.slotName" :row="scope.row"></slot>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :prop="item.prop"
        :label="item?.label"
        :width="item?.width"
      >
      </el-table-column>
    </template>
  </el-table>
  <LnPagination :paginationConfig="props.config" />
</template>
