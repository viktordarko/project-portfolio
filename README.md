# Portfolio — Victor Vargas

A personal portfolio SPA, originally built in 2023 with Create React App and
since modernized to a fast, type-safe stack.

## Tech stack

- **[Vite](https://vite.dev/)** (with **Lightning CSS**) — build tool & dev server
- **React 19** + **TypeScript**
- **[React Router](https://reactrouter.com/)** — client-side routing
- **CSS Modules** — component-scoped styling on a dark design-token system
- **[Swiper](https://swiperjs.com/)** — experience carousel
- **[Motion](https://motion.dev/)** — page transitions and scroll reveals
- **[react-icons](https://react-icons.github.io/react-icons/)** — crisp SVG tech & social icons
- Fonts: **Space Grotesk** (display) + **Inter** (body)
- **[oxlint](https://oxc.rs/)** — linting
- **pnpm** — package manager

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check and build for production (`dist/`) |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Run oxlint |
| `pnpm typecheck` | Type-check without emitting |

## Architecture

- **Content lives in [`src/data.ts`](src/data.ts)** — typed records for the hero,
  tech stack, spoken languages, countries, contact links, experience, and
  projects. Adding an entry there automatically updates the UI; the original
  "just add an object" promise still holds, now type-checked.
- **Dark design tokens** (surfaces, accent + gradient, fonts, spacing, container)
  live in [`src/styles/tokens.css`](src/styles/tokens.css); the reset and base
  element styles in [`src/styles/global.css`](src/styles/global.css).
- **Shared presentational pieces** (`Container`, section headings, page
  transition, scroll reveal) live in
  [`src/components/shared/`](src/components/shared/).

## Sections

- **Home** — animated hero (name, role, tagline, social links, Download CV),
  a grouped **Tech Stack** with SVG icons, and an **About** strip with languages
  and countries.
- **Experience** — Swiper carousel of work history; previous/next slides peek
  and are clickable, with a "show more" details panel below.
- **Projects** — grid of project cards; placeholder uses a pure-CSS night sky.
- **Contact** — icon cards (react-icons) that lift on hover.

## Resume

The hero's **Download CV** button links to `/resume.pdf`. Drop your PDF at
[`public/resume.pdf`](public/) to enable it.
