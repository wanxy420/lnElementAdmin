<script lang="ts" setup>
import { PropType } from "vue";
import LnPagination from "../LnPagination/LnPagination.vue";
import useStore from "@/store";

const { config } = useStore();
const emit = defineEmits([
  "handleSizeChange",
  "handleCurrentChange",
  "handleSelectionChange",
]);
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
const handleSelectionChange = (selection: any) => {
  emit("handleSelectionChange", selection);
  console.log("selection", selection);
};

// 获取对应列名
const getPropsName = (val: string): string => {
  let index = props.tableColumn.findIndex((x) => x.columnPostion === val);
  if (index >= 0) return props.tableColumn[index]?.prop || "";
  else return props.tableColumn[0]?.prop || "";
};
</script>
<template>
  <div class="table-content">
    <template v-if="!config.isMobile">
      <el-table
        :data="props.tableData"
        stripe
        style="width: 100%; flex: 1"
        @selection-change="handleSelectionChange"
      >
        <template v-for="(item, index) in props.tableColumn" :key="index">
          <!-- 插槽列 -->
          <el-table-column
            v-if="item?.type === 'slot'"
            :fixed="item?.fixed"
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
            :fixed="item?.fixed"
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
            :fixed="item?.fixed"
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
            :fixed="item?.fixed"
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
    </template>
    <template v-else>
      <el-card
        shadow="hover"
        v-for="(item, index) in props.tableData"
        style="margin: 4px 0; height: auto"
        :key="index"
      >
        <template #header>
          <div style="display: flex; justify-content: space-between">
            <span>{{ item[getPropsName("titleLeft")] }}</span>
            <span>{{ item[getPropsName("titleRight")] }}</span>
          </div>
        </template>
        <template v-for="(itemC, indexC) in props.tableColumn">
          <div :key="indexC" v-if="!itemC?.columnPostion && item">
            <template v-if="itemC.type === 'slot'">
              <span>{{ itemC?.label }}:</span>
              <span style="margin-left: 8px">
                <slot :name="itemC?.slotName" :row="item"></slot>
              </span>
            </template>
            <template v-else-if="!itemC.type">
              <span>{{ itemC?.label }}:</span>
              <span style="margin-left: 8px">
                {{ item[`${itemC.prop}`] }}
              </span>
            </template>
          </div>
        </template>
      </el-card>
    </template>
  </div>
</template>

<style lang="less" scoped>
.table-content {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  overflow-x: hidden;
  overflow-y: auto;
  .table-foot {
    width: 100%;
    padding: 8px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
