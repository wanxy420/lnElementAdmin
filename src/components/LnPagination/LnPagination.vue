<script lang="ts" setup>
import { PropType, ref } from "vue";

const props = defineProps({
  paginationConfig: {
    type: Object as PropType<lnTableConfig>,
  },
});

const handleSizeChange = () => {};
const handleCurrentChange = () => {};
</script>
<template>
  <el-pagination
    :currentPage="props.paginationConfig?.page"
    :page-size="props.paginationConfig?.size"
    :page-sizes="[10, 15, 30, 50]"
    small
    background
    layout="total, prev, pager, next, sizes"
    :total="props.paginationConfig?.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<style lang="less" scoped></style>
