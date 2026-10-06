# portfolio-site

A simple, single-file portfolio website. **No build step, no dependencies** — everything (HTML, CSS and JavaScript) lives in [`index.html`](index.html).

## Editing your content

Open [`index.html`](index.html) and search for the numbered comment blocks (`===== 1. THEME =====`, `===== 14. HERO =====`, etc.):

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

- Double-click `index.html`, or
- With the **Live Server** extension in VS Code: right-click `index.html` → *Open with Live Server*.

## Deploying (GitHub Pages)

1. Push the repository to GitHub.
2. Repo → **Settings** → **Pages** → Source: *Deploy from a branch* → `main` / root.
3. The site appears at `https://<username>.github.io/portfolio-site/`.

## Customizing the placeholder content

All text (name "Alex Morgan", email, links, projects) is placeholder content — replace it with your own. External links use `https://example.com` and `github.com/yourusername` as placeholders.
