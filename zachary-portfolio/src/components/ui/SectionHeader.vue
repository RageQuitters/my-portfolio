<template>
  <div class="section-header fade-in">

    <!-- SVG Mahjong tile icon -->
    <svg class="section-tile" viewBox="0 0 52 68" xmlns="http://www.w3.org/2000/svg">
      <!-- Tile body -->
      <rect x="1" y="1" width="50" height="66" rx="6"
            :fill="tileBg" stroke="#00000022" stroke-width="1.2"/>
      <!-- Inner border inset -->
      <rect x="4.5" y="4.5" width="43" height="59" rx="4"
            fill="none" :stroke="insetColor" stroke-width="0.8"/>
      <!-- Chinese character -->
      <text
        x="26" y="45"
        text-anchor="middle"
        font-family="Noto Serif SC, serif"
        font-size="26"
        font-weight="700"
        :fill="charColor"
      >{{ icon }}</text>
    </svg>

    <div class="section-title-wrap">
      <span class="section-label" :style="labelStyle">{{ label }}</span>
      <h2 class="section-title" :style="titleStyle">{{ title }}</h2>
    </div>
    <div class="section-rule" :style="ruleStyle"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon:       { type: String, required: true },
  label:      { type: String, required: true },
  title:      { type: String, required: true },
  // 'jade' | 'ink' | 'red' | 'gold' | 'ivory'
  tileTheme:  { type: String, default: 'jade' },
  // optional text colour overrides (for dark section backgrounds)
  labelColor: { type: String, default: null },
  titleColor: { type: String, default: null },
  ruleColor:  { type: String, default: null },
})

// Map theme → tile background, inset border, character colour
const themeMap = {
  jade:  { bg: '#2D6A4F', inset: 'rgba(255,255,255,0.18)', char: '#F5F0E8' },
  ink:   { bg: '#1A1A18', inset: 'rgba(255,255,255,0.12)', char: '#B7E4C7' },
  red:   { bg: '#C0392B', inset: 'rgba(255,255,255,0.18)', char: '#F5F0E8' },
  gold:  { bg: '#B8960C', inset: 'rgba(255,255,255,0.20)', char: '#F5F0E8' },
  ivory: { bg: '#FDFAF4', inset: '#D8D0C0',                char: '#2D6A4F' },
}

const theme     = computed(() => themeMap[props.tileTheme] ?? themeMap.jade)
const tileBg    = computed(() => theme.value.bg)
const insetColor = computed(() => theme.value.inset)
const charColor = computed(() => theme.value.char)

const labelStyle = computed(() => props.labelColor ? { color: props.labelColor } : {})
const titleStyle = computed(() => props.titleColor ? { color: props.titleColor } : {})
const ruleStyle  = computed(() =>
  props.ruleColor
    ? { background: `linear-gradient(to right, ${props.ruleColor}, transparent)` }
    : {}
)
</script>

<style scoped>
.section-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 52px;
}

/* Tile sizing — slightly larger than the old flat square */
.section-tile {
  width: 44px;
  height: 57px;
  flex-shrink: 0;
  filter: drop-shadow(2px 4px 0px rgba(0,0,0,0.18));
}

.section-title-wrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.section-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--jade);
}
.section-title {
  font-family: var(--serif);
  font-size: 2.1rem;
  color: var(--ink);
  line-height: 1;
}
.section-rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, var(--ivory-dark), transparent);
}
</style>
