<script setup lang="ts">
interface Props {
  item: {
    id: string;
    imgUrl: string;
  };
}

const props = defineProps<Props>();
</script>

<template>
  <div class="cock-pick-item">
    <div class="img-wrap">
      <img :src="props.item.imgUrl" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cock-pick-item {
  border-radius: 0.8rem;
  background: var(--bg_type12);
  overflow: hidden;

  .img-wrap {
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
