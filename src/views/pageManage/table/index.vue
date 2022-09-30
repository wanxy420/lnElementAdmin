<script lang="ts" setup>
import LnTable from "@/components/lnTable/LnTable.vue";
import { ref } from "vue";

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
const tableColumn = ref<Array<lnTableColumnType>>([
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
const config = ref<lnTableConfig>({
  isPagination: true,
  total: 10,
  page: 1,
  size: 10,
});
</script>
<template>
  <div>
    <ln-table
      :table-data="tableData"
      :table-column="tableColumn"
      :config="config"
    ></ln-table>
  </div>
</template>
