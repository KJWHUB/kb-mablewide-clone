<script setup lang="ts">
import { Chart } from "highcharts-vue";

const chartOptions = ref<Highcharts.Options>({
  chart: {
    type: "line",
  },
  title: {
    text: "Fruit Consumption",
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges", "Grapes", "Apples", "Bananas", "Oranges", "Grapes"],
  },
  yAxis: {
    title: {
      text: "Fruit eaten",
    },
  },
  series: [
    {
      name: "Jane",
      type: "line",
      data: [1, 0, 4, 3, 2, 5],
    },
    {
      name: "John",
      type: "line",
      data: [5, 7, 3, 4, 7, 2],
    },
  ],
});
</script>

<template>
  <ClientOnly>
    <div class="graph-wrap">1</div>
    <Chart :options="chartOptions" />
  </ClientOnly>
</template>

<style scoped>
.graph-wrap {
  position: relative;
  width: 6rem;
  height: 100%;
}
</style>
