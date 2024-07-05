<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <TooltipSidebarIcon :label="props.item.tooltip">
    <div class="sidebar-icon-wrap">
      <slot />
    </div>
  </TooltipSidebarIcon>
</template>

<style scoped lang="scss">
$default-color: #7d7e85;
// $default-color: #b2b4bf;
$active-color: var(--text-color);
$hover-background-color: #ffffff05;

.sidebar-icon-wrap {
  position: relative;
  width: 100%;
  border-radius: 0.8rem;
  color: $default-color;
  aspect-ratio: 1 / 1;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    color: $active-color;
    background-color: $hover-background-color;
    transform: scale(0.8);
  }
}
</style>
