<script setup lang="ts">
const title = "내가 원하는 주식 찾기" as const;

const { data } = useFetch("/api/wish", {
  method: "GET",
});

const { tableDataComputed } = useTableData({ data });
</script>

<template>
  <div class="stock-search">
    <!-- title -->
    <TitleHomeSection :title="title" right-arrow />

    <!-- list -->
    <PageHomeStockList :table-data="tableDataComputed" />
  </div>
</template>

<style scoped></style>
