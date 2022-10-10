<script lang="ts" setup>
import { Close } from "@element-plus/icons-vue";
import { tr } from "element-plus/es/locale";
import { watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String || Number,
    default: 100,
  },
  title: {
    type: String,
    default: "弹窗标题",
  },
});
const emit = defineEmits(["update:modelValue", "close"]);

// 点击弹窗关闭
const handleClose = () => {
  emit("update:modelValue", false);
};
watch(
  () => props.modelValue,
  () => {
    if (!props.modelValue) {
      emit("close", {});
    }
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <transition name="el-zoom-in-center">
    <div v-if="modelValue" class="ln-dialog">
      <div id="mask"></div>
      <div class="ln-dialog-content" :style="{ width: props.width }">
        <div class="content-header">
          <span>{{ props.title }}</span>
          <el-icon @click="handleClose" class="header-close" :size="21">
            <Close />
          </el-icon>
        </div>
        <div class="content-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.ln-dialog {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transform: translatey(-100%);
  #mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .ln-dialog-content {
    transition: 300ms;
    position: absolute;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    .content-header {
      padding: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      font-size: 18px;
      position: sticky;
      .header-close {
        transition: 300ms;
        cursor: pointer;
        border-radius: 50%;
      }
      .header-close:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    .content-body {
      width: 100%;
      flex: 1;
      padding: 8px;
    }
  }
}
</style>
