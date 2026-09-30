# Working with the Changent Design System

When generating **any** deck, dashboard, reporting UI, web page, or chart for Changent, follow these rules.

**Source of truth:** `tokens/*.tokens.json` (W3C DTCG). Everything in `dist/` and `powerbi/` is generated — never edit it by hand. After changing tokens run `npm run check` (build + tests). If a test fails, fix the token, don't weaken the test.

| Need | Use |
|---|---|
| Plain HTML/CSS | `css/changent-ds.css` (classes) + `dist/tokens.css` (`--cds-*` variables) |
| React + Tailwind v4 + shadcn/ui | `@import "@changent/design-system/tailwind.css"` → `bg-primary`, `text-muted-foreground`, `border-border`, `text-body`… |
| Charts (Recharts etc.) | `import { chart } from '@changent/design-system/tokens'` → `chart.categorical`, `chart.status.warning.fill`… |
| Power BI | `powerbi/changent-powerbi-theme.json` |

## Always
- **Font:** Segoe UI everywhere.
- **Never hardcode hex values** in app code. Use a semantic token; if none fits, add one to the tokens (and justify it) instead of inventing a color.
- **Status colors are semantic, not brand.** success / warning (amber = below target, at risk) / danger (`#C00000`) / info / neutral. Every status gets an icon **and** a label — never color alone.
- **Amber and cyan fills take dark text** (`on-fill` = `#1A1A18`). White on them fails.
- **Status as text on white → its `text` variant**, not its `fill`.
- **Text:** `text.primary` `#1A1A18`, `text.secondary` `#535456`, `text.muted` `#626875`. Disabled `#8B8D90` (never `#C0C0C0`).
- **Borders:** controls and card outlines use `border.default` `#808285` (≥3:1). `border.divider` `#E5E6E6` is for decorative separators and gridlines only.
- **Navy:** `#18216D` is the only UI navy. `#051E48` only as `surface.inverse` (deck title/closing slides).
- **Type sizes:** 14 minimum for content (titles, labels, table cells, key data). 12 only for tooltips, footnotes, legends, axis titles. Nothing below 12.
- **Max 6 colors per visual.** Categorical order: navy → cyan → orange → grey → green → purple. Never green beside orange or purple.
- **Spacing:** 4/8 grid (`--cds-space-*`). **Radius:** `md` 8px cards, `pill` chips. **Elevation:** `shadow.card`.

## Never
- No accent lines under titles; no decorative color bars or edge stripes on cards (the deck **status rail** is the only large color block).
- No blue/light-blue backgrounds; secondary brand colors never on navigation/layout.
- No white text on amber or cyan fills.
- Don't center body text; left-align (center only titles).

## Decks
Model on the QBR: `surface.inverse` (`#051E48`) title/closing slides; `surface.canvas` (`#E2E8F0`) content slides with white cards; left **status rail** colored by status. See `docs/decks.md`.

## Logos
Use `assets/logos/`. On dark surfaces use the **white transparent PNG** (`changent-*-white.png`); on light surfaces use `changent-*-primary.jpg`. Horizontal for headers/title slides, vertical for the narrow left nav. See `docs/logos.md`.

## Reporting UI / Power BI
Layout: left nav (`surface.nav`), global filters under a repeated header+logo, KPIs top-left (F-pattern). See `docs/layout.md` and `docs/accessibility.md`.
