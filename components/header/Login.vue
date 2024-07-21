<script setup lang="ts"></script>

<template>
  <div class="login">
    <Button
      :style="{
        width: '7rem',
        height: '3rem',
        whiteSpace: 'nowrap',
      }"
      @click="$modal.open('LOGIN')"
    >
      로그인
    </Button>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 3.2rem;
  cursor: pointer;
}
</style>
