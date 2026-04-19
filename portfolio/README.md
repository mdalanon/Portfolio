# Marco Dalanon — Portfolio
Dark anime aesthetic · React + Vite · No UI libraries

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## File Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx                      ← All sections assembled here
    ├── index.jsx                    ← React entry point
    │
    ├── data/
    │   └── portfolio.js             ★ EDIT ALL CONTENT HERE ★
    │
    ├── styles/
    │   └── global.css               ← Theme colors, fonts, animations
    │
    └── components/
        ├── Reveal.jsx               ← Scroll reveal animation
        ├── Nav.jsx                  ← Top navigation
        ├── Hero.jsx                 ← Landing hero section
        ├── About.jsx                ← About + image frame
        ├── Education.jsx            ← Education card
        ├── SkillsProjects.jsx       ← Skills grid + Projects list
        ├── ExperienceLeadership.jsx ← Work experience + org roles
        ├── Events.jsx               ← Event table + click-to-expand modal
        └── AchievementsContact.jsx  ← Achievements, Contact, Footer
```

---

## Editing Content

**Open `src/data/portfolio.js`** — every piece of text on the site lives here.

| Export         | Controls                                    |
|----------------|---------------------------------------------|
| `meta`         | Name, title, tagline, image paths           |
| `roles`        | Rotating role text in hero                  |
| `about`        | Bio paragraph                               |
| `education`    | School, degree, period                      |
| `skills`       | Skill categories + items                    |
| `projects`     | Project cards                               |
| `experience`   | Work experience + bullet points             |
| `leadership`   | Org roles + descriptions                    |
| `events`       | Events list, modal content, photos          |
| `achievements` | Recognition + certificates                  |
| `contact`      | Email, phone, LinkedIn                      |

---

## Adding Your Character / Avatar Image

1. Drop your image into the `public/` folder (e.g. `public/avatar.png`)
2. Open `src/data/portfolio.js`
3. Set `meta.heroImage = "/avatar.png"` (hero section)
4. Set `meta.aboutImage = "/about-photo.png"` (about section)

Supported formats: PNG, JPG, WebP, GIF

The hero image will float with a pink glow effect automatically.
The about image will appear inside the pixel-frame with corner accents.

---

## Adding Event Photos

In `src/data/portfolio.js`, find the event and populate `photos`:

```js
{
  title: "AWS Serverless Workshop",
  date: "Jun 14, 2025",
  role: "Chief of Operations & Events",
  description: "...",
  photos: [
    "/photos/serverless-1.jpg",
    "/photos/serverless-2.jpg",
  ],
},
```

Drop photo files into `public/photos/`. The modal will show them with dot navigation.

---

## Changing the Color Theme

Open `src/styles/global.css` and edit the `:root` block:

```css
:root {
  --pink:       #E8175D;  /* main accent — change this! */
  --pink-light: #ff6ea0;
  --bg:         #0e0a0d;  /* background color */
  /* ... */
}
```

Change `--pink` and `--bg` to retheme the whole site instantly.

---

## Build for Production

```bash
npm run build
# Output → /dist  — deploy to Vercel, Netlify, GitHub Pages
```
