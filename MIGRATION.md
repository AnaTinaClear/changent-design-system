# Migrating to v2

## Install in an app

Until the package is published to npm, install straight from GitHub:

```bash
npm i github:AnaTinaClear/changent-design-system#v2.0.0
```

```css
/* src/index.css — replaces the app's own :root / @theme blocks */
@import "tailwindcss";
@import "@changent/design-system/tailwind.css";
```

```ts
// charts
import { chart } from "@changent/design-system/tokens";
<Bar fill={chart.categorical[0]} />
<CartesianGrid stroke={chart.gridline} />
```

## v1 → v2 in this repo

| v1 | v2 |
|---|---|
| `tokens/tokens.json` | `tokens/*.tokens.json` (DTCG) — edit, then `npm run check` |
| `--c-*` variables | `--cds-color-*` (v1 names still work as deprecated aliases in `css/changent-ds.css`) |
| `color.brand.*` | `color.navy.900`, `color.cyan.500`, `color.orange.500`… |
| `color.neutral.ink` `#22292A` | `color.text.primary` `#1A1A18` |
| `color.neutral.grey-500` `#6B7280` | `color.text.muted` `#626875` |
| `color.neutral.grey-200` `#E5E6E6` | `color.border.divider` (decorative) — controls use `color.border.default` `#808285` |
| `color.deck.bg-dark` | `color.surface.inverse` |
| `color.dataviz.*` | `color.chart.*` |
| `border.default` `1px solid #E5E6E6` | `1px solid var(--cds-color-border-default)` for controls, `--cds-color-border-divider` for separators |

## Hex → token map for the Changent apps

Found by auditing `atlas-qa-view`, `changent-fidelity` and `changent-program-snapshot`. Replace each literal with the token (Tailwind class in parentheses).

| Found in apps | Where | Replace with |
|---|---|---|
| `#1A1A18` | body text | `text.primary` (`text-foreground`) |
| `#535456` | secondary text, sidebar | `text.secondary` (`text-muted-foreground`) |
| `#8B8D90` (as text) | captions | `text.muted` (`text-muted-foreground`) — or `text.disabled` if disabled |
| `#C0C0C0` | disabled text, button borders | disabled text → `text.disabled`; borders → `border.default` (`border-border`) |
| `#E0DEDD`, `#D0D3E0`, `#E8E7E3` | borders | controls/cards → `border.default`; separators → `border.divider` (`border-divider`) |
| `#E8E8E8`, `#EFEFEF`, `#F0F0F0` | chart gridlines, dividers | `chart.gridline` / `border.divider` |
| `#F3F2F0` | sidebar, filter bar | `surface.nav` (`bg-sidebar`, `bg-muted`) |
| `#FAFAFA`, `#F8F8F7` | subtle surfaces | `surface.subtle` |
| `#EEF0FB`, `#E3E6F5`, `#F0F2FF` | table/section headers, hover | `surface.accent` (`bg-accent`) |
| `#E8EAF6` | active nav item | `surface.accent-strong` (`bg-sidebar-accent`) |
| `#111A5A` | navy hover | `interactive.primary-hover` |
| `#C0392B`, `#CC0000`, `#CC2200` | errors, negative | `status.danger.*` (`bg-destructive`, `text-destructive`) |
| `#FCE8E8`, `#FDF1F1` | error backgrounds | `status.danger.tint` |
| `#0E6B36`, `#5DB85A` | positive | `status.success.text` / `status.success.fill` (`bg-success`) |
| `#F2FBF5`, `#E8F4D5` | positive backgrounds | `status.success.tint` |
| `#CA8A04`, `#A04700` | warning | `status.warning.fill` / `status.warning.text` (`bg-warning`) |
| `#FBE4D5`, `#FDE8D8` + `#C0622A` | alert box | `status.warning.tint` + `status.warning.text` |
| `#2563EB`, `#2F7ED8`, `#2B6FD1` | off-brand blues | `interactive.primary` / `chart.categorical.1`, or `status.info.text` for links-as-info |
| `#2CADC0`, `#63C6E0`, `#9FD8F0`, `#0B6880` | off-palette cyans | `chart.categorical.2` / `chart.sequential.cyan.*` / `status.info.text` |
| `#F5821F`, `#F4742B`, `#EB6834` | off-palette oranges | `chart.categorical.3` (`#F37121`) |
| `#8E4B9E` | off-palette purple | `chart.categorical.6` (`#7A3779`) |
| `#455063` | ATLAS "hidden" badge | `status.neutral.*` |

Domain-specific ATLAS families (`quality-*`, `visibility-*`) should map to `status.*` rather than keep their own colors. If a domain genuinely needs a new meaning, add a semantic token to this repo instead of a local color.

## Type sizes

| Found | Replace with |
|---|---|
| 9, 10, 10.5, 11 px (`text-[10px]` …) | 12 px `text-caption` if tooltip/footnote/legend/axis, otherwise 14 px `text-body` |
| 13 px body (`font-size: 13px` on `body`) | 14 px `text-body` |
| `text-xs` (12 px) on content | `text-body` |

Dense tables may need layout changes (column widths, truncation with tooltip) once cells go to 14 px — plan for it rather than shrinking the font.
