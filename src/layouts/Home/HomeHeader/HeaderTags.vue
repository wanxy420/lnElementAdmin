<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue";
import useStore from "@/store";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<template>
  <el-tag class="mx-1" size="large" closable>Large</el-tag>
  <el-tag class="mx-1" size="large" closable>Large</el-tag>
  <el-tag class="mx-1" size="large" closable>Large</el-tag>
</template>

<style lang="less" scoped></style>
