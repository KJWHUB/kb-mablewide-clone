<script setup lang="ts">
const emit = defineEmits(["close"]);

const content = ref<string>("D-40 까지 국내 수수료 완전 무료");
</script>

<template>
  <div class="banner-wrap">
    <div class="banner">
      <!-- center -->
      <div class="center">
        <!-- img -->
        <img class="front" src="@/assets/images/img_event_logo.png" alt="img" />
        <!-- text -->
        <p class="title">{{ content }}</p>
        <!-- img -->
        <img class="toGo" src="@/assets/images/img_event_go.png" alt="img" />
      </div>

      <!-- right -->
      <div class="close" @click="emit('close')">
        <SvgoClose />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-wrap {
  position: fixed;
  top: 5.6rem;
  left: 8.4rem;

  width: calc(100% - 8.4rem);
  height: 4.5rem;
  z-index: 99;
}

.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;

  color: #fff;

  background: linear-gradient(266deg, #7e5eff -11.17%, #5699ff 130.71%);

  .center {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    .front {
      width: 4rem;
      height: 4rem;
    }

    .title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #fff;
    }

    .toGo {
      width: 3.4rem;
      height: 1.6rem;
    }
  }
  .close {
    position: absolute;
    top: 50%;
    right: 1.6rem;
    width: 1.6rem;
    height: 1.6rem;

    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
