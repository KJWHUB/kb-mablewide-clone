<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null);
const headerHeight = ref(0);

const borderHeight = 4;
const calcHeaderHeight = computed(() => headerHeight.value + borderHeight);

onMounted(() => {
  headerHeight.value = headerRef.value?.clientHeight || 0;
});
</script>

<template>
  <div class="main-layout">
    <!-- sidebar -->
    <DefaultLayoutAppSidebar />
    <div style="margin-left: 8rem; flex: 1">
      <!-- header -->
      <div ref="headerRef" class="header-wrap">
        <DefaultLayoutAppHeader />
      </div>
      <main
        class="content"
        :style="{
          marginTop: `${calcHeaderHeight}px`,
        }"
      >
        <slot />
      </main>
    </div>

    <!-- modal -->
    <ModalGlobal />
  </div>
</template>

<style lang="scss">
$border-color: #151419;

$content-border: 4px solid $border-color;
.main-layout {
  display: flex;
  overflow: hidden;

  .header-wrap {
    position: fixed;
    top: 0;
    left: 8rem;
    width: calc(100% - 8rem);
    z-index: 100;

    border-bottom: $content-border;
  }

  main.content {
    width: 100%;
    min-height: 100vh;

    border-left: $content-border;
  }
}
</style>
