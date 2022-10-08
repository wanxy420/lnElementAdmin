<script lang="ts" setup>
import LnUpload from "@/components/LnUpload/LnUpload.vue";
import { ref } from "vue";

const fileList = ref([
  {
    name: "element-plus-logo.svg",
    url: "https://element-plus.org/images/element-plus-logo.svg",
  },
  {
    name: "element-plus-logo2.svg",
    url: "https://element-plus.org/images/element-plus-logo.svg",
  },
]);
</script>
<template>
  <LnUpload v-model="fileList" />
</template>
