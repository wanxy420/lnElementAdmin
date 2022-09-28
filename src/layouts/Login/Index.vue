<script lang="ts" setup></script>
<template>
  <div class="login_container">
    <div class="login_view"></div>
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
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
