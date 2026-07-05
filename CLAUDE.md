# Project instructions

## Styling — always use Tailwind CSS

**Default for every task:** all styling in this project is done with Tailwind CSS
(v4). When adding or changing styles, write Tailwind utility classes directly in
the JSX. Do **not** create CSS Modules (`*.module.css`) or hand-write vanilla CSS
rulesets for component styling.

Details:
- Design tokens (colors, fonts, breakpoints, radii) live in the `@theme` block in
  [app/globals.css](app/globals.css). Extend the theme there rather than
  hardcoding values, and reference tokens via the generated utilities
  (`bg-bg`, `text-fg-muted`, `border-border`, `text-accent`, `rounded-card`, etc.).
- Custom breakpoints: `nav` (45rem, header mobile-menu threshold) and
  `wide` (60rem, 3-column grids). `sm` is the Tailwind default (40rem).
- Global element defaults and the `.container` helper live in `@layer base` /
  `@layer components` in `globals.css`.
- For values not covered by a token, use Tailwind arbitrary values
  (e.g. `text-[0.95rem]`) to stay in the utility-class workflow.
- Tailwind is wired up via [postcss.config.mjs](postcss.config.mjs)
  (`@tailwindcss/postcss`); `globals.css` starts with `@import "tailwindcss"`.

## Environment note

The global `pnpm` binary is installed under Node v24, but the shell defaults to
Node v20 (which lacks `node:sqlite`). Run pnpm with v24 on PATH, e.g.
`export PATH="$HOME/.nvm/versions/node/v24.17.0/bin:$PATH"` before `pnpm`.
