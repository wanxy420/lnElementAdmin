<script lang="ts" setup>
import LnEditTable from "@/components/LnEditTable/LnEditTable.vue";
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
// 表格列配置文件
const tableColumn = ref<Array<lnEditTableColumnType>>([
  {
    type: "index",
    label: "序号",
    width: 70,
  },
  {
    label: "日期",
    prop: "date",
  },
]);
// 表格配置项
const config = ref<lnEditTableConfig>({
  isEdit: true,
  isPagination: true,
  total: 50,
  page: 1,
  size: 10,
});
</script>
<template>
  <LnEditTable
    :table-data="tableData"
    :table-column="tableColumn"
    :config="config"
  />
</template>

<style lang="less" scoped></style>
