<div align="center">

# Abhishek Khadekar — Portfolio

**A single-page React portfolio for a front-end developer.**

Intro · Technologies · Experience · Projects · Education · Contact

![React](https://img.shields.io/badge/React-18-58a6ff)
![Vite](https://img.shields.io/badge/Vite-5-f5a524)
![No backend](https://img.shields.io/badge/static-deploy%20anywhere-3fb950)

</div>

---

A fast, fully static portfolio site. Every section is driven from one content
file, so updating the site never means touching component code.

## ✨ Highlights

- **One-file content** — name, summary, skills, experience, projects, education
  and contact all live in `src/data/profile.json` — a real JSON file.
- **Sectioned single page** — Intro → About → Technologies → Experience →
  Projects → Education & Certifications → Contact, with a sticky nav, smooth
  anchor scrolling, and an active-section indicator.
- **Scroll-reveal** animations via `IntersectionObserver` — and they fully
  respect `prefers-reduced-motion`.
- **Custom design** — deep-ink canvas, an amber signature accent, Sora + Inter +
  JetBrains Mono, numbered section labels, and a monogram hero card.
- **Zero backend, minimal deps** — just React + Vite.

## 🧱 Tech stack

| Part      | Choice                                |
| --------- | ------------------------------------- |
| Framework | React 18 + Vite                       |
| Styling   | Hand-written CSS (custom properties)  |
| Fonts     | Sora · Inter · JetBrains Mono         |
| Icons     | Inline SVG (no icon dependency)       |

## 📂 Structure

```
abhishek-portfolio/
├── index.html                 # fonts + root
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # section order lives here
│   ├── index.css              # tokens, reset, reduced-motion
│   ├── styles.css             # all component styling
│   ├── data/
│   │   └── profile.json        # ← edit your content here (real JSON)
│   └── components/
│       ├── Nav.jsx   Hero.jsx   About.jsx   Skills.jsx
│       ├── Experience.jsx   Projects.jsx   EducationCerts.jsx
│       ├── Contact.jsx
│       └── Section.jsx   Reveal.jsx   Icons.jsx
```

## 🚀 Run locally

Prerequisites: **Node.js 18+**.

```bash
npm install
npm run dev        # http://localhost:5173
```

## 📝 Edit your content

Open **`src/data/profile.json`**. It has two top-level keys: `profile` (name, tagline,
`about`, `skills`, `experience`, `projects`, `education`, `certifications`) and
`navLinks`. The UI updates automatically; you rarely need to touch the components.

To reorder or rename nav items, edit the `navLinks` array in the same JSON (each
`id` must match a section `id` in `App.jsx`).

## 📦 Build & deploy

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

`dist/` is plain static HTML/CSS/JS — deploy it to **Vercel**, **Netlify**, or
**GitHub Pages** with no extra configuration:

- **Vercel / Netlify:** import the repo; build command `npm run build`, output
  directory `dist`.
- **GitHub Pages:** push `dist/` to a `gh-pages` branch (or use an action).

## 🔧 Make it yours

- **Accent color:** change `--accent` and `--accent-soft` in `src/index.css`.
- **Fonts:** swap the `<link>` in `index.html` and the `--display` / `--body`
  tokens.
- **Add a résumé button:** drop a PDF in `public/` and link it from `Nav.jsx`
  or `Hero.jsx`.

---

Built with React + Vite. Content © Abhishek Khadekar.

**Add a personal project** by appending to the `personalProjects` array (it
feeds the dedicated *Personal Projects* section, separate from client work):

```json
{
  "name": "My Side Project",
  "domain": "Personal Project",
  "period": "2025",
  "tech": ["React", "Vite", "TypeScript"],
  "highlights": [
    "One line on what it does.",
    "Another line on something notable."
  ],
  "links": [
    { "type": "demo", "url": "https://your-demo-url.com", "label": "Live demo" }
  ]
}
```

**Project links (GitHub / Docker Hub / demo)** — any project (client work or
personal) can list multiple links:

```json
"links": [
  { "type": "github", "url": "https://github.com/you/repo",      "label": "Source" },
  { "type": "docker", "url": "https://hub.docker.com/r/you/repo", "label": "Docker Hub" },
  { "type": "demo",   "url": "https://your-demo-url.com",         "label": "Live demo" }
]
```

`type` picks the icon (`github`, `docker`, or `demo`); `label` is the text shown.

**Profile-level GitHub / Docker Hub** — set `profile.github` and
`profile.dockerhub` to your real URLs; they appear next to LinkedIn in the Hero
and Contact sections. Leave either as `""` to hide it.

### Docker guide
docker build -t portfolio-abhishek
then
docker run --rm -d -p 9000:80 portfolio-abhishek:latest 
