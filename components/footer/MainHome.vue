<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <ul>
      <li>
        <p>고객센터</p>
        <p>1588-6611</p>
      </li>
      <li>
        <p>국제주문용</p>
        <p>02-782-7200</p>
      </li>
      <li>
        <p>PRIME 센터(무료 자산관리 상담)</p>
        <p>1566-0055</p>
      </li>
    </ul>
    <p class="copyright">Copyright@2023 KB Securities co.Ltd. All Rights Reserved.</p>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  position: relative;
  font-size: 1.2rem;
  margin-top: 12rem;
  padding: 3.2rem 0 4rem;
  border-top: solid 0.4rem var(--bg_type18);

  ul {
    display: flex;
    justify-content: center;
    gap: 0.6rem 1.6rem;

    li {
      display: flex;
      gap: 1.6rem;

      p {
        color: var(--text_type02);
      }
    }
  }

  .copyright {
    color: var(--text_type03);
    text-align: center;
  }
}
</style>
