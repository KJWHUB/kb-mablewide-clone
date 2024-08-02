<script lang="ts">
export type StockItem = {
  id: string;
  rank: number;
  imgUrl: string;
  name: string;
  currentPrice: number;
  priceDiff: number;
  priceDiffRate: number;
  priceDiffType: "up" | "down" | "superUp" | "superDown";
};

export const getPriceDiffType = (priceDiffRate: number): StockItem["priceDiffType"] => {
  if (priceDiffRate > 25) {
    return "superUp";
  } else if (priceDiffRate < -25) {
    return "superDown";
  } else if (priceDiffRate > 0) {
    return "up";
  } else if (priceDiffRate < 0) {
    return "down";
  } else {
    return "superUp";
  }
};
</script>

<script setup lang="ts">
interface Props {
  item: StockItem;
}

const props = defineProps<Props>();

const { rank, imgUrl, name, currentPrice, priceDiff, priceDiffRate, priceDiffType } = toRefs(props.item);

const price = computed(() => `${numberWithCommas(currentPrice.value)}원`);
const priceDiffText = computed(() => `${numberWithCommas(priceDiff.value)}원 (${deleteMinusSign(priceDiffRate.value)}%)`);
</script>

<template>
  <li class="stock-item">
    <p class="rank">{{ rank }}</p>
    <img class="stock-img" :src="imgUrl" :data-src="imgUrl" data-error="/images/stockDefault/Stock_default_kosdaq.png" :alt="name" />
    <p class="name">{{ name }}</p>
    <div class="price">
      <p class="current-price">{{ price }}</p>
      <p class="change-price" :class="{ [priceDiffType]: true }">
        {{ priceDiffText }}
      </p>
    </div>
  </li>
</template>

<style scoped lang="scss">
$up-color: var(--text_up);
$down-color: var(--text_down);

$up-bg-url: url("@/assets/icons/increase.svg");
$down-bg-url: url("@/assets/icons/decrease.svg");
$super-up-bg-url: url("@/assets/icons/super-increase.svg");
$super-down-bg-url: url("@/assets/icons/super-decrease.svg");

.stock-item {
  display: grid;
  grid-template-columns: 2.7rem 2.8rem auto 1fr;

  display: inline-grid;
  gap: 0.8rem;
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.1rem;
  padding: 1rem 0 0.9rem;
  border-bottom: 0.1rem solid var(--brd_type03);
  align-items: center;

  .rank {
    text-align: center;
    font-weight: 600;
    color: var(--text_type01);
  }

  .stock-img {
    width: 2.8rem;
    height: 2.8rem;
    object-fit: cover;
  }

  .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.1rem;
  }

  .price {
    text-align: right;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.4rem;

    .current-price {
      font-size: 1.4rem;
      line-height: 2.1rem;
      font-weight: 400;
    }

    .change-price {
      padding-left: 1.6rem;
      position: relative;
      font-size: 1.2rem;
      line-height: 1.4rem;
      white-space: nowrap;

      &::before {
        content: "";
        display: none;
        width: 1.2rem;
        height: 1.2rem;
        background-color: currentColor;
        mask: $up-bg-url no-repeat center / contain;
        position: absolute;
        top: calc(50% - 0.6rem);
        left: 0;
      }

      &.up {
        color: $up-color;

        &::before {
          display: block;
          mask: $up-bg-url no-repeat center / contain;
        }
      }

      &.down {
        color: $down-color;

        &::before {
          display: block;
          mask: $down-bg-url no-repeat center / contain;
        }
      }

      &.superUp {
        color: $up-color;

        &::before {
          display: block;
          mask: $super-up-bg-url no-repeat center / contain;
        }
      }

      &.superDown {
        color: $down-color;

        &::before {
          display: block;
          mask: $super-down-bg-url no-repeat center / contain;
        }
      }
    }
  }
}
</style>
