<script setup lang="ts">
const title = "실시간 랭킹" as const;

const { data } = useFetch("/api/rank", {
  method: "GET",
});

const { tableDataComputed } = useTableData({ data });
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
