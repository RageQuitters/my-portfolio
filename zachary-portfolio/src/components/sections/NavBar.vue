<template>
  <nav>
    <a href="#hero" class="nav-logo">
      <div class="nav-logo-tile">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="16" height="16" rx="2"
                stroke="#F5F0E8" stroke-width="1.5"/>
          <text x="9" y="13" text-anchor="middle"
                font-family="Noto Serif SC,serif"
                font-size="10" fill="#F5F0E8" font-weight="700">發</text>
        </svg>
      </div>
      Zachary Ong
    </a>

    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
      <li>
        <a href="#" class="nav-resume-btn" @click.prevent="downloadResume">
          ↓ Resume
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useResume } from '@/composables/useResume'

const { downloadResume } = useResume()

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education',  label: 'Education' },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact' },
]
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 64px;
  background: rgba(245, 240, 232, 0.93);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--ivory-dark);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  color: var(--jade);
  letter-spacing: 0.04em;
}
.nav-logo-tile {
  width: 30px;
  height: 40px;
  background: var(--jade);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.2);
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}
.nav-links a {
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--ink-soft);
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--jade);
}

.nav-resume-btn {
  background: var(--jade);
  color: var(--ivory) !important;
  padding: 7px 16px;
  border-radius: 3px;
  transition: background 0.2s !important;
}
.nav-resume-btn:hover {
  background: var(--jade-light) !important;
}

@media (max-width: 960px) {
  nav { padding: 0 24px; }
}
@media (max-width: 600px) {
  .nav-links { display: none; }
}
</style>
