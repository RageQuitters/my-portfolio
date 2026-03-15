<template>
  <section id="contact">
    <div class="contact-inner">
      <!-- Centred tile: 联 = connect / reach out -->
      <svg class="contact-tile-icon" viewBox="0 0 64 84" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="61" height="81" rx="8"
              fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
        <rect x="6" y="6" width="52" height="72" rx="5"
              fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
        <text x="32" y="56"
              text-anchor="middle"
              font-family="Noto Serif SC, serif"
              font-size="34" font-weight="700"
              fill="#F5F0E8">联</text>
      </svg>
      <h2 class="section-title">Let's Connect</h2>
      <p>
        Open to internships, full-time roles, and interesting collaborations.
        I respond quickly — don't hesitate to reach out.
      </p>
      <div class="contact-links">
        <a :href="`mailto:${contact.email}`" class="contact-link primary-contact">
          ✉ {{ contact.email }}
        </a>
        <a :href="contact.linkedin" target="_blank" class="contact-link">LinkedIn ↗</a>
        <a :href="contact.github"   target="_blank" class="contact-link">GitHub ↗</a>
        <a :href="`tel:${contact.phone.replace(/\s/g,'')}`" class="contact-link">
          {{ contact.phone }}
        </a>
        <a href="#" class="contact-link" @click.prevent="downloadResume">↓ Resume PDF</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contact } from '@/data/resume'
import { useResume } from '@/composables/useResume'

const { downloadResume } = useResume()
</script>

<style scoped>
#contact {
  background: var(--jade);
  color: var(--ivory);
}

.contact-inner {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-tile-icon {
  width: 64px;
  height: 84px;
  margin: 0 auto 20px;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

.section-title {
  font-family: var(--serif);
  font-size: 2.6rem;
  color: var(--ivory);
  margin-bottom: 18px;
}

p {
  font-size: 0.97rem;
  color: rgba(245, 240, 232, 0.72);
  line-height: 1.7;
  margin-bottom: 34px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 22px;
  border: 1.5px solid rgba(255, 255, 255, 0.38);
  color: var(--ivory);
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  border-radius: 4px;
  transition: background 0.2s, border-color 0.2s;
}
.contact-link:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.65);
}
.contact-link.primary-contact {
  background: var(--ivory);
  color: var(--jade);
  border-color: var(--ivory);
}
.contact-link.primary-contact:hover {
  background: var(--ivory-dark);
}
</style>
