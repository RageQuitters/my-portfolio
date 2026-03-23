<template>
  <section id="hero" class="tile-pattern-bg">

    <!-- ── Slow-drifting skill tiles in background ── -->
    <div class="bg-tiles" aria-hidden="true">
      <div
        v-for="t in bgTiles"
        :key="t.id"
        class="bg-tile-wrap"
        :style="t.wrapStyle"
      >
        <MahjongTile
          type="skill"
          :label="t.label"
          :suit="t.suit"
          :pip="t.pip"
          class="bg-mj-tile"
          :style="t.tileStyle"
        />
      </div>
    </div>

    <!-- ── Hero text content ── -->
    <div class="hero-content">
      <div class="hero-eyebrow">
        <span class="eyebrow-rule"></span>
        Business Analytics · NUS · Singapore
        <span class="eyebrow-rule"></span>
      </div>

      <h1 class="hero-name">
        Zachary Ong<br/>
      </h1>

      <p class="hero-tagline" style="font-weight: bold;">
        Data-driven builder with a knack for making complex systems visual and clear.
        From ML-powered Mahjong discard predictors to agentic AI bots for dementia care,
        I build things that think.
      </p>

      <div class="hero-ctas">
        <a href="#projects" class="btn-primary">View My Work →</a>
        <a href="#" class="btn-outline" @click.prevent="downloadResume">↓ Download Resume</a>
      </div>
    </div>

  </section>
</template>

<script setup>
import MahjongTile from '@/components/ui/MahjongTile.vue'
import { useResume } from '@/composables/useResume'

const { downloadResume } = useResume()

// ─── Skill → suit assignment ───────────────────────────────────────────
// bamboo = ML/data  |  circle = data/infra  |  char = web stack
const skillDefs = [
  { label: 'Python',       suit: 'bamboo', pip: 1  },
  { label: 'SQL',          suit: 'circle', pip: 2  },
  { label: 'JavaScript',   suit: 'char',   pip: 3  },
  { label: 'Java',         suit: 'char',   pip: 4  },
  { label: 'R',            suit: 'circle', pip: 5  },
  { label: 'HTML/CSS',     suit: 'char',   pip: 6  },
  { label: 'scikit-learn', suit: 'bamboo', pip: 7  },
  { label: 'PyTorch',      suit: 'bamboo', pip: 8  },
  { label: 'NumPy',        suit: 'bamboo', pip: 9  },
  { label: 'pandas',       suit: 'bamboo', pip: 1  },
  { label: 'OpenCV',       suit: 'bamboo', pip: 2  },
  { label: 'Flask',        suit: 'char',   pip: 3  },
  { label: 'Node.js',      suit: 'char',   pip: 4  },
  { label: 'Express.js',   suit: 'char',   pip: 5  },
  { label: 'React',        suit: 'char',   pip: 6  },
  { label: 'Firebase',     suit: 'circle', pip: 7  },
  { label: 'AWS (boto3)',  suit: 'circle', pip: 8  },
  { label: 'Tableau',      suit: 'circle', pip: 9  },
  { label: 'Git',          suit: 'circle', pip: 1  },
  { label: 'Manim',        suit: 'bamboo', pip: 2  },
]

// ─── Deterministic layout — scatter 20 tiles across the viewport ───────
// Rows of 4 across 5 rows, nudged so nothing overlaps perfectly.
// Positions are percentages so they scale with the viewport.
const positions = [
  // row 1
  { top:  4, left:  2,  rot: -11, size: 88 },
  { top:  2, left: 20,  rot:   5, size: 75 },
  { top:  6, left: 40,  rot:  -4, size: 82 },
  { top:  3, left: 60,  rot:   9, size: 78 },
  { top:  1, left: 80,  rot:  -7, size: 85 },
  // row 2
  { top: 24, left:  8,  rot:   7, size: 80 },
  { top: 22, left: 28,  rot: -13, size: 90 },
  { top: 26, left: 48,  rot:   4, size: 72 },
  { top: 20, left: 68,  rot: -10, size: 86 },
  { top: 25, left: 88,  rot:   6, size: 76 },
  // row 3
  { top: 46, left:  3,  rot:  -5, size: 84 },
  { top: 44, left: 22,  rot:  11, size: 78 },
  { top: 48, left: 42,  rot:  -8, size: 92 },
  { top: 43, left: 62,  rot:   3, size: 74 },
  { top: 47, left: 82,  rot: -12, size: 80 },
  // row 4
  { top: 67, left:  6,  rot:   8, size: 82 },
  { top: 65, left: 26,  rot:  -6, size: 76 },
  { top: 70, left: 46,  rot:  13, size: 88 },
  { top: 66, left: 66,  rot:  -4, size: 80 },
  { top: 68, left: 86,  rot:   7, size: 74 },
]

// Animation params — varied durations and directions keep motion organic
const motionParams = [
  { dur: 30, delay:  0, dx:  18, dy:  14 },
  { dur: 38, delay:  3, dx: -16, dy:  20 },
  { dur: 44, delay:  7, dx:  22, dy: -12 },
  { dur: 34, delay: 11, dx: -14, dy:  18 },
  { dur: 40, delay:  2, dx:  16, dy: -22 },
  { dur: 36, delay:  5, dx: -20, dy:  16 },
  { dur: 42, delay:  9, dx:  12, dy:  20 },
  { dur: 32, delay: 14, dx: -18, dy: -14 },
  { dur: 46, delay:  1, dx:  20, dy:  12 },
  { dur: 38, delay:  6, dx: -12, dy:  22 },
  { dur: 34, delay: 10, dx:  16, dy: -18 },
  { dur: 40, delay:  4, dx: -22, dy:  14 },
  { dur: 28, delay: 12, dx:  14, dy:  20 },
  { dur: 44, delay:  8, dx: -16, dy: -20 },
  { dur: 36, delay: 15, dx:  20, dy:  16 },
  { dur: 42, delay:  3, dx: -14, dy:  12 },
  { dur: 30, delay: 16, dx:  18, dy: -16 },
  { dur: 38, delay:  7, dx: -20, dy:  18 },
  { dur: 46, delay: 13, dx:  12, dy:  14 },
  { dur: 34, delay:  5, dx: -16, dy: -12 },
]

const bgTiles = skillDefs.map((skill, i) => {
  const pos = positions[i]
  const mot = motionParams[i]
  const h = Math.round(pos.size * (106 / 80))
  return {
    id: i,
    label: skill.label,
    suit:  skill.suit,
    pip:   skill.pip,
    wrapStyle: {
      position: 'absolute',
      top:  `${pos.top}%`,
      left: `${pos.left}%`,
      width:  `${pos.size}px`,
      height: `${h}px`,
      animationDuration: `${mot.dur}s`,
      animationDelay: `${mot.delay}s`,
      '--dx': `${mot.dx}px`,
      '--dy': `${mot.dy}px`,
    },
    tileStyle: {
      width:  `${pos.size}px`,
      height: `${h}px`,
      transform: `rotate(${pos.rot}deg)`,
    },
  }
})
</script>

<style scoped>
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 48px 48px;
  position: relative;
  overflow: hidden;
}

/* ── Background drifting tiles ──────────────────────────────────────── */
.bg-tiles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-tile-wrap {
  opacity: 0.45;
  animation: bgDrift linear infinite both;
  will-change: transform;
}

/* The :deep() override strips the hardcoded 80×106 from MahjongTile's
   scoped style so our dynamic size applies cleanly. */
.bg-tile-wrap :deep(.mj-tile) {
  width: 100% !important;
  height: 100% !important;
  filter: drop-shadow(2px 3px 0 rgba(45,106,79,0.1)) !important;
  transition: none !important;
}
.bg-tile-wrap :deep(.mj-tile):hover {
  transform: none !important;
  animation: none !important;
}

@keyframes bgDrift {
  0%   { transform: translate(0px,           0px); }
  25%  { transform: translate(var(--dx),     calc(var(--dy) * 0.5)); }
  50%  { transform: translate(0px,           var(--dy)); }
  75%  { transform: translate(calc(var(--dx) * -0.5), calc(var(--dy) * 0.5)); }
  100% { transform: translate(0px,           0px); }
}

/* ── Hero text ──────────────────────────────────────────────────────── */
.hero-content {
  max-width: 680px;
  position: relative;
  z-index: 2;
}

.hero-content > * {
  animation: heroIn 0.7s ease forwards;
  opacity: 0;
}
.hero-content > *:nth-child(1) { animation-delay: 0.10s; }
.hero-content > *:nth-child(2) { animation-delay: 0.22s; }
.hero-content > *:nth-child(3) { animation-delay: 0.34s; }
.hero-content > *:nth-child(4) { animation-delay: 0.46s; }

@keyframes heroIn {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--jade);
  margin-bottom: 20px;
}
.eyebrow-rule {
  height: 1px;
  width: 36px;
  background: var(--jade-pale);
}

.hero-name {
  font-family: var(--serif);
  font-size: clamp(3rem, 7vw, 5.2rem);
  line-height: 1.05;
  color: var(--ink);
  margin-bottom: 28px;
}

.hero-tagline {
  font-size: 1.05rem;
  font-weight: 300;
  color: var(--ink-soft);
  line-height: 1.75;
  max-width: 500px;
  margin-bottom: 40px;

  background: greyish-white;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  padding: 16px 20px;
  box-shadow: 0 2px 16px rgba(45, 106, 79, 0.08);
}

.hero-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

/* ── Responsive ─────────────────────────────────────────────────────── */
@media (max-width: 960px) {
  #hero { padding: 90px 24px 48px; }
}
@media (max-width: 600px) {
  .hero-name { font-size: 2.7rem; }
}
</style>
