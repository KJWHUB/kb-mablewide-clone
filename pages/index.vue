<script setup lang="ts">
const visible = ref(true);
</script>

<template>
  <div>
    <button @click="visible = true">Open Dialog</button>
    <!-- modal -->
    <DialogLogin v-model="visible" />
  </div>
</template>

<style></style>
