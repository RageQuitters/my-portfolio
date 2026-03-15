<template>
  <section id="projects">
    <SectionHeader icon="创" label="Character Suit" title="Projects" tile-theme="red" />

    <div class="projects-grid">
      <div
        v-for="(proj, i) in projects"
        :key="proj.title"
        class="project-card fade-in"
      >
        <div class="project-card-accent">{{ proj.tile }}</div>
        <div class="project-num">{{ String(i + 1).padStart(2, '0') }}</div>
        <h3 class="project-title">{{ proj.title }}</h3>
        <p class="project-desc">{{ proj.desc }}</p>
        <div class="project-stack">
          <span v-for="tag in proj.stack" :key="tag" class="stack-tag">{{ tag }}</span>
        </div>
        <div class="project-links">
          <a v-if="proj.github" :href="proj.github" class="project-link" target="_blank">↗ GitHub</a>
          <a v-if="proj.demo"   :href="proj.demo"   class="project-link" target="_blank">↗ Live Demo</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { projects } from '@/data/resume'
</script>

<style scoped>
#projects {
  background: var(--ivory);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 22px;
}

.project-card {
  background: var(--tile-bg);
  border: 1.5px solid var(--ivory-dark);
  border-radius: 8px;
  padding: 30px 26px;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 6px 0 rgba(45, 106, 79, 0.07);
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover {
  transform: translate(-2px, -3px);
  box-shadow: 7px 10px 0 rgba(45, 106, 79, 0.12);
}

.project-card-accent {
  position: absolute;
  top: -4px; right: 6px;
  font-family: var(--cn);
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
  color: var(--jade);
  opacity: 0.06;
  pointer-events: none;
}

.project-num {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--jade);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.project-num::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--ivory-dark);
  max-width: 36px;
}

.project-title {
  font-family: var(--serif);
  font-size: 1.25rem;
  color: var(--ink);
  margin-bottom: 9px;
  line-height: 1.25;
}
.project-desc {
  font-size: 0.87rem;
  line-height: 1.7;
  color: var(--ink-soft);
  margin-bottom: 16px;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}
.stack-tag {
  font-size: 0.72rem;
  padding: 3px 8px;
  border-radius: 2px;
  background: var(--ivory-dark);
  color: var(--ink-soft);
}

.project-links {
  display: flex;
  gap: 14px;
}
.project-link {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--jade);
  text-decoration: none;
  border-bottom: 1px solid var(--jade-pale);
  padding-bottom: 1px;
  transition: color 0.2s, border-color 0.2s;
}
.project-link:hover {
  color: var(--jade-light);
  border-color: var(--jade-light);
}
</style>
