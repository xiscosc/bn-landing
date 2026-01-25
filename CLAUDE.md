# Claude Context

## Project Overview

BN Mallorca Radio landing page with a services section for advertising offerings.

## Commands

```bash
bun dev          # Development server
bun run build    # Production build
bun run preview  # Preview build
bun run check    # Svelte type checking
bun run lint     # Biome lint + format check
```

## Tech Stack

- Svelte 5 (runes: `$state`, `$derived`, `$props`)
- SvelteKit 2 with Cloudflare adapter
- Tailwind CSS 4 (via @tailwindcss/vite plugin)
- Biome 2.x for linting/formatting
- @sveltejs/enhanced-img for image optimization

## Key Files

- `vite.config.ts` - Vite config with middleware for /radioplayer and .html redirects
- `svelte.config.js` - SvelteKit config with Cloudflare adapter
- `biome.json` - Biome 2.x config (uses `includes` with `!!` prefix for exclusions)
- `wrangler.toml` - Cloudflare Pages config

## Layout Structure

- `src/routes/+layout.svelte` - Main layout (black background)
- `src/routes/servicios/+layout@.svelte` - Servicios layout (white background, bypasses main layout with `@` suffix)

## Important Notes

- `/radioplayer` serves legacy HTML from `static/radioplayer/index.html` - do not modify
- `/servicios/*` routes have `noindex, nofollow` meta tags
- Footer shows company name + year on all pages, commit hash hidden only on home
- `__COMMIT_HASH__` is defined in vite.config.ts, uses `CF_PAGES_COMMIT_SHA` in production
- Biome 2.x uses `includes` array with `!!` prefix for exclusions (not `ignore`)
