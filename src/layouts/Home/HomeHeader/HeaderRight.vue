<script lang="ts" setup>
import useStore from "@/store";
import { useRouter } from "vue-router";

const router = useRouter();
const { home } = useStore();

const logOut = () => {
  localStorage.clear();
  home.$reset();
  router.replace("/");
};
</script>
<template>
  <div class="header-right">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.header-right {
  padding: 5px;
  background-color: white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.header-right:hover {
  transition: all 0.5s;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}
</style>
