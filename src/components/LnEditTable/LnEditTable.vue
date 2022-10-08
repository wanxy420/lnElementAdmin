<script lang="ts" setup>
const tableData = [
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
];

const props = defineProps({
  // 表格值
  tableData: {
    type: Array,
  },
});
</script>
<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date">
      <template #default="scope">
        <el-tag
          :type="scope.row.date === 'Home' ? '' : 'success'"
          disable-transitions
          >{{ scope.row.date }}</el-tag
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped></style>
