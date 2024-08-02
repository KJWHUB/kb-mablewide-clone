<script setup lang="ts">
import type { NewsData } from "./fn";
import NewsItem from "./NewsItem.vue";

interface Props {
  news: NewsData;
}

const props = defineProps<Props>();

const news = computed(() => props.news);
</script>

<template>
  <ul class="news-list home-list">
    <li v-for="(newsList, key) in news" :key="key">
      <NewsItem v-for="(item, index) in newsList" :key="index" :item="item" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.news-list {
  min-height: 20.5rem;

  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    overflow: hidden;
  }
}
</style>
