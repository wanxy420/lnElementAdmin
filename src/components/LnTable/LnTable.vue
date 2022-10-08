<script lang="ts" setup>
import { PropType } from "vue";
import LnPagination from "../LnPagination/LnPagination.vue";

const emit = defineEmits(["handleSizeChange", "handleCurrentChange", "select"]);
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

// 分页组件切换条数
const handleSizeChange = (e: any) => {
  console.log("切换了一页条数---", e);
  emit("handleSizeChange", e);
};
// 分页组件切换页数
const handleCurrentChange = (e: any) => {
  console.log("切换了页数---", e);
  emit("handleCurrentChange", e);
};
// 获取多选行数据
const select = (selection: any, row: any) => {
  console.log("selection", selection);
  console.log("row", row);
};
</script>
<template>
  <div class="table-content">
    <el-table
      :data="props.tableData"
      stripe
      style="width: 100%; flex: 1"
      @select="select"
    >
      <template v-for="(item, index) in props.tableColumn" :key="index">
        <!-- 插槽列 -->
        <el-table-column
          v-if="item?.type === 'slot'"
          :prop="item.prop"
          :label="item?.label"
          :width="item?.width"
          :align="item?.align || 'center'"
        >
          <template #default="scope">
            <slot :name="item?.slotName" :row="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 下拉列 -->
        <el-table-column
          v-else-if="item?.type === 'expand'"
          :align="item?.align || 'center'"
          type="expand"
        >
          <template #default="scope">
            <slot :name="item?.slotName" :row="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 序号列 -->
        <el-table-column
          v-else-if="item?.type === 'index'"
          type="index"
          :width="item?.width"
          :label="item?.label"
          :align="item?.align || 'center'"
        />
        <!-- 多选列 -->
        <el-table-column
          v-else-if="item?.type === 'selection'"
          type="selection"
          :width="item?.width"
          :selectable="item?.selectable"
          :align="item?.align || 'center'"
        />
        <!-- 其他列 -->
        <el-table-column
          v-else
          :show-overflow-tooltip="item?.tooltip"
          :prop="item?.prop"
          :label="item?.label"
          :width="item?.width"
          :align="item?.align || 'center'"
        />
      </template>
    </el-table>
    <div class="table-foot">
      <LnPagination
        :paginationConfig="props.config"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
      />
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
