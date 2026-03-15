<template>
  <svg class="mj-tile" viewBox="0 0 80 106" xmlns="http://www.w3.org/2000/svg">
    <!-- Tile body -->
    <rect x="1.5" y="1.5" width="77" height="103" rx="8"
          fill="#FDFAF4" stroke="#CCC5B5" stroke-width="1.5"/>
    <!-- Inner border inset -->
    <rect x="6" y="6" width="68" height="94" rx="5"
          fill="none" stroke="#EAE3D5" stroke-width="1"/>

    <!-- ── PYTHON — Bamboo 3 ── -->
    <template v-if="type === 'python'">
      <rect x="32" y="17" width="6" height="55" rx="3" fill="#2D6A4F"/>
      <rect x="42" y="17" width="6" height="55" rx="3" fill="#40916C"/>
      <ellipse cx="35" cy="29" rx="6.5" ry="4.5" fill="#40916C"/>
      <ellipse cx="35" cy="44" rx="6.5" ry="4.5" fill="#2D6A4F"/>
      <ellipse cx="35" cy="59" rx="6.5" ry="4.5" fill="#40916C"/>
      <ellipse cx="45" cy="36" rx="6.5" ry="4.5" fill="#2D6A4F"/>
      <ellipse cx="45" cy="51" rx="6.5" ry="4.5" fill="#40916C"/>
      <text x="40" y="13.5" text-anchor="middle"
            font-family="DM Sans,sans-serif" font-size="7.5" font-weight="500" fill="#9A9080">3</text>
      <text x="40" y="91" text-anchor="middle"
            font-family="DM Sans,sans-serif" font-size="9" font-weight="600"
            fill="#2D6A4F" letter-spacing="0.3">Python</text>
    </template>

    <!-- ── SQL — Circle 5 ── -->
    <template v-else-if="type === 'sql'">
      <circle cx="25" cy="32" r="9"   fill="none" stroke="#40916C" stroke-width="2.2"/>
      <circle cx="25" cy="32" r="3.5" fill="#40916C"/>
      <circle cx="55" cy="32" r="9"   fill="none" stroke="#40916C" stroke-width="2.2"/>
      <circle cx="55" cy="32" r="3.5" fill="#40916C"/>
      <circle cx="40" cy="47" r="10"  fill="none" stroke="#2D6A4F" stroke-width="2.5"/>
      <circle cx="40" cy="47" r="4"   fill="#2D6A4F"/>
      <circle cx="25" cy="62" r="9"   fill="none" stroke="#40916C" stroke-width="2.2"/>
      <circle cx="25" cy="62" r="3.5" fill="#40916C"/>
      <circle cx="55" cy="62" r="9"   fill="none" stroke="#40916C" stroke-width="2.2"/>
      <circle cx="55" cy="62" r="3.5" fill="#40916C"/>
      <text x="40" y="13.5" text-anchor="middle"
            font-family="DM Sans,sans-serif" font-size="7.5" font-weight="500" fill="#9A9080">5</text>
      <text x="40" y="91" text-anchor="middle"
            font-family="DM Sans,sans-serif" font-size="10" font-weight="600"
            fill="#2D6A4F" letter-spacing="0.5">SQL</text>
    </template>

    <!-- ── JAVASCRIPT — Character 7万 ── -->
    <template v-else-if="type === 'javascript'">
      <rect x="14" y="20" width="52" height="6" rx="2" fill="#C0392B"/>
      <text x="40" y="70" text-anchor="middle"
            font-family="Noto Serif SC,serif" font-size="34" font-weight="700" fill="#C0392B">万</text>
      <text x="40" y="13.5" text-anchor="middle"
            font-family="DM Sans,sans-serif" font-size="7.5" font-weight="500" fill="#9A9080">7</text>
      <text x="40" y="91" text-anchor="middle"
            font-family="DM Sans,sans-serif" font-size="7.5" font-weight="600"
            fill="#C0392B" letter-spacing="0">JavaScript</text>
    </template>

    <!-- ── 发 Green Dragon ── -->
    <template v-else-if="type === 'fa'">
      <rect x="1.5" y="1.5" width="77" height="103" rx="8"
            fill="#2D6A4F" stroke="#1a4535" stroke-width="1.5"/>
      <rect x="6" y="6" width="68" height="94" rx="5"
            fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="40" y="66" text-anchor="middle"
            font-family="Noto Serif SC,serif" font-size="42" font-weight="700" fill="#F5F0E8">发</text>
      <text x="40" y="87" text-anchor="middle"
            font-family="DM Sans,sans-serif" font-size="7.5" font-weight="400"
            fill="rgba(245,240,232,0.5)" letter-spacing="0.5">prosper</text>
    </template>

    <!-- ── GENERIC SKILL TILE ── -->
    <!--
      suit='bamboo' → green bamboo stalks (ML/data stack)
      suit='circle' → ink ring pattern    (data/infra)
      suit='char'   → red character bar   (web stack)
    -->
    <template v-else-if="type === 'skill'">

      <!-- BAMBOO suit motif -->
      <template v-if="suit === 'bamboo'">
        <rect x="35" y="18" width="5"  height="48" rx="2.5" fill="#2D6A4F"/>
        <rect x="43" y="18" width="5"  height="48" rx="2.5" fill="#40916C"/>
        <ellipse cx="37.5" cy="28" rx="5.5" ry="3.8" fill="#40916C"/>
        <ellipse cx="37.5" cy="41" rx="5.5" ry="3.8" fill="#2D6A4F"/>
        <ellipse cx="37.5" cy="54" rx="5.5" ry="3.8" fill="#40916C"/>
        <ellipse cx="45.5" cy="34" rx="5.5" ry="3.8" fill="#2D6A4F"/>
        <ellipse cx="45.5" cy="47" rx="5.5" ry="3.8" fill="#40916C"/>
      </template>

      <!-- CIRCLE suit motif — 3 rings -->
      <template v-else-if="suit === 'circle'">
        <circle cx="40" cy="28" r="9"   fill="none" stroke="#1A1A18" stroke-width="2.2"/>
        <circle cx="40" cy="28" r="3.5" fill="#1A1A18"/>
        <circle cx="27" cy="47" r="8"   fill="none" stroke="#3D3D38" stroke-width="2"/>
        <circle cx="27" cy="47" r="3"   fill="#3D3D38"/>
        <circle cx="53" cy="47" r="8"   fill="none" stroke="#3D3D38" stroke-width="2"/>
        <circle cx="53" cy="47" r="3"   fill="#3D3D38"/>
      </template>

      <!-- CHAR suit motif — red bar + character pip -->
      <template v-else>
        <rect x="16" y="20" width="48" height="5" rx="2" fill="#C0392B"/>
        <rect x="16" y="62" width="48" height="5" rx="2" fill="#C0392B"/>
        <text x="40" y="51" text-anchor="middle"
              font-family="Noto Serif SC,serif" font-size="18" font-weight="700" fill="#C0392B">字</text>
      </template>

      <!-- Skill label at bottom — auto font-size based on label length -->
      <text
        x="40" y="91"
        text-anchor="middle"
        font-family="DM Sans,sans-serif"
        :font-size="labelFontSize"
        font-weight="600"
        :fill="labelColor"
      >{{ label }}</text>

      <!-- Suit pip number top -->
      <text x="40" y="13.5" text-anchor="middle"
            font-family="DM Sans,sans-serif" font-size="7" font-weight="500" fill="#9A9080">
        {{ pip }}
      </text>
    </template>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 'python' | 'sql' | 'javascript' | 'fa' | 'skill'
  type:  { type: String, required: true },
  // only used when type === 'skill'
  label: { type: String, default: '' },
  suit:  { type: String, default: 'bamboo' }, // 'bamboo' | 'circle' | 'char'
  pip:   { type: [String, Number], default: '1' },
})

const labelColor = computed(() => {
  if (props.suit === 'bamboo') return '#2D6A4F'
  if (props.suit === 'circle') return '#1A1A18'
  return '#C0392B'
})

// Shrink font for long labels
const labelFontSize = computed(() => {
  const len = props.label.length
  if (len <= 4)  return 9.5
  if (len <= 7)  return 8.5
  if (len <= 10) return 7.5
  return 6.5
})
</script>

<style scoped>
.mj-tile {
  width: 80px;
  height: 106px;
  cursor: default;
  filter: drop-shadow(4px 6px 0px rgba(45, 106, 79, 0.2));
  transition: filter 0.25s, transform 0.25s;
}
.mj-tile:hover {
  filter: drop-shadow(6px 10px 0px rgba(45, 106, 79, 0.32));
  transform: translateY(-7px) rotate(-3deg) !important;
  animation: none !important;
}
</style>
