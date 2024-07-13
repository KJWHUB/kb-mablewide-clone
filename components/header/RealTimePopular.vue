<script setup lang="ts">
type Status = "DOMESTIC" | "OVERSEAS";
enum StatusLabel {
  DOMESTIC = "국내",
  OVERSEAS = "해외",
}

type ListItem = {
  id: string;
  name: string;
};

const status = ref<Status>("DOMESTIC");
const statusLabel = computed(() => StatusLabel[status.value]);
const list = ref<ListItem[]>([]);

const fetchList = async () => {
  const a = await useFetch("/api/real-time/popular", {
    method: "GET",
  });

  console.log("a", a);
};

fetchList();
</script>

<template>
  <div class="real-time-popular">
    <strong class="title">실시간 인기</strong>
    <!-- <div class="real-time-popular-list-wrap">
      <p>{{ statusLabel }}</p>
      <ul>
        <li v-for="(item, i) in list" :key="item.id">
          {{ `${i + 1}. ${item.name}` }}
        </li>
      </ul>
    </div> -->
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 2000,
        // disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <strong>{{ slide }}</strong>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.real-time-popular {
  display: flex;
  .title {
    color: var(--text_brand);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 3.2rem;
  }
}
</style>
