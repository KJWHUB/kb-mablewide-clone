<script setup lang="ts">
const isOpen = defineModel({
  type: Boolean,
  default: false,
});
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  titleAlign: {
    type: String as PropType<"left" | "center" | "right">,
    default: "center",
  },
  closeButton: {
    type: Boolean,
    default: true,
  },
});

const dialogRef = ref<HTMLDialogElement>();

function openDialog() {
  if (!dialogRef.value) return console.error("Dialog reference is not set.");
  dialogRef.value.showModal();
}

function closeDialog() {
  if (!dialogRef.value) return console.error("Dialog reference is not set.");
  dialogRef.value.close();
}

watchEffect(() => {
  if (!dialogRef.value) return;
  if (isOpen.value) {
    openDialog();
  } else {
    closeDialog();
  }
});
</script>

<template>
  <dialog ref="dialogRef" class="base-dialog dim">
    <div class="header">
      <h2 v-if="props.title" class="header-title" :class="props.titleAlign">{{ props.title }}</h2>
      <slot name="header" />
      <div v-if="props.closeButton" class="close-btn">
        <SvgoClose style="width: 2.8rem" @click="isOpen = false" />
      </div>
    </div>
    <div class="body">
      <slot name="body" />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </dialog>
</template>

<style scoped lang="scss">
dialog.base-dialog {
  position: relative;
  padding: 1.5rem 2.3rem;
  border: solid 0.1rem var(--dialog-border-color);
  border-radius: 1.2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  color: var(--text-color);
  background-color: var(--background-color);

  &.dim::backdrop {
    background-color: #00000099;
  }

  .header {
    margin-bottom: 1.5rem;

    font-size: 1.8rem;
    text-align: center;
    font-weight: 600;
    line-height: 2.7rem;

    .header-title {
      margin-bottom: 1.6rem;
      padding: 1.05rem 3.8rem;

      &.left {
        text-align: left;
      }
      &.center {
        text-align: center;
      }
      &.right {
        text-align: right;
      }
    }

    .close-btn {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      right: 0.7rem;
      top: 1.5rem;
      width: 4.8rem;
      height: 4.8rem;
      cursor: pointer;

      &:hover {
        background-color: #ffffff05;
        border-radius: 0.8rem;
      }
    }
  }
}
</style>
