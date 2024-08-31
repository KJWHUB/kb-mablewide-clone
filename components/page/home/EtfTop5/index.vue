<script setup lang="ts">
import type { Etftop5 } from "~/server/api/etf-top5/index.get";
import type { TableData } from "../stock/etf-top5/index.vue";

const title = "ETF TOP5" as const;

const { data } = useFetch("/api/etf-top5", {
  method: "GET",
});

const { tableDataComputed } = useThemeTableData({ data });

function useThemeTableData({ data }: { data: Ref<Etftop5[] | null> }) {
  const processItemData = (etftop5Item: Etftop5) => {
    return etftop5Item.OUT2.map((item, i) => {
      return {
        rank: i + 1,
        name: item.isNm,
        changePercent: Number(item.upDwnRP2?.trim() || item.bdyCmprUpDwnRP2?.trim() || item.acmlDlTwAmt || 0),
        amountType: item.acmlDlTwAmt ? true : false,
      };
    }).slice(0, 5);
  };

  const processData = (data: Etftop5[]) => {
    const tableData: TableData[] = data.map((etftop5Item) => ({
      id: etftop5Item.ETF_AREA_NM,
      title: etftop5Item.ETF_AREA_NM,
      data: processItemData(etftop5Item),
    }));

    return tableData;
  };

  const tableData = computed(() => {
    if (!data.value) return [];
    return processData(data.value);
  });

  return {
    tableDataComputed: tableData,
  };
}
</script>

<template>
  <div>
    <!-- title -->
    <TitleHomeSection :title="title" />

    <!-- list -->
    <PageHomeStockEtfTop5 :table-data="tableDataComputed" />
  </div>
</template>

<style scoped></style>
