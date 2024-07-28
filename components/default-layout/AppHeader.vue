<script setup lang="ts"></script>

<template>
  <header>
    <div class="main-layout-header">
      <!-- search -->
      <HeaderSearch class="search" />
      <!-- Real-time popularity -->
      <HeaderRealTimePopular class="realtime" />
      <!-- utility -->
      <HeaderUtility class="utility" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.main-layout-header {
  gap: 1.2rem;
  display: grid;
  grid-template-areas: "search realtime utility";
  grid-template-columns: 20rem 1fr auto;
  align-items: center;
  height: 5.2rem;
  padding: 1rem 1.6rem;
  position: relative;
  background-color: var(--bg_type16);

  .search {
    grid-area: search;
    z-index: 9;
  }

  .realtime {
    grid-area: realtime;
  }

  .utility {
    grid-area: utility;
  }
}
</style>
