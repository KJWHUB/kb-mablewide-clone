<script setup lang="ts">
const title = "실시간 랭킹" as const;
</script>

<template>
  <div class="realtime-ranking">
    <!-- title -->
    <TitleHomeSection :title="title" right-arrow />

    <!-- list -->
    <PageHomeStockList />
  </div>
</template>

<style scoped></style>
