<script setup lang="ts">
import Item, { getPriceDiffType, type StockItem } from "./Item.vue";

const { data } = useFetch("/api/rank", {
  method: "GET",
});

console.log("data:::", data);

type TableData = {
  id: string;
  title: string;
  data: StockItem[];
};

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
  <div class="stock-list-wrap home-list">
    <div v-for="table in tableDataComputed" :key="table.id" class="stock-list">
      <!-- title -->
      <TitleHomeSection :title="table.title" right-arrow size="small" />

      <!-- list -->
      <ul>
        <Item v-for="item in table.data" :key="item.id" :item="item" />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stock-list-wrap {
  margin-top: 2.4rem;

  .stock-list {
    flex: 1;

    > ul {
      min-height: 20.5rem;
      margin-top: 2rem;
      border-top: 0.1rem solid var(--brd_type03);
    }
  }
}
</style>
