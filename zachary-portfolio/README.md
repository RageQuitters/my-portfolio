# Zachary Ong Ze En — Personal Portfolio

Singapore Mahjong-themed personal website built with **Vue 3 + Vite**.

## Project Structure

```
zachary-portfolio/
├── index.html                        # HTML entry point
├── vite.config.js                    # Vite + Vue plugin config
├── package.json
├── public/
│   └── Zachary_Ong_Resume.pdf        # ← drop your resume here
└── src/
    ├── main.js                       # App bootstrap
    ├── App.vue                       # Root component (assembles sections)
    ├── assets/
    │   └── styles/
    │       └── global.css            # CSS variables, resets, shared utilities
    ├── data/
    │   └── resume.js                 # All content: skills, experience, projects, contact
    ├── composables/
    │   ├── useScrollReveal.js        # Intersection Observer fade-in logic
    │   └── useResume.js              # Resume PDF download logic
    └── components/
        ├── ui/                       # Reusable presentational components
        │   ├── SectionHeader.vue     # Section title block (icon + label + rule)
        │   └── MahjongTile.vue       # SVG mahjong tile (python / sql / javascript / fa)
        └── sections/                 # One component per page section
            ├── NavBar.vue
            ├── HeroSection.vue
            ├── AboutSection.vue
            ├── ExperienceSection.vue
            ├── EducationSection.vue
            ├── ProjectsSection.vue
            ├── ContactSection.vue
            └── SiteFooter.vue
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Updating Content

All resume content lives in **`src/data/resume.js`** — edit that single file to update:
- Skills list
- Stats (GPA, scores, etc.)
- Experience entries
- Education details
- Project cards
- Contact info & resume filename

## Resume PDF

Place your resume PDF in the `public/` folder and update the filename in `src/data/resume.js`:

```js
export const contact = {
  resumeFile: '/Zachary_Ong_Resume.pdf',       // path from public/
  resumeDownloadName: 'Zachary_Ong_Ze_En_Resume.pdf',  // downloaded filename
}
```

## Deploying

The built output (`dist/`) is a static site — deploy to any static host:

- **Netlify**: drag & drop the `dist/` folder
- **Vercel**: `vercel --prod` from the project root
- **GitHub Pages**: push `dist/` to a `gh-pages` branch
