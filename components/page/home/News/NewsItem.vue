<script setup lang="ts">
interface Props {
  item: {
    title: string;
    companyName: string;
    date: string;
    imgUrl: string;
  };
}

const props = defineProps<Props>();

const title = computed(() => props.item.title);
const companyName = computed(() => props.item.companyName);
const date = computed(() => props.item.date);
const imgUrl = computed(() => props.item.imgUrl);
</script>

<template>
  <div class="news-item">
    <!-- info -->
    <div class="info">
      <p class="title">{{ title }}</p>
      <div class="detail">
        <p>{{ companyName }}</p>
        <p>{{ date }}</p>
      </div>
    </div>

    <!-- company-logo -->
    <div class="company-img">
      <img :src="imgUrl" :alt="title" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-item {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid var(--brd_type04);

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    overflow: hidden;
    height: 6.4rem;

    .title {
      font-size: 1.6rem;
      color: inherit;
      line-height: 1.8rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .detail {
      position: relative;
      display: flex;
      gap: 1.7rem;

      font-size: 1.3rem;
      line-height: 2rem;
      color: var(--text_type03);
      align-items: center;
      white-space: nowrap;

      p {
        position: relative;
        &:first-child::before {
          content: "";
          display: block;
          width: 0.1rem;
          height: 1rem;
          position: absolute;
          right: -0.9rem;
          top: calc(50% - 0.5rem);
          background: var(--brd_type02);
        }
      }
    }
  }

  .company-img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0.8rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
