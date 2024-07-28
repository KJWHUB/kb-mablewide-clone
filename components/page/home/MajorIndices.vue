<script setup lang="ts">
import type { MainIndex, MajorIndicesResponse } from "~/server/api/major/indices.get";

type CardTypes = "up" | "down" | "no-change";
const CARD_TYPES: Record<string, CardTypes> = {
  UP: "up",
  DOWN: "down",
  NO_CHANGE: "no-change",
};

const majorIndices = ref<MajorIndicesResponse>([]);

const fetchMajorIndices = async () => {
  const res = await useFetch<MajorIndicesResponse>("/api/major/indices", {
    method: "GET",
  });

  console.log(res.data.value[0]);

  // * 2 depth deep copy
  // why: 스와이퍼 라이브러리에서 루프 모드에서 슬라이드의 양은 최소한 slidesPerView 값의 2배여야 합니다
  // doc: https://swiperjs.com/migration-guide-v9#loop-mode
  const copy = JSON.parse(JSON.stringify(res.data.value));
  const copy2 = JSON.parse(JSON.stringify(res.data.value));

  const concatArr = copy.concat(copy2);

  majorIndices.value = concatArr || [];
};

const rateFormat = (rate: string) => {
  return `(${rate.trim()})%`;
};

const calculateCardType = (item: MainIndex) => {
  const value = Number(item.IDX_DATA.bdyCmprRP2.trim());
  if (value > 0) {
    return CARD_TYPES.UP;
  } else if (value < 0) {
    return CARD_TYPES.DOWN;
  } else {
    return CARD_TYPES.NO_CHANGE;
  }
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
        :autoplay="{
          delay: 1500,
        }"
        :speed="1000"
        :slides-per-view="5"
        :space-between="24"
        style="width: 100%"
      >
        <template v-for="(item, i) in majorIndices" :key="item.MARKET + i">
          <SwiperSlide>
            <div
              class="major-card"
              :class="{
                [calculateCardType(item)]: true,
              }"
            >
              <div class="content">
                <p class="title">{{ item.IDX_DATA.isCdNm }}</p>
                <strong class="price">{{ item.IDX_DATA.clsPrcP2 }}</strong>
                <p class="previous-day-comparison">
                  <!-- icon -->
                  <span />
                  <!-- price -->
                  <span>{{ item.IDX_DATA.bdyCmprP2 || item.IDX_DATA.bdyCmpr }}</span>
                  <!-- rate -->
                  <span>{{ rateFormat(item.IDX_DATA.bdyCmprRP2) }}</span>
                </p>
              </div>
              <div class="graph" />
            </div>
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

  .major-card {
    position: relative;
    display: flex;
    flex-shrink: 0;
    padding: 1.6rem 2.4rem;
    color: inherit;
    overflow: hidden;

    .content {
      flex: 1;

      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 1.4rem;
        line-height: 2.1rem;
      }

      .price {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 0.4rem;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.7rem;
      }

      .previous-day-comparison {
        margin-top: 0.5rem;
        font-size: 1.4rem;
      }
    }
    .graph {
      width: 6rem;
    }

    &::before {
      pointer-events: none;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 0.8rem;
      opacity: 0.08;
    }

    &.up {
      .content {
        .previous-day-comparison {
          color: var(--up);
        }
      }
      &::before {
        background: var(--up);
      }
    }

    &.down {
      .content {
        .previous-day-comparison {
          color: var(--down);
        }
      }
      &::before {
        background: var(--down);
      }
    }

    &.no-change::before {
      background: var(--zero);
    }
  }
}

.major-indices {
  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        // flex-shrink: 0 !important;
        // width: 24.2rem !important;
      }
    }
  }
}
</style>
