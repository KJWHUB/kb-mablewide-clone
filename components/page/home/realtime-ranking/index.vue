<script setup lang="ts">
import type { TableData } from "../stock/list/index.vue";
import { getPriceDiffType } from "../stock/list/Item.vue";

const title = "실시간 랭킹" as const;

const { data } = useFetch("/api/rank", {
  method: "GET",
});

const tableDataComputed = computed<TableData[]>(() => {
  if (!data.value) {
    return [];
  }

  const processData = data.value.map((table) => ({
    id: table.SORT_CD,
    title: table.TITLE,
    data: table.OUT2.map((item) => {
      const rank = Number(item.rnk);
      const imgUrl = `https://cdn.kbsec.com/logo/KR_${item.isCd}.png`;
      const currentPrice = Number(item.nowPrc);
      const priceDiff = Number(item.bdyCmpr);
      const priceDiffRate = Number(item.upDwnRP2.trim());
      const priceDiffType = getPriceDiffType(priceDiffRate);
      return {
        id: item.isCd,
        rank,
        imgUrl,
        name: item.isNm,
        currentPrice,
        priceDiff,
        priceDiffRate,
        priceDiffType,
      };
    }),
  }));

  return processData;
});
</script>

<template>
  <div class="realtime-ranking">
    <!-- title -->
    <TitleHomeSection :title="title" right-arrow />

    <!-- list -->
    <PageHomeStockList :table-data="tableDataComputed" />
  </div>
</template>

<style scoped></style>
