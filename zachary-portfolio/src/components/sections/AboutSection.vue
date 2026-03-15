<template>
  <section id="about">
    <SectionHeader
      icon="我"
      label="Circle Suit"
      title="About Me"
      tile-theme="ink"
      label-color="var(--jade-pale)"
      title-color="var(--ivory)"
      rule-color="rgba(255,255,255,0.08)"
    />

    <div class="about-grid fade-in">
      <!-- Bio text -->
      <div class="about-text">
        <p>
          I'm a <strong>Business Analytics undergraduate at NUS</strong> (GPA 4.42/5),
          passionate about building data-driven systems that are as clear and visual as they are powerful.
        </p>
        <p>
          My projects span ML-based decision systems, <strong>computer vision pipelines</strong>,
          and agentic AI — including a Mahjong discard predictor trained on synthetic data,
          and a Telegram bot for elderly dementia care that reached the
          <strong>SimplifyNext Hackathon semi-finals</strong> out of 80 teams.
        </p>
        <p>
          I also teach Python as a <strong>NUS Teaching Assistant</strong>, where I hold a
          perfect 5.0/5.0 student-evaluated effectiveness score. I believe understanding
          something deeply enough to explain it simply is one of the best ways to grow.
        </p>
        <div class="skills-list">
          <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
      </div>

      <!-- Stat tiles -->
      <div class="about-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-tile">
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { skills, stats } from '@/data/resume'
</script>

<style scoped>
#about {
  background: var(--ink);
  color: var(--ivory);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

/* ── Bio ── */
.about-text p {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(245, 240, 232, 0.78);
  margin-bottom: 18px;
}
.about-text p strong {
  color: var(--jade-pale);
  font-weight: 500;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}
.skill-tag {
  padding: 5px 12px;
  border: 1px solid rgba(183, 228, 199, 0.28);
  border-radius: 2px;
  font-size: 0.78rem;
  color: var(--jade-pale);
  letter-spacing: 0.04em;
  background: rgba(45, 106, 79, 0.1);
}

/* ── Stats ── */
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}

.stat-tile {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 26px 22px;
  position: relative;
  overflow: hidden;
}
.stat-tile::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 100%;
  background: var(--jade);
}
.stat-tile:nth-child(2)::before { background: var(--gold); }
.stat-tile:nth-child(3)::before { background: var(--red-tile); }
.stat-tile:nth-child(4)::before { background: var(--jade-light); }

.stat-number {
  font-family: var(--serif);
  font-size: 2.6rem;
  color: var(--ivory);
  line-height: 1;
  margin-bottom: 5px;
}
.stat-label {
  font-size: 0.75rem;
  color: rgba(245, 240, 232, 0.45);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .about-grid { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 600px) {
  .about-stats { grid-template-columns: 1fr 1fr; }
}
</style>
