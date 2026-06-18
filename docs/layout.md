# Layout & Structure

A clean, minimalistic layout lets users navigate and interpret data without clutter — and exports cleanly to PDF/PowerPoint. Clarity, usability, export-readiness.

---

## Spacing system

**4pt / 8pt grid.** Pick `--sp-3` (12px) or `--sp-6` (24px) gaps and use them consistently — don't mix arbitrary values.

| Token | px | Typical use |
|-------|----|-----|
| `sp-1` | 4 | Icon-to-label gap |
| `sp-2` | 8 | Tight internal padding |
| `sp-3` | 12 | Cell padding, small gaps |
| `sp-4` | 16 | Default element gap |
| `sp-6` | 24 | Card padding, section gaps |
| `sp-8` | 32 | Major section separation |
| `sp-12` | 48 | Page-level breathing room |

Maintain ample white space. Every KPI, title, or block needs breathing room — avoid overcrowding.

---

## Radius & elevation

| Token | Value | Use |
|-------|-------|-----|
| `radius.md` | 8px | Default card radius (matches QBR cards) |
| `radius.pill` | 999px | Status chips, progress bars |
| `shadow.card` | subtle navy-tinted | White cards on canvas |

> **No accent stripes.** Do not set a card apart with an edge stripe, color bar, or single-side border — use the subtle shadow or a tint background instead. Edge stripes read as templated filler.

---

## Dashboard / report structure

The standard reporting layout (every page follows the same structure):

```
┌─────────┬──────────────────────────────────────────┐
│         │  HEADER: Report Title + Logo (top-right)  │
│  LEFT   ├──────────────────────────────────────────┤
│  NAV    │  FILTERS  (global, with Clear All)        │
│         ├──────────────────────────────────────────┤
│ (grey-  │  KPIs (top, F-pattern: key metrics       │
│  100)   │        top-left)                          │
│         │  ┌────────┐ ┌────────┐ ┌────────┐         │
│ Logo    │  │ chart  │ │ chart  │ │ chart  │         │
│ Title   │  └────────┘ └────────┘ └────────┘         │
│ Pages   │  full-width chart / table                 │
└─────────┴──────────────────────────────────────────┘
```

- **Left nav:** docked left, `grey-100` background, logo + title + page labels, persistent across pages.
- **Header:** title + logo repeated in the top-right of the canvas — critical because PDF/PowerPoint exports drop the left nav.
- **Filters:** global, beneath the header, with a Clear All button; place slicers in the **same spot on every page**.
- **Main area:** grid-aligned charts, consistent layouts across pages, F-pattern (key KPIs top-left).

---

## Behavior-based design

- Users scan in an **F-pattern** → put the most important KPI top-left.
- Prioritize numbers, keywords, and charts over long sentences.
- Use icons, bold, or color accents to direct attention to what matters.

---

## Navigation & interaction

- **Keyboard:** Tab order should flow filters → slicers → KPI cards → charts. Set in Power BI via Format → General → Tab Order.
- **Consistent filters:** same placement on every page; use global filters so users don't reset per page.
- Don't rely on hover tooltips for critical info — not keyboard accessible.
