<script setup lang="ts">
import Item, { type StockItem } from "./Item.vue";

export type TableData = {
  id: string;
  title: string;
  data: StockItem[];
};

const props = defineProps<{
  tableData: TableData[];
}>();
</script>

<template>
  <div class="stock-list-wrap home-list">
    <div v-for="table in props.tableData" :key="table.id" class="stock-list">
      <!-- title -->
      <TitleHomeSection :title="table.title" right-arrow size="small" />

      <!-- list -->
      <ul>
        <Item v-for="item in table.data" :key="item.id" :item="item" />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stock-list-wrap {
  margin-top: 2.4rem;

  .stock-list {
    flex: 1;

    > ul {
      min-height: 20.5rem;
      margin-top: 2rem;
      border-top: 0.1rem solid var(--brd_type03);
    }
  }
}
</style>
