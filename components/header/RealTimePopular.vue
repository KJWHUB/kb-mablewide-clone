<script setup lang="ts">
type Status = "KOR" | "FOR";
enum StatusLabel {
  KOR = "국내",
  FOR = "해외",
}

type PopularListItem = {
  id: number;
  name: string;
  type: Status;
};

const status = ref<Status>("KOR");
const statusLabel = computed(() => StatusLabel[status.value]);
const popularList = ref<PopularListItem[]>([]);

const fetchList = async () => {
  const res = await useFetch("/api/real-time/popular", {
    method: "GET",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createList = (list: any[]) => {
    return list.map((item, i) => {
      return {
        id: item.popular_keyword,
        name: `${i + 1}. ${item.popular_keyword}`,
        type: (item.popular_type === "1" ? "KOR" : "FOR") as Status,
      };
    });
  };

  if (res.data.value) {
    popularList.value = createList(res.data.value?.kor.row).concat(createList(res.data.value?.for.row)) || [];
  }
};

fetchList();

// BUG: 타입추적 똑바로 못함
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const slideChange = (swiper: Swiper) => {
  status.value = popularList.value[swiper.activeIndex].type;
};
</script>

<template>
  <div class="real-time-popular">
    <strong class="title">실시간인기</strong>

    <div class="status-badge-wrap">
      <span class="status-badge">{{ statusLabel }}</span>
    </div>
    <ClientOnly>
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 2000,
        }"
        :direction="'vertical'"
        style="height: 30px; margin: 0"
        @slide-change="slideChange"
      >
        <template v-for="item in popularList" :key="item.id">
          <SwiperSlide>
            <div class="popular-label-wrap">
              <strong class="popular-label">{{ item.name }}</strong>
            </div>
          </SwiperSlide>
        </template>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.real-time-popular {
  display: flex;
  gap: 1.2rem;
  flex: 1;
  align-items: center;
  .title {
    color: var(--text_brand);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 3.2rem;
  }

  .status-badge-wrap {
    display: flex;
    align-items: center;
    .status-badge {
      width: 3.1rem;

      color: var(--text_zero);
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 2rem;
      text-align: center;

      white-space: nowrap;

      border-radius: 0.4rem;

      // background-color: rgb(var(--badge04), 0.15); 변환
      background-color: rgb(rgba(178, 180, 191, 0.15), 0.15);
    }
  }

  .popular-label-wrap {
    display: flex;
    height: 100%;
    align-items: center;
    .popular-label {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: var(--text_type02);
      max-width: 17rem;
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
}
</style>
