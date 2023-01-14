<template>
  <div class="ln-scroll-list">
    <div class="ln-scroll-pull" ref="boxs">
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
    <div
      @touchstart="onTouchstart"
      class="ln-scroll-body"
      v-infinite-scroll="load"
      :infinite-scroll-distance="20"
      :infinite-scroll-immediate="false"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useStore from "@/store";
import { ref, defineExpose } from "vue";

const { config } = useStore();
const emit = defineEmits(["scrollLoad", "pullLoad"]);
let disy: number = 0;
let y: number = 0;

const boxs = ref<HTMLDivElement>();
const getbox = () => boxs.value as HTMLDivElement;

// 触底加载更多
const load = () => {
  if (config.isMobile) {
    emit("scrollLoad");
  }
};

const onTouchstart = (e: TouchEvent) => {
  disy = e.changedTouches[0].pageY - y;
  getbox().style.transition = `none`;
  document.ontouchmove = fnmove;
  document.ontouchend = fnend;
};

const fnmove = (e: TouchEvent) => {
  y = e.changedTouches[0].pageY - disy;
  getbox().style.height = y / 3 + "px";
};
const fnend = (e: TouchEvent) => {
  getbox().style.transition = `0.3s sase height`;
  if (y > 50) {
    y = 50;
    emit("pullLoad");
  }
  getbox().style.height = y + "px";
  document.ontouchmove = null;
  document.ontouchend = null;
};

const hidePull = () => {
  getbox().style.height = "0px";
};

defineExpose({
  hidePull,
});
</script>
<style lang="less" scoped>
.ln-scroll-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .ln-scroll-body {
    width: 100%;
    flex: 1;
    overflow: auto;
  }

  .ln-scroll-pull {
    width: 100%;
    height: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
}

svg {
  width: 50px;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

circle {
  fill: none;
  stroke: hsl(214, 97%, 59%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
