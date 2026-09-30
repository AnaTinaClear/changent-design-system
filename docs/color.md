# Color

Two color systems live side by side. **Brand colors** carry identity. **Semantic colors** carry meaning. They follow different rules — never substitute one for the other.

> Values below are the v2 source of truth in `tokens/*.tokens.json`. Every pair listed here is checked automatically by `npm test`.

## 1. Brand palette (primitives)

| Token | Hex | On white | Role |
|---|---|---|---|
| `color.navy.900` | `#18216D` | 14.22:1 AAA | The only navy for UI: CTAs, titles, table headers, KPI values, selected nav |
| `color.navy.deep` | `#051E48` | — | **Only** through `surface.inverse` (deck title/closing slides). Never buttons or text — it is 1.15:1 against navy.900, so mixing them reads as a mistake |
| `color.cyan.500` | `#3FC4E0` | 2.06:1 | Fills only — never text on white |
| `color.orange.500` | `#F37121` | 2.92:1 | Fills only |
| `color.green.500` | `#80B036` | 2.57:1 | Fills only |
| `color.purple.500` | `#7A3779` | 7.92:1 | Data viz — use last, never beside green |
| `color.grey.400` | `#8B8D90` | 3.33:1 | Neutral series / no-data fill |

Rules: no blue or light-blue backgrounds; secondary colors (orange, green, purple, grey) only for data and highlights, never navigation or layout.

## 2. Semantic tokens (what UI code uses)

### Text
| Token | Value | Minimum contrast |
|---|---|---|
| `text.primary` | `#1A1A18` | 17.43:1 on white |
| `text.secondary` | `#535456` | ≥4.5:1 on every light surface |
| `text.muted` | `#626875` | ≥4.5:1 on every light surface (was `#6B7280`, which failed on the active-nav tint) |
| `text.brand` | `#18216D` | ≥4.5:1 on every light surface |
| `text.disabled` | `#8B8D90` | Disabled only (WCAG exempts it). Replaces `#C0C0C0` |

### Surfaces
`surface.default` #FFFFFF · `surface.subtle` #F8F9FC (alternating rows) · `surface.nav` #F3F2F0 (left nav, filter pane) · `surface.canvas` #E2E8F0 (deck canvas) · `surface.accent` #EEF0F8 (hover, sub-headers) · `surface.accent-strong` #E8EAF6 (active nav) · `surface.inverse` #051E48.

### Borders
| Token | Value | Use |
|---|---|---|
| `border.default` | `#808285` | Inputs, checkboxes, controls, card outlines. **≥3:1 on every light surface** (WCAG 1.4.11) — min 3.13:1 on the canvas |
| `border.divider` | `#E5E6E6` | Decorative separators and chart gridlines only. Not for control boundaries |
| `border.brand` | `#18216D` | Table outline |
| `border.focus` | `#18216D` | Focus ring |

### Status
Each status has `fill` (chips, bars, rails), `text` (status as text on white, ≥4.5:1), `on-fill` (text on top of the fill) and `tint` (subtle background).

| Status | fill | text | on-fill | Meaning |
|---|---|---|---|---|
| success | `#198F51` | `#157A43` | white — **bold ≥14pt only** (4.13:1) | Completed, on/above target |
| warning | `#F3C11B` | `#7A5800` | `#1A1A18` | **Below target, at risk**, in progress |
| danger | `#C00000` | `#C00000` | white | Critical, cancelled, SLA breach |
| info | `#3FC4E0` | `#0E6E80` | `#1A1A18` | Highlight, selection |
| neutral | `#8B8D90` | `#535456` | `#1A1A18` | No data, inactive, baseline |

Amber and cyan fills are below 3:1 on white. That is a documented exception: they are always paired with an icon and a label and carry dark text. **Never rely on color alone** — every status gets an icon (✓ ▲ ▼ ! i) and/or a text label.

**Orange vs amber:** amber (`status.warning`) is the categorical "at risk / below target" status. Orange stays a data-viz color and the low end of the continuous KPI diverging scale.

## 3. Data visualization

**Categorical** (apply in order, max 6 per visual): navy `#18216D` → cyan `#3FC4E0` → orange `#F37121` → grey `#8B8D90` → green `#80B036` → purple `#7A3779`. Never green beside orange or purple; never navy beside purple. More than 6 categories → group the tail into tints of one hue.

**Sequential** (5 stops each): `chart.sequential.blue|cyan|green|orange.1–5`.

**Diverging**
- `chart.diverging.kpi` — below/above target: `#F37121 #F9A87B #FFF3EC #87DEF0 #3FC4E0`
- `chart.diverging.financial` — negative/positive: `#C00000 #E8897F #F5F5F5 #8D95C4 #18216D`. Always add +/− labels.

**Priority**: `#C6CAE1 #3FC4E0 #80B036 #F37121 #C00000` (low → critical), reinforced with icon shapes.

Gridlines `#E5E6E6`, axis labels `#626875`, no-data `#E5E6E6`.

## 4. Dark mode

Semantic tokens have dark values in `tokens/semantic.dark.tokens.json` (seeded from ATLAS). Apply with `class="dark"` or `data-theme="dark"`. All dark pairs pass the same checks as light.
