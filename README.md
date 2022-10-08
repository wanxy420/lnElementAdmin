# LnElementAdmin

## 自定义封装基础表格

### 示例

````vue
<script lang="ts" setup>
import LnTable from "@/components/LnTable/LnTable.vue";
import { ref } from "vue";

// 表格数据
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
// 表格列配置项
const tableColumn = ref<Array<lnTableColumnType>>([
  {
    type: "expand",
    slotName: "expandSlot",
  },
  {
    type: "index",
    label: "序号",
    width: 70,
  },
  {
    type: "selection",
    width: 70,
  },
  {
    type: "slot",
    slotName: "dateTags",
    prop: "date",
    label: "插槽",
  },
  {
    prop: "date",
    label: "时间",
  },
  {
    prop: "name",
    label: "名字",
  },
  {
    prop: "address",
    label: "地址",
  },
]);
// 表格配置项
const config = ref<lnTableConfig>({
  isPagination: true,
  total: 50,
  page: 1,
  size: 10,
});

// 点击切换页数
const handleCurrentChange = (e: any) => {
  config.value.page = e;
};
// 点击切换条数
const handleSizeChange = (e: any) => {
  config.value.size = e;
};
</script>
<template>
  <div class="contant">
    <ln-table
      :table-data="tableData"
      :table-column="tableColumn"
      :config="config"
      @handle-current-change="handleCurrentChange"
      @handle-size-change="handleSizeChange"
    >
      <template #dateTags="row">
        <el-tag>{{ row.row.date }}</el-tag>
      </template>
      <template #expandSlot="row">
        <el-tag>{{ row.row.date }}</el-tag>
      </template>
    </ln-table>
  </div>
</template>

<style lang="less" scoped>
.contant {
  width: 100%;
  height: 100%;
}
</style>
````

