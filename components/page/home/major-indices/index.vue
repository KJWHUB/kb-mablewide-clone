<script setup lang="ts">
import type { MajorIndicesResponse } from "~/server/api/major/indices.get";

import Card from "./Card.vue";

const majorIndices = ref<MajorIndicesResponse>([]);

const fetchMajorIndices = async () => {
  const res = await useFetch<MajorIndicesResponse>("/api/major/indices", {
    method: "GET",
  });

  // * 2 depth deep copy
  // why: 스와이퍼 라이브러리에서 루프 모드에서 슬라이드의 양은 최소한 slidesPerView 값의 2배여야 합니다
  // doc: https://swiperjs.com/migration-guide-v9#loop-mode
  const copy = JSON.parse(JSON.stringify(res.data.value));
  const copy2 = JSON.parse(JSON.stringify(res.data.value));

  const concatArr = copy.concat(copy2);

  majorIndices.value = concatArr || [];
};

fetchMajorIndices();
</script>

<template>
  <div class="major-indices">
    <ClientOnly>
      <Swiper
        ref="swiperRef"
        :modules="[SwiperAutoplay]"
        :loop="true"
        :looped-slides="6"
        :autoplay="{
          delay: 1500,
        }"
        :speed="1000"
        :slides-per-view="6"
        :space-between="24"
        style="width: 100%"
      >
        <template v-for="(item, i) in majorIndices" :key="item.MARKET + i">
          <SwiperSlide>
            <Card :item="item" />
          </SwiperSlide>
        </template>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.major-indices {
  position: relative;
  width: 100%;
}
</style>
