<script setup lang="ts">
import type { CockPick } from "~/server/api/cock-pick/index.get";
import Item from "./Item.vue";

const title = "쉽게 읽는 투자정보" as const;

const { data } = useFetch("/api/cock-pick", {
  method: "GET",
});

const processList = (list: CockPick[]) => {
  return list.map((item) => ({
    id: item.nxtKey,
    imgUrl: item.prcdExpsrImgPathNmC,
  }));
};

const dataComputed = computed(() => {
  if (!data.value) {
    return [];
  }

  return processList(data.value);
});

console.log(data);
</script>

<template>
  <div>
    <!-- title -->
    <TitleHomeSection :title="title" right-arrow />

    <!-- card -->
    <ClientOnly>
      <Swiper :slides-per-view="4" :space-between="30" style="margin-top: 2.4rem; overflow: visible">
        <template v-for="item in dataComputed" :key="item">
          <SwiperSlide class="hover-move-up">
            <Item :item="item" />
          </SwiperSlide>
        </template>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
