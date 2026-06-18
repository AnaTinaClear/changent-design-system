# Accessibility

Aligned to **WCAG 2.1 AA / VPAT**. The goal: every user — regardless of color perception or visual ability — can read, understand, and interact with the data.

---

## Contrast minimums

| Content | Minimum ratio |
|---------|---------------|
| Regular text | **4.5:1** |
| Large/bold text (≥18pt or 14pt bold) | **3:1** |
| Chart fills, UI components | **3:1** |

Verify with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). High-contrast pairs to rely on: dark navy `#18216D` on white, white on smokey grey `#22292A`, dark grey `#212121` on light grey `#F3F2F0`.

**Known fails — do not use as text on white:** light blue/cyan on white, blue on light blue, orange on light grey. These are fills-only colors.

---

## Color is never the only cue

Every difference encoded in color must *also* be encoded in text, an icon, or a pattern:

- Status → add a label and an icon (`✓ ▲ ▼ ! i`).
- Chart series → add data labels; differentiate lines by pattern (solid/dashed) or marker shape.
- Conditional formatting → use icons or shapes, not color alone.

This is what keeps the report usable in **high-contrast mode**, for **screen readers**, and for **colorblind** users.

---

## Colorblind safety

Red–green deficiencies (deuteranopia/protanopia) collapse certain pairs. **Never place adjacent:**

- green `#80B036` + orange `#F37121` (both read brownish)
- green `#80B036` + purple `#7A3779` (both dull grey)
- navy `#18216D` + purple `#7A3779` (both dark, low contrast)

Safe pairings: **cyan vs anything**, **navy vs orange**, high light–dark contrast in general. If you must use a risky pair, add patterns/labels/icons. Simulate with **Color Oracle** or **Coblis** before publishing.

---

## Power BI accessibility features

- **Alt text:** select visual → Format → General → Alt Text. Describe the *data*, not the appearance. e.g. *"Bar chart comparing potential clients (53,652) and active clients (31,543). Active is ~40% lower."*
- **Page names:** rename pages (never "Page 1") — e.g. "Quarterly Client Utilization". Order visuals logically in the Selection pane.
- **Screen reader:** test with NVDA (free); confirm it reads titles and alt text in logical order.
- **High contrast mode:** test via Windows → Settings → Accessibility → High Contrast → On.
- **Keyboard:** Tab order flows filters → slicers → KPIs → charts (Format → General → Tab Order).
- **Accessible theme:** use [`powerbi/changent-powerbi-theme.json`](../powerbi/changent-powerbi-theme.json).

---

## Pre-publish checklist

Before publishing any report or shipping any UI:

- [ ] All text and fills meet contrast (≥ 4.5:1 text, ≥ 3:1 large fills)
- [ ] No color-only indicators — every difference reinforced with text/icons/patterns
- [ ] Consistent color meaning across all pages (orange = below target everywhere)
- [ ] Max 6 colors per visual element
- [ ] Diverging scales use orange → warm white → cyan (never orange→green)
- [ ] Critical states use danger `#C00000` with a `!` icon
- [ ] Amber and cyan fills use **dark** text, never white
- [ ] Color Oracle / Coblis simulation passed (deuteranopia + protanopia)
- [ ] WebAIM contrast verification completed for text
- [ ] Alt text written for every visual (describes data, not appearance)
- [ ] Pages have descriptive names
- [ ] Screen reader test passed (NVDA)
- [ ] High contrast mode tested
- [ ] Keyboard navigation works in a logical order
