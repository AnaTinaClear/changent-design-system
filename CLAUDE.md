# Working with the Changent Design System

When generating **any** deck, dashboard, reporting UI, web page, or chart for Changent, follow these rules. The canonical values live in [`tokens/tokens.json`](tokens/tokens.json); the CSS in [`css/changent-ds.css`](css/changent-ds.css); the Power BI theme in [`powerbi/changent-powerbi-theme.json`](powerbi/changent-powerbi-theme.json).

## Always
- **Font:** Segoe UI everywhere.
- **Status colors are semantic, not brand.** Use `color.semantic.*` for success/warning/danger/info/neutral. Reinforce every status with an icon **and** a label — never color alone.
- **Amber (`#F3C11B`) and cyan (`#3FC4E0`) fills require dark text** (`on-fill` = `#22292A`). White on these fails contrast.
- **When a status is text on white, use its `text` variant** (e.g. `success.text #157A43`), not its `fill`.
- **Contrast:** ≥4.5:1 text, ≥3:1 large/fills. Brand cyan/orange/green are fills-only on white.
- **Max 6 colors per visual.** Categorical order: navy → cyan → orange → grey → green → purple. Never green beside orange or purple.
- **Spacing:** 4/8 grid. **Radius:** `md` (8px) cards, `pill` chips. **Card elevation:** `shadow.card`.
- **Minimum 14px/14pt** for content; 12 only for tooltips/footnotes/legends.

## Never
- No accent lines under titles; no decorative color bars or edge stripes on cards (the deck **status rail** is the only large color block).
- No blue/light-blue backgrounds; secondary brand colors never on navigation/layout.
- No white text on amber or cyan fills.
- Don't center body text; left-align (center only titles).

## Decks
Model on the QBR: dark navy (`#051E48`) title/closing slides; light canvas (`#E2E8F0`) content slides with white cards; left **status rail** colored by status. See [`docs/decks.md`](docs/decks.md).

## Logos
Use `assets/logos/`. On dark surfaces (`#051E48`) use the **white transparent PNG** (`changent-*-white.png`); on light surfaces use `changent-*-primary.jpg`. Horizontal for headers/title slides, vertical for the narrow left nav. Never put the primary JPG on a dark/colored background. See [`docs/logos.md`](docs/logos.md).

## Reporting UI / Power BI
Layout: left nav (`#F3F2F0`), global filters under a repeated header+logo, KPIs top-left (F-pattern). See [`docs/layout.md`](docs/layout.md) and [`docs/accessibility.md`](docs/accessibility.md).
