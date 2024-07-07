<script setup lang="ts"></script>

<template>
  <header class="header">
    <div style="display: flex">
      <!-- search -->
      <HeaderSearch />
      <!-- Real-time popularity -->
      <HeaderRealTimePopular />
    </div>
    <div>
      <!-- download -->
      <!-- notice -->

      <!-- login -->
      <!-- app info -->
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 1.6rem;
  background-color: var(--background-color);
}
</style>
