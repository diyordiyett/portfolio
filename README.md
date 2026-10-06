# portfolio-site

A simple portfolio website — no build step, no dependencies:

| | File(s) | Best for | Size |
| --- | --- | --- | --- |
| **Main site** (what's served) | [`index.html`](index.html) + [`content.js`](content.js) | Editing all content in **one data file** — you never touch HTML | ~20 KB across 2 files, zero external resources |
| **Single-file version** | [`index-full.html`](index-full.html) | Everything in one HTML file, works without JavaScript | ~24 KB, 1 request (plus optional Google Fonts) |

`index.html` is what the browser and GitHub Pages open by default — and its content comes entirely from `content.js`.

## Editing your content — the only file you touch is `content.js`

Open [`content.js`](content.js) — **that's the only file you need to touch.** It contains:

- `theme` — colors (CSS variables)
- `site` — page title, description, logo
- `nav`, `hero`, `about`, `skills`, `projects`, `contact`, `footer` — all page text and links

Save, refresh the browser, done. Copy a whole block to add a project/skill group/nav link; delete a `nav` line to hide a link.

## Editing the single-file version (`index-full.html`)

Open [`index-full.html`](index-full.html) and search for the numbered comment blocks (`===== 1. THEME =====`, `===== 14. HERO =====`, etc.):

| What you want to change | Section |
| --- | --- |
| Colors, font, content width | `1. THEME` (CSS variables at the top of `<style>`) |
| Site name + navigation links | `13. HEADER` |
| Your name, tagline, intro | `14. HERO` |
| Your story + quick facts | `15. ABOUT` |
| Skill groups | `16. SKILLS` — copy a whole `<div class="skill-card">` block |
| Projects | `17. PROJECTS` — copy a whole `<article class="project-card">` block |
| Contact pitch + social links | `18. CONTACT` |
| Footer text | `19. FOOTER` (the year updates automatically) |

> Tip: each nav link's `href="#about"` must match a section's `id="about"` — keep them in sync when you add or rename sections.

## Viewing locally

- Double-click the HTML file, or
- With the **Live Server** extension in VS Code: right-click → *Open with Live Server*.

(Both versions work opened straight from disk — `content.js` sits next to `index.html`.)

## Deploying (GitHub Pages)

1. Push the repository to GitHub.
2. Repo → **Settings** → **Pages** → Source: *Deploy from a branch* → `main` / root.
3. The site appears at `https://<username>.github.io/portfolio-site/`.

## Placeholder content

All text (name "Alex Morgan", email, links, projects) is placeholder content — replace it with your own. External links use `https://example.com` and `github.com/yourusername` as placeholders.

## Key differences between the versions

| | Single-file (`index-full.html`) | Main (`index.html`) |
| --- | --- | --- |
| Where to edit | Markup itself, guided by comments | `content.js` only |
| Fonts | Google Fonts (optional) | System fonts (no network) |
| Scroll animations | Yes (respects reduced-motion) | None (fastest) |
| Works without JavaScript | Yes | No (shows a notice) |
