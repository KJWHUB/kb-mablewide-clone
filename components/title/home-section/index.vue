<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    rightArrow?: boolean;
    size?: "small" | "default" | "large";
  }>(),
  {
    title: "Title",
    rightArrow: false,
    size: "default",
  }
);
</script>

<template>
  <p
    class="home-section-title"
    :class="{
      'home-section-title--small': props.size === 'small',
      'home-section-title--large': props.size === 'large',
      'home-section-title--with-arrow': props.rightArrow,
    }"
  >
    {{ props.title }}
  </p>
</template>

<style scoped lang="scss">
$arrow-icon-svg: url("@/assets/icons/right-arrow.svg");

.home-section-title {
  position: relative;
  display: inline-block;

  font-size: 2.4rem;
  font-weight: 600;
  line-height: 3.6rem;
  white-space: nowrap;

  &--small {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  &--large {
    font-size: 3.2rem;
    line-height: 4.8rem;
  }

  &--with-arrow {
    padding-right: 2.2rem;
  }

  &--with-arrow::after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    background-color: currentColor;
    mask: $arrow-icon-svg no-repeat center / contain;
  }
}
</style>
