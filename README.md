# Casa Letizia

Bilingual (Hebrew / English) landing page for Casa Letizia, Bagni di Lucca.
Vite + TypeScript, no framework. Served by a Cloudflare Worker with static assets.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run deploy   # build + wrangler deploy to the bagnidilucca Worker
```

## Deploy

`wrangler.jsonc` targets the existing Worker `bagnidilucca` in the
sampsonecommerce@gmail.com Cloudflare account. my-tuscany-home.com is attached
to that Worker as a custom domain, so a deploy replaces the site with no DNS change.

- Manual: `npx wrangler login` (that account), then `npm run deploy`.
- Automatic: the GitHub Actions workflow deploys on every push to `main` once the
  repo secret `CLOUDFLARE_API_TOKEN` exists (Workers Scripts: Edit permission).

## Where things live

- `src/content.ts` — every string on the page, in both languages. Edit copy here.
- `src/render.ts` — the page template (one function per section).
- `src/main.ts` — boot: language detection, toggle, lightbox, story expander.
- `src/styles.css` — design tokens and all styles. Logical properties only, so RTL works by flipping `dir`.
- `public/images/` — photos. Replace a file with the same name to swap a photo.
- `public/CNAME` — custom domain. Remove if not using one.

## Language

Default is Hebrew. `?lang=en` forces English. The choice is remembered per browser.
