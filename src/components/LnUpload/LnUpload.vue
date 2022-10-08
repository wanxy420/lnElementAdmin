<script lang="ts" setup>
import { ref, PropType } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

import type { UploadProps, UploadUserFile } from "element-plus";

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfert of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};

const props = defineProps({
  modelValue: {
    type: Array<UploadUserFile>,
  },
  // 组件配置
  config: {
    type: Object as PropType<lnUploadConfigType>,
  },
  // 上传文件请求路径
  action: {
    type: String,
  },
  // 上传文件请求头
  headers: {
    type: Object,
  },
  // 上传文件携带的参数
  data: {
    type: Object,
  },
});
</script>
<template>
  <el-upload
    :show-file-list="props?.config?.showlist"
    v-model:file-list="props.modelValue"
    class="upload-demo"
    :action="props?.action"
    :multiple="props?.config?.multiple"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="props?.config?.limit || 1"
    :on-exceed="handleExceed"
    :headers="props?.headers"
    :data="props?.data"
  >
    <slot name="default">
      <el-button type="primary">点击上传</el-button>
    </slot>
    <template #tip>
      <div class="el-upload__tip">
        {{ props?.config?.tip }}
      </div>
    </template>
  </el-upload>
</template>
