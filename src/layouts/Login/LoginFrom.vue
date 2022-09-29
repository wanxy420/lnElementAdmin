<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { lnLoading, lnHideLoading } from "@/utils/fun";

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入登录账号",
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入登录密码",
      trigger: "change",
    },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: any) => {
    if (valid) {
      onLogin();
    }
  });
};

const onLogin = () => {
  lnLoading("登录中...");
  try {
  } finally {
    lnHideLoading();
  }
};
</script>
<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="80px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input v-model="ruleForm.username" placeholder="登录账号" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        placeholder="登录密码"
      />
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
</template>
