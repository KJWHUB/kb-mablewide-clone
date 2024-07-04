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
      <component :is="props.item.id" />
    </div>
  </TooltipSidebarIcon>
</template>

<style scoped lang="scss">
$default-color: #b2b4bf;
$active-color: #ffffff;
$hover-background-color: #ffffff05;

.sidebar-icon-wrap {
  position: relative;
  width: 100%;
  border-radius: 0.8rem;
  color: $default-color;

  transition: all 0.3s;

  &:hover {
    color: $active-color;
    background-color: $hover-background-color;
    transform: scale(0.8);
  }
}
</style>
