<script setup lang="ts"></script>

<template>
  <header class="header">
    <!-- search -->
    <HeaderSearch />
    <!-- Real-time popularity -->
    <HeaderRealTimePopular />
    <div>
      1
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
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 1.6rem;
  background-color: var(--background-color);
}
</style>
