# Partner Proposal Template

A single reusable landing page for myBlueprint partner/sponsorship proposals.

## Files
- `index.html` — page structure. Rarely needs editing.
- `styles.css` — brand colors (from the myBlueprint Brand Style Guide) and component styles.
- `config.js` — **all partner-specific content lives here.** This is what you edit for a new proposal.
- `app.js` — rendering + interaction logic. Reads from `config.js`. Rarely needs editing.
- `assets/` — logo files (see below).

## Managing logos

Logos are just image files sitting in `/assets`, referenced by path in `config.js`:

```js
logos: {
  myBlueprint: { src: "assets/myblueprint-logo.png", alt: "myBlueprint" },
  partner:     { src: "assets/win-canada-logo.png", alt: "Women in Nuclear Canada" },
},
```

**To swap in a new partner's logo:**
1. Drop the partner's logo file into `assets/` (PNG or SVG both work; SVG scales better).
2. Update `logos.partner.src` in `config.js` to point at the new filename.
3. Update `logos.partner.alt` to the partner's name (screen-reader / SEO text).

**A note on the hero treatment:** both logos sit inside small white rounded "chips" in the hero, rather than being color-filtered to match the dark background. This is deliberately more robust than a CSS invert filter:
- Every logo renders in its real, correct brand colors — no risk of a multi-color mark getting flattened into a single-color silhouette.
- It works regardless of whether the source PNG has a transparent background. (A CSS invert filter on an *opaque* PNG — one with a solid white canvas instead of transparency — turns the entire rectangular image white, hiding the logo completely. This actually happened with the WiN Canada logo file, which has no alpha channel.)
- If you'd prefer the flush, no-background look for a specific partner, you can still remove the chip wrapper and drop in a dedicated white/reversed logo file if the partner can supply one — just don't rely on `brightness-0 invert` as a substitute, since it silently breaks on opaque images.

**Quick check when a logo looks wrong:** open the page in a browser, right-click → Inspect → Network tab, reload, and look for a red/404 entry for the image path. A logo rendering as a plain colored block (instead of the actual mark) almost always means the image failed to load — usually because the `assets` folder isn't sitting directly next to `index.html`, or the filename in `config.js` doesn't exactly match the file on disk (this is case-sensitive on Mac/Linux, even if it isn't on Windows).

**File naming convention:** `assets/<partner-slug>-logo.png` (e.g. `win-canada-logo.png`) keeps things predictable if this folder accumulates logos across multiple past proposals.

## Reusing this template for a new proposal
1. Copy the whole folder.
2. Replace the two files in `assets/`.
3. Edit `config.js` top to bottom — hero copy, opportunity stats, the three package components, pricing, contact info.
4. Preview with VS Code's Live Server extension (or `python3 -m http.server`) before sending.
