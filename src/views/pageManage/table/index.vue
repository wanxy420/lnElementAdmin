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
</script>
<template>
  <div>
    <ln-table :table-data="tableData"></ln-table>
  </div>
</template>
