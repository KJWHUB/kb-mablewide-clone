<script setup lang="ts">
import dayjs from "dayjs";
import { Chart } from "highcharts-vue";
import type { ChartData } from "~/server/api/major/indices.get";
import { CARD_TYPE_COLORS, type CardTypes } from "../page/home/major-indices/card-type";

interface Props {
  chartData: ChartData;
  cardType: CardTypes;
}

const processData = (rawData: ChartData) => {
  // 모두 tm 값이 존재하고, dt 값이 모두 일치할 경우
  const isTm = rawData.OUT2.every((item) => item.tm.trim() !== "") && rawData.OUT2.every((item) => item.dt === rawData.OUT2[0].dt);

  if (isTm) {
    return rawData.OUT2.map((item) => ({
      x: parseInt(item.tm),
      y: parseFloat(item.clsPrcP4.trim()),
    })).sort((a, b) => a.x - b.x);
  }

  // default 날짜값
  return rawData.OUT2.map((item) => ({
    x: dayjs(item.dt, "YYYYMMDD").valueOf(),
    y: parseFloat(item.clsPrcP4.trim()),
  })).sort((a, b) => a.x - b.x);
};

const props = defineProps<Props>();

const chartOptions = ref<Highcharts.Options>({
  accessibility: {
    enabled: false,
  },
  chart: {
    type: "line",
    margin: 0,
    backgroundColor: "transparent",
    width: 60,
    height: 30,
  },
  title: { text: undefined },
  xAxis: { visible: false },
  yAxis: { visible: false },
  tooltip: { enabled: false },
  legend: { enabled: false },
  credits: { enabled: false },
  plotOptions: {
    series: {
      enableMouseTracking: false,
      animation: false,
      states: { hover: { enabled: false } },
    },
  },
  series: [
    {
      type: "line",
      data: [],
      color: CARD_TYPE_COLORS[props.cardType], // 빨간색 선
      lineWidth: 2, // 선 두께를 약간 줄임
      marker: { enabled: false },
    },
  ],
});

onMounted(() => {
  const rawData = props.chartData;
  const processedData = processData(rawData);

  if (chartOptions.value?.series?.[0]) {
    const seriesItem = chartOptions.value.series[0];

    // TODO: type error 해결
    // @ts-ignore
    seriesItem.data = processedData;
  }
});
</script>

<template>
  <ClientOnly>
    <div class="graph-wrap">
      <Chart :options="chartOptions" />
    </div>
  </ClientOnly>
</template>

<style scoped>
.graph-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;

  overflow: hidden;
}
</style>
