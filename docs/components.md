# Components

Reusable patterns for reporting UI (HTML/React). All classes ship in [`css/changent-ds.css`](../css/changent-ds.css). Pair every status with an icon or label — never color alone.

---

## Status chip

```html
<span class="chip chip--success">✓ Completed</span>
<span class="chip chip--warning">● In Progress</span>   <!-- dark text on amber -->
<span class="chip chip--danger">! Cancelled</span>
<span class="chip chip--info">i Selected</span>          <!-- dark text on cyan -->
<span class="chip chip--neutral">— No data</span>
```

Pill radius, semibold, 12px. `warning` and `info` use **dark** `on-fill` text by design.

---

## Status as text

When a status appears inline (not as a chip), use the `-text` variant so it passes 4.5:1 on white:

```html
<span class="txt--success">Above target</span>
<span class="txt--danger">SLA breach</span>
```

---

## KPI card

```html
<div class="card">
  <p class="kpi-value">79%</p>
  <p class="kpi-label">Client Utilization</p>
  <span class="txt--success">▲ Above target</span>
</div>
```

KPI number in `display` (32px) navy. Always add a directional icon for trend, not just red/green.

---

## Progress bar

```html
<div class="progress"><span style="width:79%"></span></div>
```

Fill defaults to `success.fill` on a `grey-200` track. Show the numeric value alongside.

---

## Table

```html
<table class="table">
  <thead><tr><th>Program</th><th>Status</th><th>Capacity</th></tr></thead>
  <tbody>
    <tr><td>Fidelity</td><td><span class="txt--success">On track</span></td><td>79%</td></tr>
    <tr><td>Pioneer</td><td><span class="txt--warning">At risk</span></td><td>62%</td></tr>
  </tbody>
</table>
```

Navy header, white bold text, alternating `grey-50` rows, `grey-200` row borders.

---

## Card (generic)

```html
<div class="card"> … </div>
```

White surface, `radius.md`, subtle `shadow.card`, `sp-6` padding. **No accent stripes** — differentiate with tint backgrounds (`*-tint` tokens) or the shadow, never an edge bar.

---

## React note

The CSS variables work in any framework. For React, import the stylesheet once at the app root and use the utility classes, or read raw values from `tokens/tokens.json` if you generate styled-components / CSS-in-JS. Don't use browser `localStorage`/`sessionStorage` in artifacts rendered inside Claude.
