<script lang="ts">
export type StockThemeItem = {
  rank: number;
  name: string;
  changePercent: number;
};
</script>

<script setup lang="ts">
interface Props {
  item: StockThemeItem;
}

const props = defineProps<Props>();

const item = reactive(props.item);

const { rank, changePercent, name } = toRefs(item);

const color = computed(() => {
  if (changePercent.value > 0) {
    return "up";
  } else if (changePercent.value < 0) {
    return "down";
  } else {
    return "inherit";
  }
});
const changePercentText = computed(() => `${changePercent.value}%`);
</script>

<template>
  <li class="stock-theme-item">
    <p class="rank">{{ rank }}</p>
    <p class="name">{{ name }}</p>
    <p class="change-percent" :class="{ [color]: true }">{{ changePercentText }}</p>
  </li>
</template>

<style scoped lang="scss">
$up-color: var(--text_up);
$down-color: var(--text_down);

.stock-theme-item {
  display: grid;
  grid-template-columns: 2.7rem auto 1fr;

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

  .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.1rem;
  }

  .change-percent {
    text-align: right;
    padding-left: 1.6rem;
    position: relative;
    font-size: 1.4rem;
    line-height: 1.4rem;
    white-space: nowrap;

    &.up {
      color: $up-color;
    }

    &.down {
      color: $down-color;
    }
  }
}
</style>
