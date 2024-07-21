<script setup lang="ts">
const { $modal } = useNuxtApp();

const component = computed(() => {
  const content = $modal.content.value;
  return content ? ModalContents[content] : null;
});

const visible = $modal.isOpen;
</script>

<template>
  <component :is="component" v-model="visible" />
</template>

<style scoped></style>
