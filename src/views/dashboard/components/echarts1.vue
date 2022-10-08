<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import { onMounted, reactive, ref, defineProps, watch } from "vue";
import * as echarts from "echarts"; // 引入echarts

const container = ref(null);
const chart = ref(null);

const theme = "";
const options = reactive({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
});

//组件挂载后将echarts挂载在container上，并将给echarts设置传入的options
onMounted(() => {
  chart.value = echarts.init(container.value, props.options.theme);
  chart.value.setOption(props.options);
});

//监听options发生变化时，重新给echarts设置传入的options
watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions);
  },
  { deep: true }
);
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
