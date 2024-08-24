<script setup lang="ts">
import type { Theme } from "~/server/api/theme/index.get";
import type { TableData } from "../stock/theme/index.vue";

const title = "요즘 돈이 몰리는 국내 테마" as const;

const { data } = useFetch("/api/theme", {
  method: "GET",
});

console.log("", data);

const { tableDataComputed } = useThemeTableData({ data });

function useThemeTableData({ data }: { data: Ref<Theme[] | null> }) {
  const processData = (data: Theme[]) => {
    const tableData: TableData[] = data.map((theme) => {
      const totalUpdownPercent = Number(theme.bdyCmprUpDwnRP2.trim());
      const data = theme.OUT2.map((item, i) => {
        return {
          rank: i + 1,
          name: item.isNm,
          changePercent: Number(item.upDwnRP2.trim()),
        };
      }).slice(0, 5);
      return {
        id: theme.thmCd,
        title: theme.thmNm,
        totalUpdownPercent,
        data,
      };
    });

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
    <TitleHomeSection :title="title" right-arrow />

    <!-- list -->
    <PageHomeStockTheme :table-data="tableDataComputed" />
  </div>
</template>

<style scoped></style>
