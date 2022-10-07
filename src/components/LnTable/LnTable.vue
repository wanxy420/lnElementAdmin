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
  <div class="table-content">
    <el-table :data="props.tableData" stripe style="width: 100%; flex: 1">
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
    <div class="table-foot">
      <LnPagination :paginationConfig="props.config" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.table-content {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .table-foot {
    width: 100%;
    padding: 8px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
