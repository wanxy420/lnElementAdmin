<script lang="ts" setup>
const generateColumns = (length = 10, prefix = "column-", props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }));

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = "row-"
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    );
  });

const columns = generateColumns(10);
const data = generateData(columns, 1000);
</script>
<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :width="1650"
    :height="900"
    style="width: 100%; height: 100%"
  />
</template>

<style lang="less" scoped></style>
