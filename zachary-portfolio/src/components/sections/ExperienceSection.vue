<template>
  <section id="experience">
    <SectionHeader icon="历" label="Bamboo Suit" title="Experience" tile-theme="jade" />

    <div class="exp-list">
      <div
        v-for="exp in experiences"
        :key="exp.role + exp.company"
        class="exp-item fade-in"
      >
        <div class="exp-meta">
          <div class="exp-date">{{ exp.date }}</div>
          <div class="exp-company-tile">{{ exp.icon }}</div>
        </div>
        <div class="exp-body">
          <div class="exp-role">{{ exp.role }}</div>
          <div class="exp-company">{{ exp.company }}</div>
          <ul class="exp-desc">
            <li v-for="pt in exp.points" :key="pt">{{ pt }}</li>
          </ul>
          <div class="exp-tags">
            <span v-for="tag in exp.tags" :key="tag" class="exp-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { experiences } from '@/data/resume'
</script>

<style scoped>
#experience {
  background: var(--ivory);
}

.exp-list {
  display: flex;
  flex-direction: column;
}

.exp-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0 48px;
  padding: 36px 0;
  border-bottom: 1px solid var(--ivory-dark);
}
.exp-item:first-child {
  border-top: 1px solid var(--ivory-dark);
}

.exp-meta {
  padding-top: 4px;
}
.exp-date {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--jade);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.exp-company-tile {
  width: 44px; height: 44px;
  background: var(--tile-bg);
  border: 1.5px solid var(--ivory-dark);
  border-radius: 5px;
  box-shadow: 2px 3px 0 var(--tile-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--cn);
  font-size: 1.1rem;
  color: var(--jade);
  font-weight: 700;
}

.exp-role {
  font-family: var(--serif);
  font-size: 1.35rem;
  color: var(--ink);
  margin-bottom: 3px;
}
.exp-company {
  font-size: 0.85rem;
  color: var(--jade);
  font-weight: 500;
  margin-bottom: 12px;
}
.exp-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--ink-soft);
}
.exp-desc li {
  margin-bottom: 5px;
  margin-left: 18px;
}

.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 13px;
}
.exp-tag {
  font-size: 0.73rem;
  padding: 3px 9px;
  border-radius: 2px;
  background: var(--ivory-dark);
  color: var(--ink-soft);
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .exp-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .exp-meta {
    display: flex;
    gap: 14px;
    align-items: center;
  }
}
</style>
