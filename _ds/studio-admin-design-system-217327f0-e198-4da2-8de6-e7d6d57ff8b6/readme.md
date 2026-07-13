# Studio Admin — Design System

A design system distilled from **Studio Admin**, a modern admin-dashboard template
built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui. The product is a
clean, dense, neutral-by-default control surface for data apps: multiple dashboards
(Default, CRM, Finance, Analytics, Productivity, E-commerce, Academy), auth flows,
and email — with swappable theme presets and layout controls.

This project packages the product's **visual foundations** (OKLCH color tokens, the
Geist type system, spacing/radius/shadow scales), its **reusable components**, and a
high-fidelity **UI kit** recreation of the Default dashboard, so design agents can
produce on-brand Studio Admin screens, slides, and prototypes.

## Source

- **GitHub:** https://github.com/arhamkhnz/next-shadcn-admin-dashboard
  (explore further for the full set of dashboards, auth layouts, and theme presets)
- **Live demo:** https://next-shadcn-admin-dashboard.vercel.app
- Theme presets are inspired by [Tweakcn](https://tweakcn.com).

Tokens, presets, and component class structures below were lifted directly from the
repo's `src/app/globals.css`, `src/styles/presets/*.css`, and `src/components/ui/*`.

---

## Content fundamentals

How Studio Admin writes copy:

- **Voice.** Plain, declarative, product-UI English. Labels are short noun phrases
  ("Total Revenue", "Active Accounts", "Recent Customers"). Supporting lines are
  terse, confident sentence fragments: "Engagement exceeds targets", "Acquisition
  needs attention", "Meets growth projections".
- **Person.** Mostly impersonal/imperative. Buttons are verbs ("Quick Create",
  "Add customer", "Login", "Register"). Auth speaks to "you" ("Enter your details
  to access the dashboard", "Remember me for 30 days").
- **Casing.** Title Case for nav items, section titles, buttons, and table headers
  ("Total Visitors", "Add customer" is sentence-case occasionally on inline actions).
  Metric labels are Title Case. No ALL-CAPS except small mono keycaps (⌘K).
- **Numbers.** Currency with thousands separators and two decimals ($1,250.00);
  counts with separators (45,678); deltas as signed percentages (+12.5%, -20%).
  Numerals are tabular and slightly tight-tracked.
- **Tone.** Neutral and operational — this is a back-office tool, not a marketing
  site. No exclamation marks, no hype, no jokes.
- **Emoji.** None. The UI is emoji-free; status and trend are carried by icons +
  color, never emoji.
- **Empty/placeholder states.** Honest and instructive ("This screen is part of the
  template…"). Coming-soon items are flagged with a small "Soon" pill rather than
  hidden.

---

## Visual foundations

**Palette.** Achromatic by default. The shipped "neutral" shadcn theme is pure
grayscale in OKLCH — `--background` is white (`oklch(1 0 0)`), `--foreground` near-black
(`oklch(0.145 0 0)`), and `--primary` is a near-black ink (`oklch(0.205 0 0)`) used for
solid buttons and the brand mark. The **only chromatic hue in the base theme is red**
(`--destructive`), reserved for negative deltas and destructive actions. Even charts
default to a light→dark gray ramp (`--chart-1..5`). Color arrives only via **theme
presets** (Tangerine warm-orange, Soft Pop vivid indigo/teal/amber, Brutalist red) —
swap by setting `[data-theme-preset]` on `:root`.

**Type.** Geist (sans) for all UI, Geist Mono for numerals/code. The scale is
**compact and dense**: 14px (`text-sm`) is the workhorse body/UI size, 12px
(`text-xs`) for meta and badges, 16px for card titles, 24px for page headings, and
~30px for KPI metric numbers. Weight 500 (medium) does most of the work — buttons,
titles, labels, and active nav are all 500; 600 for page headings; 400 for body prose.
KPI numerals use `tabular-nums` and slight negative tracking.

**Spacing & density.** 4px base unit. Cards pad 16px (12px in `sm`). Controls are
short — buttons and inputs are **h-8 (32px)** by default, badges h-5 (20px). Page
content padding is 24px. This is a tight, information-dense layout, not an airy
marketing one.

**Radius.** Driven by one knob, `--radius: 0.625rem` (10px). Buttons/inputs use
`lg` (10px), cards use `xl` (14px), badges are fully rounded (`4xl`). Presets retune
the knob: Soft Pop bumps it to 16px, Brutalist drops it to 0.

**Elevation.** Near-flat. Cards are defined by a **1px hairline ring**
(`box-shadow: 0 0 0 1px var(--ring-hairline)`) plus at most a faint `shadow-xs` — not
drop shadows. Depth comes from borders and the subtle sidebar/background surface split.
(The Brutalist preset is the exception: hard 4px offset shadows.)

**Borders.** Hairline `--border` (`oklch(0.922 0 0)` light, `#fff/10%` dark)
everywhere — between table rows, around cards, under the header, splitting the sidebar.
Borders, not shadows, carry structure.

**Backgrounds.** Solid surfaces, no photographic or illustrative backgrounds. The app
shell uses a two-tone split: a slightly off-white `--sidebar` rail against a white
`--background` content inset, with the inset panel bordered and rounded. Metric cards
add a barely-there top gradient (`from-primary/5 to-card`). The auth screen pairs a
white form column with a solid `--primary` (near-black) testimonial panel.

**Color of imagery.** Avatars are **desaturated** (grayscale filter) in the sidebar
and tables — a deliberate neutral, restrained look that keeps focus on data.

**Motion.** Restrained. Color/background transitions ~150ms ease on hover; the sidebar
collapses with a ~180ms width transition. Buttons nudge down 1px on press
(`active:translate-y-px`). No bounces, no parallax, no decorative looping animation.

**Hover / press states.** Hover = a fill change toward `--muted`/`--accent` (ghost &
nav rows) or an opacity drop on solid fills (`primary/80`). Active nav row gets the
`--sidebar-accent` fill. Press = the 1px downward nudge. Focus = a 3px translucent ring
in `--ring` plus a solid ring-colored border.

**Dark mode.** First-class via `.dark`. Surfaces invert to near-black
(`--background: 0.145`, `--card: 0.205`), borders become translucent white, and
`--primary` flips to near-white so solid buttons read as light-on-dark.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) (`lucide-react`) — the product's sole icon
  set. 24px grid, **2px stroke, round caps/joins, no fill**. Used at 16px (size-4) in
  buttons, nav rows, and inputs; 12px (size-3) inside badges for trend arrows.
- **Brand glyphs:** [Simple Icons](https://simpleicons.org) for logos (GitHub, Google)
  — these are **filled** marks, the exception to the stroke-only rule.
- **Logo mark:** the Lucide **Command** (⌘) glyph, set in a rounded-square chip filled
  with `--primary`, paired with the "Studio Admin" wordmark in Geist 700.
- **Emoji / unicode:** none used as icons. The only unicode glyph in the UI is ⌘ in the
  `⌘K` search keycap.
- In this system, the UI kit ships a hand-picked subset of Lucide paths
  (`ui_kits/studio-admin/icons.jsx`). For new work, use Lucide from CDN
  (`https://unpkg.com/lucide@latest`) or copy the exact path geometry — match the 2px
  stroke, round-cap style; never substitute a filled or hand-drawn icon.

---

## What's in here (manifest)

Root:
- `styles.css` — the single entry point consumers link (`@import` manifest only).
- `tokens/` — `colors.css` (neutral light/dark), `presets.css` (Tangerine / Soft Pop /
  Brutalist), `typography.css`, `spacing.css` (spacing + radius + shadow), `fonts.css`
  (Geist + Geist Mono via Google Fonts), `base.css` (element resets).
- `assets/` — `logo-mark.svg`, `logo-lockup.svg`.
- `guidelines/cards/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown
  in the Design System tab.

Components (`components/<group>/`) — token-driven React primitives:
- `button/` — **Button** (6 variants, 7 sizes)
- `badge/` — **Badge** (status & KPI-delta pills)
- `card/` — **Card** + `CardHeader/Title/Description/Content/Footer`
- `forms/` — **Input**, **Label**, **Switch**, **Checkbox**
- `avatar/` — **Avatar** (rounded-square, initials fallback, grayscale)

UI kit (`ui_kits/studio-admin/`):
- `index.html` — interactive recreation of the **Default dashboard** (login → app,
  collapsible sidebar, theme/dark toggle, KPI cards, visitors area chart, customers
  table). Composed from the component primitives + the Lucide icon set.

---

## Notes & substitutions

- **Fonts** are loaded from Google Fonts (Geist, Geist Mono) rather than bundled binary
  files. If you need self-hosted woff2s, drop them in `assets/fonts/` and add
  `@font-face` rules to `tokens/fonts.css`.
- The product ships **~18 swappable fonts** and four theme presets; this system keeps
  Geist + the three named presets as the canonical set. The full font roster lives in
  the source repo's `src/lib/fonts/registry.ts`.
- Charts here are lightweight SVG recreations for visual fidelity, not a charting
  library (the product uses Recharts via shadcn's chart wrapper).
