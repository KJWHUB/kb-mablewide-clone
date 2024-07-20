<script setup lang="ts">
const visible = defineModel<boolean>("visible", {
  required: false,
  default: true,
});

export interface Props {
  position?: "top" | "bottom" | "left" | "right";
  contents: string | Component;
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  position: "top",
  contents: "",
  width: "auto",
});

const showPopover = computed(() => visible.value);
</script>

<template>
  <div class="popover">
    <slot name="reference" />

    <!-- content -->
    <div
      v-if="showPopover"
      class="content"
      :class="{
        [props.position]: true,
      }"
      :style="{
        width: props.width,
      }"
    >
      <div v-if="props.contents" class="text" v-html="props.contents" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.popover {
  position: relative;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.4rem;
    padding: 0.9rem;
    background: #237bff;

    .text {
      color: var(--text_white_fixed);
      // white-space: nowrap;
    }

    &.top {
      transform: translateY(-100%);
    }

    &.bottom {
      transform: translateY(100%);
    }

    &.left {
      transform: translateX(-100%);
    }

    &.right {
      transform: translateX(100%);
    }
  }
}
</style>
