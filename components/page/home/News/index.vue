<script setup lang="ts">
import type { NewsKeyType } from "~/server/api/news/index.get";
import NewsList from "./NewsList.vue";
import { processNewsData } from "./fn";

// title
const title = "이 시각 뉴스" as const;
// tabs
const tabs: { id: NewsKeyType; title: string }[] = [
  { id: "ECONOMY", title: "실시간 경제" },
  { id: "HEADLINE", title: "주요 뉴스" },
  { id: "POPULAR", title: "인기뉴스" },
] as const;

const activeTabId = ref<NewsKeyType>("ECONOMY");

const { data, status, error } = useFetch(`/api/news`, {
  method: "GET",
  query: {
    newsType: activeTabId,
  },
});

// news data
const newsData = computed(() => {
  if (data.value) {
    return processNewsData(data.value);
  }
  return null;
});
</script>

<template>
  <div class="main-news">
    <div class="top">
      <!-- title -->
      <TitleHomeSection :title="title" right-arrow />

      <!-- tabs -->
      <div class="tabs-wrap">
        <Tabs
          v-model="activeTabId"
          :options="tabs"
          :option-label="(option) => option.title"
          :option-value="(option) => option.id"
          style-id="text-divider"
        />
      </div>
    </div>

    <div class="content">
      <template v-if="newsData">
        <NewsList :news="newsData" />
      </template>

      <div v-else-if="status === 'pending'" style="font-size: 2rem">loading...</div>
      <div v-else-if="status === 'error'" style="color: red; font-size: 2rem">
        {{ error?.data.message || "뉴스 데이터를 가져오는데 실패했습니다." }}
      </div>
    </div>
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
