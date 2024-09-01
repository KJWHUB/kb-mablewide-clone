<script setup lang="ts">
import CosuPickSlideItem from "./CosuPickSlideItem.vue";
const title = "국내 투자고수의 Pick" as const;

const { data } = useFetch("/api/cosu-pick", {
  method: "GET",
});

const slideList = computed(() => {
  if (!data.value) {
    return [];
  }

  return data.value.map((item) => ({
    id: item.id,
    imgUrl: item.imageUrl,
    title: item.title,
    type: item.type,
  }));
});
</script>

<template>
  <div>
    <!-- title -->
    <TitleHomeSection :title="title" />

    <!-- slide -->
    <ClientOnly>
      <Swiper :slides-per-view="5" :space-between="30" style="margin-top: 2.4rem; overflow: visible">
        <template v-for="item in slideList" :key="item.id">
          <SwiperSlide class="hover-move-up">
            <CosuPickSlideItem :item="item" />
          </SwiperSlide>
        </template>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
