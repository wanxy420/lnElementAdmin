<script lang="ts" setup>
const props = defineProps({
  tableData: {
    type: Array<any>,
    default: () => [],
  },
});
</script>
<template>
  <el-table
    :data="props.tableData"
    stripe
    border
    height="2000"
    style="width: 100%"
  >
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
