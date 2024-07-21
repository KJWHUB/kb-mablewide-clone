<script setup lang="ts">
const content = "M-able 와이드를 앱으로 사용해보세요. <br> 바탕화면에 다운로드하여 바로 접속할 수 있어요!";
</script>

<template>
  <Popover :contents="content" width="300px" position="bottom">
    <template #reference>
      <div class="download-wrap">
        <SvgoDownload class="icon" />
      </div>
    </template>
  </Popover>
</template>

<style scoped lang="scss">
.download-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text_primary);
  width: 3.6rem;
  height: 3.6rem;

  opacity: 0.6;
  cursor: pointer;

  .icon {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    opacity: 1;
    background: var(--hover);
    border-radius: 0.4rem;
  }
}
</style>
