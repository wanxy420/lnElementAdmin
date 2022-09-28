<script lang="ts" setup>
import LoginFrom from "./LoginFrom.vue";
</script>
<template>
  <div class="login_container">
    <div class="login_view">
      <LoginFrom />
    </div>
  </div>
</template>

<style lang="less" scoped>
@media screen and (max-width: 750px) {
  .login_view {
    width: 100%;
  }
}

@media screen and (min-width: 750px) {
  .login_view {
    width: 400px;
  }
}
.login_container {
  width: 100vw;
  height: 100vh;
  display: flex;
  .login_view {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    backdrop-filter: blur(20px);
    box-shadow: var(--el-box-shadow-lighter);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
