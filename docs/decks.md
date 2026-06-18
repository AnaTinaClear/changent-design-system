# Decks

The deck system is modeled on the **Changent QBR template**: a dark navy title/closing, light canvas content slides, and white cards with a colored **status rail** on the left.

Deck canvas is **16:9**. Title and closing slides use the dark background; content slides use the light canvas.

---

## Slide types

### 1. Title slide
- Background: `deck.bg-dark` (`#051E48`).
- Logo top-left, white transparent PNG: `assets/logos/changent-horizontal-white.png` (+ co-brand logo if applicable).
- Report title in white, 45pt Bold, lower-left third.

### 2. Content slide — status rows
The workhorse layout. A light canvas (`#E2E8F0`) holding stacked **white cards** (3 per slide). Each card:

```
┌──┬───────────────────────────────┬─────────────┬──────────┐
│  │ Project Name (18–24pt bold)   │ Delivery    │  image / │
│S │ Description + requirements    │ Contacts    │  chart   │
│T │ Stage Progress ▓▓▓▓▓░ 100%    │ Additional  │          │
│  │                               │ Info        │          │
└──┴───────────────────────────────┴─────────────┴──────────┘
 ↑ status rail (vertical label, white text on status fill)
```

- **Status rail** (left edge of card): the only place a status fill spans a large area. Vertical label in white/dark per the fill's `on-fill` rule.
  - Completed → `success.fill` `#198F51`, white label.
  - In Progress → `warning.fill` `#F3C11B`, **dark label** (`#22292A`).
  - Cancelled → `danger.fill` `#C00000`, white label.
- **Progress bar:** `success.fill` (done) on `grey-200` track, pill radius. Show the % as a label, not color alone.
- Card: `radius.md`, `shadow.card`, `sp-6` padding. No accent stripes beyond the status rail.

### 3. Closing slide
- Background: `deck.bg-dark`. Logo top-left (`changent-horizontal-white.png`). "Thank you!" in white, large.

---

## Building decks with this repo

The tokens are written to be machine-readable. In **Claude Design** (or Claude in PowerPoint), point at this repo and reference the tokens by name — e.g. *"status rail uses `semantic.warning.fill` with dark `on-fill` text", "cards use `radius.md` and `shadow.card`", "categorical charts follow `dataviz.categorical` order, max 6."*

### Color & type quick reference for slides
- Dark slides: text `#FFFFFF` on `#051E48`.
- Light slides: text `#22292A` on white cards over `#E2E8F0` canvas.
- Titles 45pt / subheaders 24pt / body 14pt, all Segoe UI.
- Status colors per [`docs/color.md`](color.md) — reinforce with icon + label.

---

## Don'ts (deck-specific)

- ❌ No accent lines under titles, no decorative color bars/stripes (the status rail is the *only* large color block).
- ❌ Don't center body text — left-align; center only titles.
- ❌ Don't put white text on the amber or cyan fill.
- ❌ Don't exceed 6 colors in any chart.
- ❌ Don't crowd — keep `sp-6` between cards, generous margins.
