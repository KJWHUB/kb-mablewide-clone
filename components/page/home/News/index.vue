<script setup lang="ts">
const title = "이 시각 뉴스";

const tabs = [
  { id: "HEADLINE", title: "실시간 경제" },
  { id: "ECONOMY", title: "주요 뉴스" },
  { id: "POPULAR", title: "인기뉴스" },
];

const activeTabId = ref<string>("HEADLINE");
</script>

<template>
  <div class="main-news">
    <div class="top">
      <!-- title -->
      <TitleHomeSection :title="title" right-arrow />

      <!-- tabs -->
      <div class="tabs-wrap">
        <Tabs v-model="activeTabId" :tabs="tabs" style-id="text-divider" />
      </div>
    </div>

    <div class="content">content</div>
  </div>
</template>

<style scoped lang="scss">
.main-news {
  position: relative;
  .tabs-wrap {
    position: absolute;
    top: 0.75rem;
    right: 1.2rem;
  }
}
</style>
