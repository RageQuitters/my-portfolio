<template>
  <footer>
    <p>© 2025 Zachary Ong Ze En · Built with Vue 3</p>
    <div class="footer-cn">一 二 三 四 五</div>
    <p>Singapore 🇸🇬</p>
  </footer>
</template>

<style scoped>
footer {
  background: var(--ink);
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer p {
  font-size: 0.75rem;
  color: rgba(245, 240, 232, 0.28);
}

.footer-cn {
  font-family: var(--cn);
  font-size: 0.95rem;
  color: rgba(45, 106, 79, 0.4);
  letter-spacing: 0.25em;
}

@media (max-width: 960px) {
  footer {
    flex-direction: column;
    gap: 6px;
    text-align: center;
    padding: 24px;
  }
}
</style>
