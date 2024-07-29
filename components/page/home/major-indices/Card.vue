<script setup lang="ts">
import type { MainIndex } from "~/server/api/major/indices.get";
import { CARD_TYPES } from "./card-type";

interface Props {
  item: MainIndex;
}

const props = defineProps<Props>();

const { item } = toRefs(props);

const cardType = computed(() => calculateCardType(item.value));

function calculateCardType(item: MainIndex) {
  const value = Number(item.IDX_DATA.bdyCmprRP2.trim());
  if (value > 0) {
    return CARD_TYPES.UP;
  } else if (value < 0) {
    return CARD_TYPES.DOWN;
  } else {
    return CARD_TYPES.NO_CHANGE;
  }
}

const priceFormat = (price: string) => {
  const trim = price.trim();
  if (trim[0] === "-") {
    return trim.slice(1);
  }
  return trim;
};

const rateFormat = (rate: string) => {
  const trim = rate.trim();
  if (trim[0] === "-") {
    return `(${trim.slice(1)})%`;
  }
  return `(${trim})%`;
};
</script>

<template>
  <div
    class="major-card"
    :class="{
      [cardType]: true,
    }"
  >
    <div class="content">
      <p class="title">{{ item.IDX_DATA.isCdNm }}</p>
      <strong class="price">{{ item.IDX_DATA.clsPrcP2 }}</strong>
      <p class="previous-day-comparison">
        <!-- icon -->
        <span>
          <SvgoIncrease v-if="cardType === CARD_TYPES.UP" />
          <SvgoDecrease v-else-if="cardType === CARD_TYPES.DOWN" />
          <template v-else-if="cardType === CARD_TYPES.NO_CHANGE"> = </template>
        </span>
        <!-- price -->
        <span>{{ priceFormat(item.IDX_DATA.bdyCmprP2 || item.IDX_DATA.bdyCmpr || "") }}</span>
        <!-- rate -->
        <span>{{ rateFormat(item.IDX_DATA.bdyCmprRP2) }}</span>
      </p>
    </div>

    <!-- chart -->
    <ChartHomeMajor :chart-data="item.CHART_DATA" :cardType="cardType" />
  </div>
</template>

<style scoped lang="scss">
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
      display: flex;
      margin-top: 0.5rem;
      font-size: 1.4rem;

      span {
        display: inline-block;
        margin-right: 0.3rem;

        &:nth-child(1) {
          width: 1.4rem;
          height: 1.4rem;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      // nth-child(1)은 icon
      // nth-child(2)는 price
      // nth-child(3)는 rate
    }
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
</style>
