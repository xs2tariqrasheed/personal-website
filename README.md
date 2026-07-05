# Personal Branding Website

A personal portfolio site built with [Next.js](https://nextjs.org) (App Router) — dark theme, fully static, SEO-optimized, and mobile responsive.

## Editing your content

**All content lives in a single file: [`data/profile.json`](data/profile.json).** Edit it to update everything on the site — no code changes needed:

- `personal` — your name, title, tagline, bio, email, location, and social links.
  - **`siteUrl`** — set this to your real domain once you have one (it drives canonical URLs, the sitemap, Open Graph tags, and JSON-LD).
- `skills` — skill groups shown on the home and experience pages.
- `experience` — work history entries (`"end": null` renders as "Present").
- `projects` — project cards (`"featured": true` shows them on the home page).
- `stories` — professional stories; each gets its own page at `/stories/<slug>` (`body` is an array of paragraphs).

The current content is dummy placeholder data — replace it with your real experience, projects, and stories.

## Development

```bash
pnpm dev     # start dev server at http://localhost:3000
pnpm build   # production build
pnpm lint    # run ESLint
```

## SEO

The site ships with:

- Per-page metadata, Open Graph, and Twitter card tags (all sourced from `profile.json`)
- JSON-LD structured data: `Person` + `WebSite` site-wide, `Article` on story pages
- `sitemap.xml` and `robots.txt` (generated from `app/sitemap.ts` / `app/robots.ts`)
- A generated Open Graph image (`app/opengraph-image.tsx`)
- Semantic HTML with one `<h1>` per page

After deploying, submit your sitemap in [Google Search Console](https://search.google.com/search-console) to speed up indexing.

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new). After deploying, set `personal.siteUrl` in `data/profile.json` to your production URL.
