# Portfolio — Victor Vargas

A personal portfolio SPA, originally built in 2023 with Create React App and
since modernized to a fast, type-safe stack.

## Tech stack

- **[Vite](https://vite.dev/)** (with **Lightning CSS**) — build tool & dev server
- **React 19** + **TypeScript**
- **[React Router](https://reactrouter.com/)** — client-side routing
- **CSS Modules** — component-scoped styling on a dark design-token system
- **[Swiper](https://swiperjs.com/)** — experience carousel (custom coverflow config)
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
| `pnpm typecheck` | Type-check the project (`tsc -b`) |

## Architecture

- **Content lives in [`src/data.ts`](src/data.ts)** — typed records for the hero,
  tech stack, spoken languages, countries, contact links, experience, and
  projects. Adding an entry there automatically updates the UI; the original
  "just add an object" promise still holds, now type-checked.
- **Dark design tokens** (surfaces, accent + gradient, fonts, spacing, container)
  live in [`src/styles/tokens.css`](src/styles/tokens.css); the reset and base
  element styles in [`src/styles/global.css`](src/styles/global.css).
- **Shared pieces** live in [`src/components/shared/`](src/components/shared/) —
  `Container`, section headings, page transition and scroll reveal, plus
  [`techIcons.ts`](src/components/shared/techIcons.ts), the icon-key →
  react-icons registry that both the Tech Stack section and the project cards
  resolve against.

## Sections

- **Home** — animated hero (name, role, tagline, social links, Download CV),
  a grouped **Tech Stack** with SVG icons, and an **About** strip with languages
  and countries.
- **Experience** — a full-bleed 3D coverflow carousel of work history built on
  Swiper: five cards above the 800px breakpoint, three below. Peeking cards are
  clickable, and the "show more" panel underneath tracks the active role. The
  role list is repeated so there are enough slides for Swiper's loop mode, which
  requires at least `slidesPerView * 2`.
- **Projects** — cards carrying a screenshot, a lead-framework badge, a short
  description, a tech-icon rail with hover tooltips, and a source link where the
  repository is public. The "more on the way" tile is a pure-CSS night sky.
- **Contact** — icon cards (react-icons) that lift on hover.

## Resume

The hero's **Download CV** button links to `/resume.pdf`. Drop your PDF at
[`public/resume.pdf`](public/) to enable it.
