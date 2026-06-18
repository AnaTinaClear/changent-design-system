# Color

Two color systems live side by side. **Brand colors** carry identity. **Semantic colors** carry meaning. They follow different rules and you should never substitute one for the other.

---

## 1. Brand palette

The brand palette identifies Changent and structures the interface. Blue/navy and light blue are the *only* colors allowed on navigation and layout — secondary colors are reserved for data and highlights.

| Token | Hex | On white | Role |
|-------|-----|----------|------|
| `brand.navy` | `#18216D` | 14.2:1 ✅ AAA | Primary CTAs, report titles, table headers, KPI values, selected nav |
| `brand.cyan` | `#3FC4E0` | 2.06:1 ⚠️ fills only | Data viz, light-blue accents — **never text on white** |
| `brand.orange` | `#F37121` | 2.92:1 ⚠️ fills only | Data viz / accents |
| `brand.green` | `#80B036` | 2.57:1 ⚠️ fills only | Data viz |
| `brand.purple` | `#7A3779` | 7.92:1 ✅ | Data viz — use last, never beside green |
| `brand.grey` | `#8B8D90` | 3.33:1 ⚠️ large only | Neutral series / no-data |

**Rules**
- Do **not** use blue or light blue as a background.
- Secondary colors (orange, green, purple, grey) are for **data visualization and informational highlights only** — never navigation, layout, or interface chrome.

---

## 2. Semantic / status palette

> **These are not brand colors.** They were chosen so that *meaning survives* — across contrast requirements and across color-vision deficiencies. They happen to overlap with brand hues in places, but their job is communication, not identity.

Each status ships three values:

- **`fill`** — for badges, chips, progress bars, status rails (as in the QBR deck).
- **`text`** — a darker variant that passes **4.5:1 on white**, for when the status appears as text or an icon.
- **`on-fill`** — the text color to place *on top of* the fill.

| Status | `fill` | `text` (on white) | `on-fill` | Meaning |
|--------|--------|-------------------|-----------|---------|
| **success** | `#198F51` | `#157A43` (5.39:1 ✅) | `#FFFFFF` | Completed, on/above target, on time |
| **warning** | `#F3C11B` | `#7A5800` (6.51:1 ✅) | **`#22292A`** dark | In progress, below target, at risk |
| **danger** | `#C00000` | `#C00000` (6.48:1 ✅) | `#FFFFFF` | Cancelled, critical, SLA breach |
| **info** | `#3FC4E0` | `#0E6E80` (5.90:1 ✅) | **`#22292A`** dark | Highlight, selection, info callout |
| **neutral** | `#8B8D90` | `#535456` (7.58:1 ✅) | `#FFFFFF` | No data, inactive, baseline |

### ⚠️ The two traps

1. **Amber fill needs dark text.** White on `#F3C11B` is **1.69:1** — effectively invisible. Always use `--c-warning-on-fill` (dark ink) on amber. This is why the QBR "In Progress" rail uses white text *on the rail* but the rail is large/bold — for chips and labels, use dark text.
2. **Cyan fill needs dark text.** White on `#3FC4E0` is **2.06:1**. Use dark ink on cyan fills.

### Always reinforce
Never rely on color alone. Pair every status with:
- an **icon** (`✓` success, `▲`/`▼` direction, `!` critical, `i` info), and/or
- a **text label** ("Completed", "At risk").

This is a hard requirement for screen readers, high-contrast mode, and colorblind users.

---

## 3. Neutrals & surfaces

| Token | Hex | Use |
|-------|-----|-----|
| `white` | `#FFFFFF` | Dashboard bg, card surface |
| `grey-50` | `#F8F9FC` | Table alternating rows |
| `grey-100` | `#F3F2F0` | Filter pane / left nav background |
| `grey-150` | `#E2E8F0` | **Deck content-slide canvas** (behind white cards) |
| `grey-200` | `#E5E6E6` | Gridlines, dividers, null state — **never a data series** |
| `grey-500` | `#6B7280` | Secondary labels, captions (4.83:1) |
| `grey-700` | `#535456` | Dark grey body alt (7.58:1) |
| `ink` | `#22292A` | Default body & title text (14.8:1) |
| `deck.bg-dark` | `#051E48` | Title & closing slide background, header bar |

---

## 4. Data visualization

### Categorical — apply in this order, **max 6 per visual**
`#18216D` → `#3FC4E0` → `#F37121` → `#8B8D90` → `#80B036` → `#7A3779`

Need more than 6 categories? Group the long tail into **tints of the same hue**, don't add new colors.

**Colorblind safety:** never place these pairs adjacent — green+orange, green+purple, navy+purple (they collapse under deuteranopia/protanopia). Safest contrast pair: **cyan vs navy** or **navy vs orange**.

### Sequential (heat maps, intensity)
Low → high per hue, set as Minimum/Maximum in PBI conditional formatting. See `tokens.json → color.dataviz.sequential`.

### Diverging (above/below target, variance)
`#F37121` (min) → `#FFF3EC` (center) → `#3FC4E0` (max). Colorblind safe. **Always add +/− labels.**

---

## Contrast cheat-sheet (on white `#FFFFFF`)

```
navy   #18216D  14.2:1  AAA   text anywhere
ink    #22292A  14.8:1  AAA   body text
grey-700 #535456 7.58:1 AAA   secondary text
purple #7A3779   7.92:1 AA    text ok
danger #C00000   6.48:1 AA    text ok
grey-500 #6B7280 4.83:1 AA    captions
─────────────────── 4.5 text threshold ───────────────────
green  #80B036   2.57:1       FILL ONLY
orange #F37121   2.92:1       FILL ONLY
cyan   #3FC4E0   2.06:1       FILL ONLY
─────────────────── 3.0 large-fill threshold ─────────────
grey   #8B8D90   3.33:1       large fills only
```

Verify any new pairing with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) and simulate with Color Oracle / Coblis before publishing.
