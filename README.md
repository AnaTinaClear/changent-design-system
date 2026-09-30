# Changent Design System

A single source of truth for **decks, reporting UI, Power BI themes, and web** at Changent. Built on the Changent brand palette and the UX/UI + Accessibility guidelines, with every color, type ramp, and spacing value validated against **WCAG 2.1 AA**.

> **Design principle — semantic ≠ brand.** Status colors (success / warning / danger / info / neutral) are chosen for *contrast and colorblind safety*, not for matching the brand palette. A brand color and a status color can be the same hue, but they are governed by different rules. See [`docs/color.md`](docs/color.md).

---

## What's in here

| Path | What it is | Use it for |
|------|-----------|-----------|
| [`tokens/`](tokens/) | **The only source of truth** — W3C DTCG tokens: primitives, semantic (light/dark), dataviz | Edit here, then `npm run check` |
| [`dist/`](dist/) | *Generated:* `tokens.css`, `tailwind.css` (Tailwind v4 + shadcn/ui), `tokens.js` + types (charts) | Web apps (React/HTML) |
| [`powerbi/changent-powerbi-theme.json`](powerbi/changent-powerbi-theme.json) | *Generated,* schema-validated Power BI theme | Power BI reports |
| [`css/changent-ds.css`](css/changent-ds.css) | Utility classes (`.card`, `.chip`, `.table`, `.btn`, `.input`…) | Plain HTML pages |
| [`docs/`](docs/) | Color, typography, layout, components, accessibility, logos | Reference when designing anything |
| [`assets/logos/`](assets/logos/) | Logo lockups (horizontal + vertical; primary / white / black) | Decks, report headers, nav |
| [`preview.html`](preview.html) | Living style guide — open in a browser | Visual reference of every token & component |

---

## Quick start

### Decks (PowerPoint / Google Slides)
1. Read [`docs/decks.md`](docs/decks.md) for the slide system (title, content cards, status rows, closing).
2. Use the deck color + type values from [`docs/color.md`](docs/color.md) and [`docs/typography.md`](docs/typography.md).
3. Or hand this repo to Claude in Claude Design and ask for a deck — the tokens are written to be machine-readable.

### Web apps (React + Tailwind v4 + shadcn/ui)
```css
/* src/index.css */
@import "tailwindcss";
@import "@changent/design-system/tailwind.css";
```
```ts
import { chart } from "@changent/design-system/tokens"; // Recharts palettes & status colors
```

### Plain HTML
```html
<link rel="stylesheet" href="css/changent-ds.css">  <!-- imports dist/tokens.css -->
```
```html
<div class="card">
  <span class="chip chip--success">✓ Completed</span>
  <p class="kpi-value">79%</p>
  <p class="kpi-label">Client Utilization</p>
</div>
```

### Power BI
**Power BI Desktop → View → Themes → Browse for themes →** select `powerbi/changent-powerbi-theme.json`.

---

## The non-negotiables

These come straight from the Changent accessibility guide and apply to every output:

- **Contrast:** ≥ 4.5:1 for regular text, ≥ 3:1 for large/bold text and chart fills.
- **Never rely on color alone** — reinforce every status with an icon, label, or pattern.
- **Max 6 colors per visual** — group extras into tints of the same hue.
- **Consistent meaning across pages** — amber (`status.warning`) = below target / at risk *everywhere*.
- **Borders on controls ≥ 3:1** — `border.default` `#808285`.
- **Font:** Segoe UI for all UI and content (Power BI standard).
- **Minimum 14** for content (titles, labels, table cells, key data); 12 only for tooltips, footnotes, legends, axis titles; nothing below 12.

Full pre-publish checklist in [`docs/accessibility.md`](docs/accessibility.md).

---

## Developing

```bash
npm install
npm run check   # build dist/ + powerbi/ from tokens, then run all checks
```

`npm test` validates the Power BI theme against Microsoft's official schema, verifies every Power BI property name, enforces the 12-minimum font rule, and checks WCAG contrast for every text/border/status pair in light and dark mode. CI runs the same on every push and fails if generated files weren't rebuilt.

> `preview.html` still shows v1 values and will be regenerated from tokens in Phase 4 (living docs).

## Versioning

Semantic versioning. Changing a published value = major (renamed/removed tokens) or minor (value tweak); additive tokens = patch. Current: **2.0.0** — see [`CHANGELOG.md`](CHANGELOG.md) and [`MIGRATION.md`](MIGRATION.md).
