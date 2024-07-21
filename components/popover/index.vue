<script setup lang="ts">
const visible = defineModel<boolean>("visible", {
  required: false,
  default: false,
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

// 컨텐츠가 viewport 를 벗어나지 않도록 위치 조정
</script>

<template>
  <div class="popover">
    <slot ref="reference" name="reference" />

    <!-- content -->
    <div
      v-if="showPopover"
      ref="popover"
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
