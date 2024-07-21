import { defineStore } from "pinia";

import DialogLogin from "@/components/dialog/login/index.vue";

type ModalTyps = null | "LOGIN";

export enum Modal {
  LOGIN = "LOGIN",
}

export const ModalContents = {
  [Modal.LOGIN]: DialogLogin,
};

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false);
  const content = ref<ModalTyps>(null);

  watch(isOpen, (value) => {
    if (!value) {
      content.value = null;
    }
  });

  return {
    isOpen,
    content,
    openModal(newContent: ModalTyps) {
      isOpen.value = true;
      content.value = newContent;
    },
    closeModal() {
      isOpen.value = false;
      content.value = null;
    },
  };
});
