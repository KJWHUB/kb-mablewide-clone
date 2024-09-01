<script setup lang="ts">
interface Props {
  item: {
    id: string;
    imgUrl: string;
    title: string;
    type: string;
  };
}

const props = defineProps<Props>();
</script>

<template>
  <div class="item">
    <img class="image" :src="props.item.imgUrl" :alt="props.item.title" />
    <div class="info">
      <p class="title">{{ props.item.title }}</p>
      <p class="type">{{ props.item.type }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  border-radius: 0.8rem;
  background: var(--bg_type12);
  overflow: hidden;

  .image {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }

  .info {
    padding: 2rem;
    .title {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 4.8rem;
    }

    .type {
      margin-top: 1.2rem;
      font-size: 1.2rem;
      line-height: 1.4rem;
      color: var(--text_type01);
    }
  }
}
</style>
