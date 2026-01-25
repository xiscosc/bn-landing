# BN Mallorca Radio Landing

Landing page for BN Mallorca Radio with services showcase.

## Tech Stack

- **Framework**: SvelteKit 2 + Svelte 5
- **Runtime**: Bun
- **Styling**: Tailwind CSS 4
- **Linting/Formatting**: Biome 2
- **Images**: @sveltejs/enhanced-img
- **Deployment**: Cloudflare Pages

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
src/
├── lib/
│   ├── assets/          # Images (processed by enhanced-img)
│   └── components/      # Svelte components
├── routes/
│   ├── +layout.svelte   # Main layout (black bg)
│   ├── +page.svelte     # Home page
│   ├── privacy/         # Privacy policy
│   └── servicios/       # Services section (white bg, noindex)
│       ├── +layout@.svelte  # Standalone layout
│       └── no-disponible/   # Service unavailable page
static/
├── radioplayer/         # Legacy radio player (HTML)
└── servicios/           # Audio files for services
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home - app links, social media |
| `/privacy` | Privacy policy |
| `/radioplayer` | Legacy HTML radio player |
| `/servicios` | Services showcase (noindex) |
| `/servicios/no-disponible` | Service unavailable message |

## Redirects

- `/privacy.html` → `/privacy`
- `/radioplayer.html` → `/radioplayer`
- `/?page=privacy` → `/privacy`

## Deployment

Deployed automatically to Cloudflare Pages. The build injects `CF_PAGES_COMMIT_SHA` as the version identifier in the footer.
