# Advait Parmar Personal Site

Static personal website scaffold inspired by the content-first structure of
Tania Rascia's site: sidebar navigation, clean writing lists, project writeups,
theme controls, and a plain technical voice.

## Template choice

Tania's public repository is Gatsby, React, Markdown, PostCSS, Prism, RSS, and
local search. Her README says it was not built as a reusable theme, so this
starter keeps the visual direction but uses static HTML/CSS/JS for the first
version. That makes it easy to publish through GitHub Pages without a build
step.

The closest reusable upstream to migrate toward later is Gatsby's official
`gatsby-starter-blog`, because it matches the blog-first Gatsby/React/Markdown
model and already includes RSS, Markdown images, and syntax highlighting.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages deploy

For a user site:

1. Create a public repository named `zawarudo21.github.io`.
2. Copy the contents of this folder into that repository root.
3. Commit and push to `main`.
4. In GitHub, go to Settings > Pages and deploy from the `main` branch root.

For a project site, put these files in the project repository and choose either
the repository root or `/docs` as the Pages source. All links are relative, so
both deployment modes work.
