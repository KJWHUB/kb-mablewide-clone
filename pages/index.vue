<script setup lang="ts">
const visible = ref(false);
</script>

<template>
  <div>
    <button @click="visible = true">Open Dialog</button>
    <!-- modal -->
    <DialogLogin v-model="visible" />
  </div>
</template>

<style></style>
