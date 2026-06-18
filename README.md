# Changent Design System

A single source of truth for **decks, reporting UI, Power BI themes, and web** at Changent. Built on the Changent brand palette and the UX/UI + Accessibility guidelines, with every color, type ramp, and spacing value validated against **WCAG 2.1 AA**.

> **Design principle — semantic ≠ brand.** Status colors (success / warning / danger / info / neutral) are chosen for *contrast and colorblind safety*, not for matching the brand palette. A brand color and a status color can be the same hue, but they are governed by different rules. See [`docs/color.md`](docs/color.md).

---

## What's in here

| Path | What it is | Use it for |
|------|-----------|-----------|
| [`tokens/tokens.json`](tokens/tokens.json) | The canonical tokens (W3C design-tokens format) | The source everything else derives from |
| [`css/changent-ds.css`](css/changent-ds.css) | CSS custom properties + utility classes | Reporting UI (HTML/React), web, landing pages |
| [`powerbi/changent-powerbi-theme.json`](powerbi/changent-powerbi-theme.json) | Importable Power BI theme | Power BI reports |
| [`docs/`](docs/) | Color, typography, layout, components, accessibility, logos | Reference when designing anything |
| [`assets/logos/`](assets/logos/) | Logo lockups (horizontal + vertical; primary / white / black) | Decks, report headers, nav |
| [`preview.html`](preview.html) | Living style guide — open in a browser | Visual reference of every token & component |

---

## Quick start

### Decks (PowerPoint / Google Slides)
1. Read [`docs/decks.md`](docs/decks.md) for the slide system (title, content cards, status rows, closing).
2. Use the deck color + type values from [`docs/color.md`](docs/color.md) and [`docs/typography.md`](docs/typography.md).
3. Or hand this repo to Claude in Claude Design and ask for a deck — the tokens are written to be machine-readable.

### Reporting UI / web
```html
<link rel="stylesheet" href="css/changent-ds.css">
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
- **Consistent meaning across pages** — orange = below target *everywhere*.
- **Font:** Segoe UI for all UI and content (Power BI standard).
- **Minimum 14px** for titles, labels, and key data; 12px only for tooltips/footnotes/legends.

Full pre-publish checklist in [`docs/accessibility.md`](docs/accessibility.md).

---

## Versioning

Semantic versioning. Token changes that alter a published value are a minor bump; additive tokens are a patch. Current: **1.0.0**.
