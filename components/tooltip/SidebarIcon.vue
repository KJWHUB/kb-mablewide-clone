<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="tooltip-wrap">
    <slot />
    <span class="tooltip">{{ props.label }}</span>
  </div>
</template>

<style scoped lang="scss">
.tooltip-wrap {
  position: relative;
  .tooltip {
    display: none;
    position: absolute;
    padding: 0.9rem 1.6rem;
    background-color: #000;
    border-radius: 0.4rem;

    top: 50%;
    left: 5.7rem;
    transform: translateY(-50%);

    font-size: 1.4rem;
    line-height: 1.7rem;

    white-space: nowrap;

    &:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-top: solid 0.5rem transparent;
      border-bottom: solid 0.5rem transparent;
      border-right: solid 0.5rem #000;
      position: absolute;
      top: -webkit-calc(50% - 0.5rem);
      top: -moz-calc(50% - 0.5rem);
      top: calc(50% - 0.5rem);
      left: -0.45rem;
    }
  }

  &:hover {
    .tooltip {
      display: block;
    }
  }
}
</style>
