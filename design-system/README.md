Ahlawat is an editorial system for a backend engineer's work: a near-black **Ink** page (or warm **Paper**), one mint-to-jade accent, a crisp grotesque paired with a serif italic, and code treated as a first-class visual. It should read like a well-set magazine spread that happens to return `200 OK`.

## Principles

- **One hue.** `primary` is the only colour with a voice. Everything else is `foreground`, `muted-foreground` and hairlines. Syntax colours appear only inside code.
- **Sans states, serif sings.** Headlines are Geist Medium with tight tracking; the last word turns to Instrument Serif italic in `primary`.
- **Hairlines, not shadows.** Structure comes from 1px `border` rules and glassy `card-glass` fills. Shadows are reserved for three floating things (nav, console, the hero's primary button).
- **Pills and big radii.** Controls are `radius-full`; cards are `radius-3xl`. No square corners anywhere a hand touches.
- **Show the API.** The work is backend, so the page shows requests, JSON, flows and logs instead of illustrations.

## Content fundamentals

- **Voice:** first person, plain and confident. "Where I've been shipping." "Let's build something reliable." No hype words, no exclamation marks, no emoji.
- **Headlines** are short sentence-case phrases ending on an accent word with its full stop: `title` "Systems I've" + `accent` "built.". One or two accent words, never a whole clause.
- **Eyebrows and labels** are UPPERCASE mono with wide tracking (`eyebrow` 0.2em, `label` 0.15em), numbered sections first: `01 — EXPERIENCE`.
- **Bullets** open with a bold 2–4 word lead and a full stop, then a past-tense sentence ending in an outcome: "**Log management.** Implemented MongoDB-based logging with compression, full-text search, and dynamic decompression for faster diagnostics…"
- **Numbers** are exact and checkable — "80.55%", "2+", "5". Never round up or invent.
- **Punctuation:** em dashes with spaces ( — ), curly quotes, the middle dot ( · ) to join peers ("TBO · TravelFusion · Sabre"), `→` only in flows.
- **Code copy** is real-looking but safe: masked identifiers (`pnr=***`), truncated tokens (`Bearer eyJhbGciOi…`).

## Colour

Two themes: **Ink** (dark, the default — `theme-color #0a0a0b`) and **Paper** (light). Always switch the whole page; never mix.

- Page on `background`; raised panels on `card`, or `card-glass` (card at 60%) when the blueprint grid should show through.
- Text in `foreground`; secondary copy, meta and chips in `muted-foreground`. Both pass 4.5:1 on every surface in both themes.
- `primary` for: accent words, the primary button, live dots, index numbers, icon glyphs, scroll progress, focus `ring`. Tinted fills use `primary-soft` (10%) with a `primary-line` border and `primary` text — the "current" badge, a matched skill, the highlighted flow node.
- Label on a primary fill is `primary-foreground` (dark on mint; white on jade).
- `border` for every rule; `border-strong` on hover.
- Code: keys `syntax-key`, strings `syntax-string`, numbers `syntax-number`, literals (`true`) `primary`, punctuation `muted-foreground`.
- `destructive` is for errors only and never appears on the CV.

**Known contrast gaps kept from the source (Paper theme):** `primary` as small text on `background` is 4.20:1 — keep jade text at 24px+ (accent words) or in medium-weight mono labels; white on `primary` is 4.46:1 — keep button labels at 16px medium; `syntax-number` is 3.76:1 on `card` — always pair WARN colouring with the word. Ink passes everywhere except `destructive` on `card` (4.30:1).

## Type

Three Google-hosted families, loaded by `components/bundle.css`:
`Geist` (300–800, `--font-sans`), `Instrument Serif` regular + italic (`--font-serif`), `Geist Mono` (400–600, `--font-mono`). Body sets `font-feature-settings: "ss01", "cv11"`.

- `display-hero` + `display-accent` — the two-line name: sans word, then serif italic word in `primary`. 0.88 leading, −0.055em tracking. One per site.
- `display-contact` — the closing call to action.
- `heading-section` (60px; 48px at sm, 36px on phones) with `heading-accent` at 1.08em.
- `heading-role` 24px, `heading-card` 20px — medium, −0.025em.
- `lead` 20px for the hero intro; `body-lg` 16.8px for experience bullets; `body` 16px; `small` 14px.
- Mono: `eyebrow`, `label`, `kicker` (UPPERCASE), `chip`, `code` 13px/24px, `code-sm` 12px.
- `monogram` — ghosted serif initials (MCA, BCA) at 30% muted.
- Balance headings (`text-wrap: balance`), pretty-wrap paragraphs, measure ≤ `measure` (576px).

## Layout & spacing

- Content width `container` (1152px), gutters `space-5` → `space-8` at 640px.
- Sections pad `space-28` → `space-36` vertically and are separated by a full-width `border` rule. The work section sits on a `card` band at 30%.
- `SectionHeading` sits `space-14` above its content.
- Card grids gap `space-4`; the work grid is 6 columns at md+, cards spanning 2, 3 or 4 for a bento rhythm.
- The timeline uses a 15rem sticky meta column beside a ruled bullet column.
- Breakpoints follow Tailwind: 640 / 768 / 1024.

## Shape, depth & surfaces

- Radii: `radius-full` for buttons, chips, nav, inputs; `radius-3xl` for cards; `radius-console` for the API console; `radius-xl` icon tiles; `radius-2xl` code windows; `radius-lg` skill tags and flow nodes; `radius-xs` kbd and method tags.
- Shadows: `shadow-nav`, `shadow-console`, `shadow-primary` (hero button only), `shadow-tab`, `shadow-dialog` (command menu). Nothing else casts a shadow. Dialogs sit on an `overlay` scrim.
- Backdrops: the `Backdrop` component — `grid-line` blueprint grid at `grid-pitch` (56px), radially masked; a 120px-blurred `primary-soft` glow; page-wide film grain at `opacity-grain`. Hero (top) and contact (bottom) only.
- The console gets a 1px gradient edge from `primary-line` through `border` to transparent — the one gradient in the system.

## Motion

- Easing `cubic-bezier(0.22, 1, 0.36, 1)` for every entrance; durations 0.6–1.0s; stagger 0.05–0.1s.
- Entrances rise 24–28px and fade in (the hero also un-blurs from 8px). Elements reveal once, when 80px into view.
- Shared-layout springs (bounce 0.18–0.2, ~0.5s) slide the active nav pill and console tab.
- Hover: primary buttons lift 2px and the arrow turns 45°; cards light up under the pointer; timeline dots turn `primary`.
- Ambient: marquee 40s linear, flow packets 2.4s, ping/pulse on live dots, typed JSON at 45ms/line.
- Everything ambient stops under `prefers-reduced-motion`; entrances become instant.

## States & accessibility

- Focus: 2px solid `ring`, 3px offset, 6px radius, on every focusable element.
- Hover changes colour or border, never layout (except the 2px lift on primary buttons).
- Icon-only buttons always carry an `aria-label`; decorative motion (marquee, glows) is `aria-hidden`.
- A skip link ("Skip to content") appears at `z-skip` on focus. Print hides nav and grain (`.no-print`).

## Iconography

- **lucide-react 0.545.0**, 24px grid, 2px stroke, round caps — drawn at 14px inline with small text, 16px in buttons, 18px in `IconTile`s, always in `currentColor`. The 19 glyphs in use are in the Icons asset group and in `Ahlawat.Icon`.
- **Font Awesome brands** (via react-icons) for GitHub and LinkedIn only.
- Icons sit in `muted-foreground` and turn `foreground` on hover; inside tiles they are `primary`.
- No emoji, no illustrations, no photography. The live dot (●) is the only glyph used as decoration.

## Logo

The mark is a lowercase serif-italic **a** in mint (`#4ade9f`) on an Ink rounded square (`Logos/monogram.svg`, favicon). In the UI it's set live: `Nav` draws it as a 36px `foreground` disc with the letter in `background`. There is no wordmark — the name is always set in type (`display-hero` + `display-accent`).

## Components

Load `tokens.css`, `components/bundle.css`, React 18 and `components/bundle.js`; everything is on `window.Ahlawat`.

- **Actions:** `Button`, `EmailCopy`, `Kbd`
- **Content:** `SectionHeading`, `Chip`, `StatusPill`, `StatGrid`, `Marquee`, `SkillTag`, `ScoreRing`
- **Surfaces:** `SpotlightCard`, `IconTile`, `WorkCard`, `Backdrop`
- **Navigation:** `Nav`, `CommandMenu` (⌘K), `Timeline`
- **Forms:** `SearchField`
- **Code:** `ApiConsole`, `CodeWindow`, `FlowDiagram`, `LogList`
- **Foundations:** `Icon`

Set `data-theme="ink"` or `data-theme="paper"` on `<html>` to switch themes.

## Not synced

Hand-written components omit framer-motion (entrances, layout springs, the spring-smoothed scroll bar) — CSS covers hover and ambient motion only. The stock shadcn/ui kit in `src/components/ui` (≈55 files) is not included; its `Command` + `Dialog` styling lives on in `CommandMenu`, whose cmdk/Radix behaviour (filtering, keyboard, focus) is re-implemented by hand — cmdk's fuzzy ranking is replaced by substring matching. `public/opengraph.jpg` predates this design (cyan accent) and was left out. Fonts are Google-hosted, so no font files are stored.
