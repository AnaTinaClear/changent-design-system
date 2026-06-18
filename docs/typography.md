# Typography

**One typeface: Segoe UI.** It's the official Microsoft font shipped inside Power BI, so it renders natively in reports and keeps decks, UI, and dashboards consistent. Use it for *all* UI and content.

```
font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
```

Weights used: **Regular (400)**, **Semibold (600)**, **Bold (700)**.

---

## Deck type ramp (points)

From the Changent typography treatment. Decks use a large display scale because they're viewed at distance and exported to PDF/PowerPoint.

| Use case | Size | Weight |
|----------|------|--------|
| Report title | 45pt | Bold |
| Report subheader | 24pt | Bold |
| Column labels & button links | 18pt | Regular / Semibold |
| Sidebar menu items | 14pt | Semibold / Bold |
| Filter titles | 14pt | Semibold |
| General report content | 14pt | Regular |
| Dropdowns, axis titles, legends | 12pt | Regular |

---

## UI type ramp (pixels)

For reporting UI and web.

| Token | Size | Weight | Use |
|-------|------|--------|-----|
| `display` | 32px | Bold | KPI callout numbers |
| `h1` | 24px | Bold | Page title |
| `h2` | 18px | Semibold | Section header |
| `h3` | 16px | Semibold | Card title |
| `body` | 14px | Regular | **Minimum for content** |
| `caption` | 12px | Regular | Tooltips, footnotes, legends **only** |

Line height: **1.2** for titles/KPIs, **1.5** for body.

---

## Rules

- **Minimum 14px/14pt** for titles, labels, and key data points. 12 only for incidental text.
- **Sentence case** for titles, labels, and content. Avoid ALL CAPS for long titles — hard to scan.
- **Left-align** text inside visuals, tables, and cards. Center only slide titles.
- **Limit to 3 sizes per screen** to avoid visual noise.
- **Bold sparingly** — only KPIs, selected filters, or alerts.
- Give every chart a **descriptive title** ("Client Capacity: Potential vs Active", not "Capacity").
- Maximum **2 font colors per screen** (brand-approved). Never use color alone to convey meaning.
