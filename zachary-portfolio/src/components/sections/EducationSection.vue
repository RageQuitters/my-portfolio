<template>
  <section id="education">
    <SectionHeader
      icon="学"
      label="Honour Tiles"
      title="Education"
      tile-theme="gold"
    />

    <div class="edu-card fade-in">
      <div class="edu-tile">国</div>
      <div class="edu-body">
        <div class="edu-degree">{{ education.degree }}</div>
        <div class="edu-school">{{ education.school }}</div>
        <div class="edu-date">{{ education.date }}</div>
        <div class="edu-gpa">⭐ GPA {{ education.gpa }}</div>
        <div class="edu-courses">
          <strong>Relevant Courses:</strong>
          {{ education.courses.join(' · ') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { education } from '@/data/resume'
</script>

<style scoped>
#education {
  background: #F0EBE0;
}

.edu-card {
  background: var(--tile-bg);
  border: 1.5px solid var(--ivory-dark);
  border-radius: 8px;
  padding: 36px 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 28px;
  align-items: start;
  box-shadow: 4px 6px 0 rgba(45, 106, 79, 0.07);
  max-width: 760px;
}

.edu-tile {
  width: 60px; height: 60px;
  background: var(--jade);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--cn);
  font-size: 1.5rem;
  color: var(--ivory);
  font-weight: 700;
  box-shadow: 3px 4px 0 rgba(45, 106, 79, 0.3);
  flex-shrink: 0;
}

.edu-degree {
  font-family: var(--serif);
  font-size: 1.5rem;
  color: var(--ink);
  margin-bottom: 4px;
}
.edu-school {
  font-size: 0.9rem;
  color: var(--jade);
  font-weight: 500;
  margin-bottom: 6px;
}
.edu-date {
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin-bottom: 14px;
}
.edu-gpa {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--jade);
  color: var(--ivory);
  padding: 5px 14px;
  border-radius: 3px;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
}
.edu-courses {
  font-size: 0.84rem;
  color: var(--ink-soft);
  line-height: 1.7;
}
.edu-courses strong {
  color: var(--ink);
  font-weight: 500;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .edu-card {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
