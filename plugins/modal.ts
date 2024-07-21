import { defineNuxtPlugin } from "#app";

import { useModalStore } from "@/stores/modal";

export default defineNuxtPlugin((_nuxtApp) => {
  const modalStore = useModalStore();
  const { isOpen, content } = storeToRefs(modalStore);

  return {
    provide: {
      modal: {
        open: modalStore.openModal,
        close: modalStore.closeModal,
        isOpen,
        content,
      },
    },
  };
});
