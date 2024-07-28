import { defineNuxtPlugin } from "#app";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";

export default defineNuxtPlugin((nuxtApp) => {
  stockInit(Highcharts);
  nuxtApp.vueApp.use(HighchartsVue);
});
