<script setup lang="ts">
import Item, { type StockThemeItem } from "./item.vue";

export type TableData = {
  id: string;
  title: string;
  totalUpdownPercent: number;
  data: StockThemeItem[];
};

const props = defineProps<{
  tableData: TableData[];
}>();
</script>

<template>
  <div class="stock-theme-list-wrap home-list">
    <div v-for="table in props.tableData" :key="table.id" class="stock-theme-list">
      <!-- title -->
      <TitleHomeSection :title="table.title" size="small" />

      <!-- percent -->
      <h4 class="total-updown-percent">{{ table.totalUpdownPercent }}%</h4>

      <!-- list -->
      <ul>
        <Item v-for="item in table.data" :key="item.rank" :item="item" />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stock-theme-list-wrap {
  margin-top: 2.4rem;

  .stock-theme-list {
    flex: 1;

    .total-updown-percent {
      color: var(--text_up);
      margin-top: 0.2rem;
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 3.6rem;
    }

    > ul {
      min-height: 20.5rem;
      margin-top: 2rem;
      border-top: 0.1rem solid var(--brd_type03);
    }
  }
}
</style>
