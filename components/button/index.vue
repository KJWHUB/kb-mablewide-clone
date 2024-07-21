<script setup lang="ts">
interface ButtonProps {
  type?: "default" | "primary";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
});
</script>

<template>
  <button
    class="button"
    :class="{
      [`button--${props.type}`]: true,
    }"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  text-decoration: none;

  border-radius: 0.6rem;
  font-size: 1.4rem;
  font-weight: 600;

  &--default {
    color: inherit;
  }

  &--primary {
    color: var(--btn_brand_tx);
    background: var(--btn_brand_bg);

    &:hover {
      background: var(--btn_brand_hover);
    }
  }
}
</style>
